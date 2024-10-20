import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  console.log("method hit", req.method);

  if (!process.env.JWT_SECRET) {
    return NextResponse.json(
      { error: "JWT_SECRET is not defined" },
      { status: 500 }
    );
  }

  const SECRET_KEY = process.env.JWT_SECRET;

  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "email and password are required" },
        { status: 400 }
      );
    }

    const token = jwt.sign({ email, password }, SECRET_KEY, {
      noTimestamp: true,
    });

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error("Error generating JWT:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
