import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
    unique: true,
  },
  skills: {
    type: Array,
    required: true,
    unique: true,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;