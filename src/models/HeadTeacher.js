import mongoose from "mongoose";

const HeadTeacherSchema = new mongoose.Schema(
  {

    Firstname: {type: String},
    Lastname: {type: String},
    phone: {type:String}, 
    password: {type: String},
    Birth: {type:Date},
    Gender: {type:String},
    Inamayababyeyi: {type:String},
   babyeyi: {type:String},
   Amatangazo: {type:String},
    isActive: {
      type:Boolean,
      default:true,

    },

    role: { type: String, enum: ["HeadTeacher", "admin"], default: "HeadTeacher" },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);
export default mongoose.model('HeadTeacher',HeadTeacherSchema)


