import { MongoClient } from "mongodb";

const URI =
  process.env.MONGODB_URI??
  // process.env.MONGODB_LOCAL_URI??
  "mongodb://127.0.0.1:58813/?directConnection=true";

const client = new MongoClient(URI);

let mongoClientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise:
    | Promise<MongoClient>
    | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }

  console.log("CLIENT URL", URI)

  mongoClientPromise = global._mongoClientPromise;
} else {
  mongoClientPromise = client.connect();
}

export default mongoClientPromise;