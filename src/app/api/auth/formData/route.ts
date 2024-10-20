import { MongoClient } from "mongodb";
import { NextResponse, NextRequest } from "next/server";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
const client = new MongoClient(uri);

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    try {
      await client.connect();
      const database = client.db("nextjs-task");
      const collection = database.collection("formData");

      const { name, email, phone, fields } = await req.json();
      const result = await collection.insertOne({
        name,
        email,
        phone,
        fields,
      });

      return NextResponse.json({
        message: "Form data stored successfully",
        status: 200,
        result,
      });
    } catch (error) {
      return NextResponse.json({ message: "Storing form data failed", error });
    } finally {
      await client.close();
    }
  } else {
    return NextResponse.json({ message: "Method not allowed" });
  }
}
