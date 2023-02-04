import mongoose from "mongoose";

const StudentsSchema = new mongoose.Schema(
  {

    Firstname: {type: String},
    Lastname: {type: String},
    phone: {type:String}, 
    password: {type: String},
    Birth: {type:Date},
    Gender: {type:String},
     
    isActive: {
      type:Boolean,
      default:true,

    },

    role: { type: String, enum: ["students", "admin"], default: "students" },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);
export default mongoose.model('Students',StudentsSchema)


