import mongoose from "mongoose";
const hospitalSchema=new mongoose.Schema({
name:{
    type:String,
    require:true,
},
address1:{
type:String,
require:true,
},
address2:{
    type:String,
    require:true,
    },
    city:{
        type:String,
        require:true,
        },

    specalizedIn:[
        {
            type:String,
        }
    ]
},{timestamps})
export const Hospital=mongoose.model("Hospital",hospitalSchema)