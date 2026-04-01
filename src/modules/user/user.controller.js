import express from "express"
import { userModel } from "../../database/models/user.model.js"

let router = express.Router()

router.get("/get_users", async(req ,res)=>{
    let users = await userModel.find()
    if(users.length==0){
        res.status(400).json({success:false , data:"no users found"})
    }else{
        res.status(200).json({success:true , data:users})
    }
})


router.post("/add_user", async(req ,res)=>{
    let{name , email , password} = req.body
    let existedEmail = await userModel.findOne({email})
    if(existedEmail){
       return res.status(400).json({success:false , data:"user already exist"})
    }
    let addUser = await userModel.insertMany({name , email , password})
    if(addUser){
        res.status(200).json({success:true , data:addUser})
    }else{
        res.json({message:"something went wrong"})
    }
})

router.put("/update_user/:id", async(req ,res)=>{
    let {id} = req.params
    let {name} = req.body
    if(!name){
        res.status(400).json({success:false , data:"name is required"}) 
    }
    let user = await userModel.findById(id)
    if(!user){
        res.status(400).json({success:false , data:"user not found"})
    }
    let updateUser = await userModel.findByIdAndUpdate(id , {name} ,{new:true})
    if(updateUser){
        res.status(200).json({success:true , date:updateUser})
    }
})

router.delete("/delete_user/:id", async(req , res)=>{
    let {id} = req.params
    let deleted_user= await userModel.findByIdAndDelete(id)
    if(deleted_user){
        res.status(200).json({success:true})
    }else{
        res.status(400).json({success:false , data:"user not found"})
    }
})


export default router