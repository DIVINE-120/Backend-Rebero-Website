import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {

    Firstname: {type: String},
    Lastname: {type: String},
    email: { type: String,
      unique: true,
      required: true },

      phone: {type:String}, 
      password: {type: String},
     
    isActive: {
      type:Boolean,
      default:true,

    },

    role: { type: String, enum: ["user", "admin"], default: "user" },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);
export default mongoose.model('user',UserSchema)


