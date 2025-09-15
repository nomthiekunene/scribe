import { NextResponse } from "next/server";
import connectToDB from "@/lib/mongodb";
import user from "../../../../../models/user";
import bcrypt from "bcryptjs"; 


interface SignUpBody {
  name: string;
  username: string;
  email: string;
  password: string;
}

export async function POST(req: Request) {
  try {
    const body: SignUpBody = await req.json();
    const { name, username, email, password } = body;

    
    await connectToDB();

    
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

  
    const newUser = new user({
      name,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({ message: "User created successfully" });
  } catch (error) {
    console.error("Sign Up Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}