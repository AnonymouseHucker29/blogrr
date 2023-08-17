import mongoose from "mongoose";

export default async function connectDB() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI || "");
      console.log("Successfully created a connection to MongoDB.");
    }
  } catch (error) {
    console.log(error);
  }
}
