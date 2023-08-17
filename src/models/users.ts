import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.models.Users || mongoose.model("Users", UserSchema);

export default UserModel;
