import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}
const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    await client.connect();

    const db = client.db("nextjs-task");
    const collection = db.collection("credentials");

    const data = await collection.findOne({ email });

    if (!data) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error occurred: ", error);
    return NextResponse.json(
      { success: false, message: "An error occurred" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
