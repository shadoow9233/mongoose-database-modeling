import mongoose from "mongoose";
const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    salary:{
    type:Number,
    require:true,
    
    },
    qualification:{
        type:Number,
        require:true,
        
    },
    experienceInYears:{
    type:Number,
    default:0,
    },
    worksInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }
    ],

},{timestamps})
export const Doctor=mongoose.model("Doctor",doctorSchema)