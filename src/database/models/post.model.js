import mongoose from "mongoose";


const postSchema = mongoose.Schema({
   
    content:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"users",
        required:true
    },
})

export const postModel = mongoose.model("posts", postSchema)