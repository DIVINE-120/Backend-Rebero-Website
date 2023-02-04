import express from "express";
import headTeacherController from "../controller/headTeacherController";


const headTeacherRoute=express.Router();

CategoryRoute.post("/",headTeacherController.createBabyeyi);

CategoryRoute.get("/",headTeacherController.getAllBabyeyi);
CategoryRoute.get("/:id",headTeacherController.getOneBabyeyi);
CategoryRoute.put("/:id",headTeacherController.updateAll);
CategoryRoute.delete("/:id",headTeacherController.deleteBabyeyi);

export default headTeacherRoute; 