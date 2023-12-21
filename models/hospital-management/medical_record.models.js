import mongoose from "mongoose";
const meddicalRecordSchema=new mongoose.Schema({

},{timestamps})
export const medicalRecord=mongoose.model("MedicalRecord",meddicalRecordSchema)