import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  password: {
    type: String,
    required: true,
  },
  is_active: {
    type: Number,
    default: 1, 
  },
  role: {
    type: String,
    default: "admin",
  }
});

export const Auth = mongoose.model("Auth", AuthSchema);
