import mongoose from "mongoose";
const orderItemSchema= new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        require:true,
    }
})
const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        require:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema],
    },
    orderItems:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        enum:["PENDING","CANCALLED","DELIVERED"],
        default:"PENDING",
    }

},{timestamps:true})