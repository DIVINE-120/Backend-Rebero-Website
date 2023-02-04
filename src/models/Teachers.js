import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
  {

    Firstname: {type: String},
    Lastname: {type: String},
     email: { type: String,
      unique: true,
      required: true },

      phone: {type:String}, 
      password: {type: String},
      Birth: {type:Date},
     Gender: {type:String},
    isActive: {
      type:Boolean,
      default:true,

    },

    role: { type: String, enum: ["Teacher", "admin"], default: "Teacher" },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);
export default mongoose.model('Teacher',TeacherSchema)


