import { NextResponse } from "next/server";
import  connectToDB from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import user from "../../../../../models/user";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    await connectToDB();

    const User = await user.findOne({ email });
    if (!User) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, User.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // ✅ User is authenticated
    return NextResponse.json({
      message: "Signin successful",
      user: {
        id: User._id,
        name: User.name,
        email: User.email,
      },
    });
  } catch (error: unknown) {
    // TypeScript-safe error handling
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
  }
}
