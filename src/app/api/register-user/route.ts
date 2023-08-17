import connectDB from "@/lib/mongoDB";
import UserModel from "@/models/users";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  try {
    await connectDB();
    await UserModel.create({ username, password });

    console.log(
      `Account successfully created.\nUsername: ${username}, Password: ${password}`
    );

    return NextResponse.json({
      message: "User successfully created.",
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.message);
      }
      return NextResponse.json(errorList);
    } else {
      return NextResponse.json(error);
    }
  }
}
