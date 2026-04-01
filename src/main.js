import express, { json } from "express"
import { databaseConnection } from "./database/connection.js"
import userRouter from "./modules/user/user.controller.js"
import postRouter from "./modules/post/post.controller.js"

    const app = express()
    app.use(express.json())
    databaseConnection()
    app.use(userRouter)
    app.use(postRouter)

    export const server = app.listen(3000, ()=>{
        console.log("server running on port 3000")
    })
    
    export default app
    

