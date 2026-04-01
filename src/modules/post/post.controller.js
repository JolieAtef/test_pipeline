import express from "express"
import { postModel } from "../../database/models/post.model.js"
import { userModel } from "../../database/models/user.model.js"


let router = express.Router()

router.get("/get_posts", async(req ,res)=>{
    let posts = await postModel.find()
    if(posts.length==0){
        res.status(400).json({success:false, data:"no posts found"})
    }else{
        res.status(200).json({success:true, data:posts})
    }
})


router.post("/add_post", async(req , res)=>{
    let{content , description , userId}= req.body
    let user = await userModel.findById(userId)
    if(!user){
        return res.status(400).json({success:false , data:"user not found"})
    }
    let addPost= await postModel.insertMany({content , description , userId})
    if(addPost){
        res.status(200).json({success:true , data:addPost})
    }else{
        res.json({message:"something went wrong"})
    }
})

router.put("/update_post/:id", async(req , res )=>{
    let{id} = req.params
    let{content , description}= req.body
    let updatedPost = await postModel.findByIdAndUpdate(id ,{content , description} , {new :true})
    if(updatedPost){
        res.status(200).json({success:true , data:updatedPost})
    }else{
        res.status(400).json({success:false , data:"post not found"})
    }
})

router.delete("/delete_post/:id", async(req ,res)=>{
    let {id} = req.params
    let deletedPost = await postModel.findByIdAndDelete(id)
    if(deletedPost){
        res.status(200).json({success:true})
    }else{
        res.status(400).json({success:false , data:"post not found"})
    }
})

export default router