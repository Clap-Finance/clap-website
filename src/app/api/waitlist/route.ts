import { NextRequest, NextResponse } from "next/server";
import mongoClientPromise from "@/lib/mongodb";
import { WaitlistPayload } from "@/types/waitlist";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

const VALID_DEVICES = new Set(["Desktop", "Mobile", "Tablet"]);

type ApiResponse<T = null> = {
  success: boolean;
  type: string;
  message: string;
  data?: T;
};

class ApiError extends Error {
  status: number;
  type: string;

  constructor(status: number, type: string, message: string) {
    super(message);

    this.status = status;
    this.type = type;
  }
}

function response<T>(
  payload: ApiResponse<T>,
  status: number,
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(payload, { status });
}

function validatePayload(payload: WaitlistPayload) {
  const { full_name, email, terms, device_type, time_on_page } = payload;

  if (!full_name?.trim() || full_name.trim().length < 2) {
    throw new ApiError(
      400,
      "VALIDATION_ERROR",
      "Full name must be at least 2 characters",
    );
  }

  if (!email?.trim()) {
    throw new ApiError(400, "VALIDATION_ERROR", "Email is required");
  }

  if (!EMAIL_REGEX.test(email)) {
    throw new ApiError(400, "VALIDATION_ERROR", "Invalid email address");
  }

  if (!terms) {
    throw new ApiError(400, "TERMS_REQUIRED", "You must accept the terms");
  }

  if (device_type && !VALID_DEVICES.has(device_type)) {
    throw new ApiError(400, "VALIDATION_ERROR", "Invalid device type");
  }

  if (
    time_on_page !== undefined &&
    (typeof time_on_page !== "number" || time_on_page < 0)
  ) {
    throw new ApiError(400, "VALIDATION_ERROR", "Invalid time_on_page value");
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: WaitlistPayload = await req.json();

    validatePayload(body);

    const client = await mongoClientPromise;
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("waitlist");
    const normalizedEmail = body.email.trim().toLowerCase();

    const document = {
      full_name: body.full_name.trim(),
      email: normalizedEmail,
      terms: true,
      device_type: body.device_type ?? "Desktop",
      country: body.country ?? "Unknown",
      referral_source: body.referral_source ?? "Direct",
      campaign_source: body.campaign_source ?? "Organic",
      time_on_page: body.time_on_page ?? 0,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const result = await collection.insertOne(document);

    return response(
      {
        success: true,
        type: "SUCCESS",
        message: "Successfully joined the Clap waitlist",

        data: {
          id: result.insertedId,
          email: normalizedEmail,
        },
      },
      201,
    );
  } catch (error: any) {

    if (error?.code === 11000) {
      return response(
        {
          success: false,
          type: "EMAIL_EXISTS",
          message: "This email already exists on the waitlist",
        },
        409,
      );
    }

    if (error instanceof ApiError) {
      return response(
        {
          success: false,
          type: error.type,
          message: error.message,
        },
        error.status,
      );
    }

    console.error("[WAITLIST_POST_ERROR]", error);

    return response(
      {
        success: false,
        type: "SERVER_ERROR",
        message: "Something went wrong. Please try again later.",
      },
      500,
    );
  }
}
