import { NextResponse } from "next/server";
import mongoClientPromise from "@/lib/mongodb";

type WaitlistStatsResponse = {
  success: boolean;
  type: string;
  message: string;
  data?: {
    total_signups: number;
    total_countries: number;
    countries: {
      country: string;
      signups: number;
    }[];
  };
};

function response<T>(
  payload: T,
  status: number,
): NextResponse<T> {
  return NextResponse.json(payload, { status });
}

export async function GET() {
  try {
    const client = await mongoClientPromise;

    const db = client.db(
      process.env.MONGODB_DB_NAME ?? "clap_waitlist",
    );

    const collection = db.collection(
      process.env.USER_COLLECTION ?? "waitlist",
    );

    const total_signups = await collection.countDocuments();

    const countryAggregation = await collection
      .aggregate<{ country: string; signups: number }>([
        {
          $group: {
            _id: "$country",
            signups: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            country: "$_id",
            signups: 1,
          },
        },
        {
          $sort: {
            signups: -1,
          },
        },
      ])
      .toArray();

    const total_countries = countryAggregation.length;

    return response<WaitlistStatsResponse>(
      {
        success: true,
        type: "SUCCESS",
        message: "Waitlist stats fetched successfully",
        data: {
          total_signups: total_signups + 1080, // Adding 1080 to account for pre-launch signups,
          total_countries,
          countries: countryAggregation,
        },
      },
      200,
    );
  } catch (error) {
    console.error("[WAITLIST_STATS_ERROR]", error);

    return response<WaitlistStatsResponse>(
      {
        success: false,
        type: "SERVER_ERROR",
        message: "Failed to fetch waitlist stats",
      },
      500,
    );
  }
}