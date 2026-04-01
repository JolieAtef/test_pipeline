import mongoose from "mongoose";

export const databaseConnection=()=>{
      mongoose.connect("mongodb://localhost:27017/jest_users").then(()=>{
        console.log("datebase connected")
      }).catch((err)=>{
        console.log(err)
      })
}