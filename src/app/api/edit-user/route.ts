import connectDB from "@/lib/mongoDB";
import UserModel from "@/models/users";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

interface UpdatedUserData {
  username?: string;
  email?: string;
  image?: string;
}

export async function PUT(req: NextRequest) {
  const { username, email, image } = await req.json();

  try {
    await connectDB();

    const user = await UserModel.findOne({
      username,
    });

    const updatedUserData: UpdatedUserData = {};

    if (username) {
      updatedUserData.username = username;
    }
    if (email) {
      updatedUserData.email = email;
    }
    if (image) {
      updatedUserData.image = image;
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      user._id,
      updatedUserData,
      {
        new: true,
      }
    );

    console.log("Updated user info:", updatedUser);

    return NextResponse.json({
      message: "User successfully updated.",
      user: updatedUser,
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
