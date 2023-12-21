import mongoose from "mongoose";
const patientSchema=new mongoose.Schema({
name:{
    type:String,
    require:true,
},
address:{
    type:String,
    require:true,
}, 
diagonsedWith:{
    type:String,
    require:true,
},
age:{
    type:Number,
    require:true,
},
bloodGroup:{
    type:String,
    require:true,
},
gender:{
    type:String,
    enum:["M","F","O"],
    require:true,
},
admittedIn:{
type:mongoose.Schema.Types.ObjectId,
ref:"Hospital"
},
},{timestamps})
export const Patient=mongoose.model("Patient",patientSchema)