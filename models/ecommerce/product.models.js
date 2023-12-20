
import mongoose from "mongoose";
const productSchema= new mongoose.Schema({
description:{
    type:String,
    require:true,
},
name:{
    type:String,
    require:true,
   
},
productImae:{
    type:String,
},
Price:{
type:number,
default:0,
},
stock:{
    type:number,
    default:0,
},
category:{
type:mongoose.Schema.Types.ObjectId,
ref:"Category ",
require:true, 
},
owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
}
},{timestamps:true})
export const Product=mongoose.model("Product",{productSchema})