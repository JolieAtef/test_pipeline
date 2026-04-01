import request from "supertest"
import app from "../../main.js"
import mongoose from "mongoose"
import {server} from "../../main.js"



// describe("get all posts", ()=>{
//     it("should return array of posts" , async()=>{
//         const res = await request(app).get("/get_posts")
//         expect(res.status).toBe(200)
//         expect(res.body.success).toBe(true)
//     })
    
//     it("should return error no posts found" , async()=>{
//         const res = await request(app).get("/get_posts")
//         expect(res.status).toBe(400)
//         expect(res.body.success).toBe(false)
//     })
// })

describe("add post",()=>{
    // it("should add post", async()=>{
    //     const res = await request(app).post("/add_post").send({
    //         content:"first",
    //         description:"eriohgoihgisjreiof",
    //         userId:"69c3c5cb7b83854615174f3f"
    //     })
    //     expect(res.status).toBe(200)
    //     expect(res.body.success).toBe(true)
    // }),
    it("should return error user not found", async()=>{
        const res = await request(app).post("/add_post").send({
            content:"first",
            description:"eriohgoihgisjreiof",
            userId:"69c3c5cb7b83854615175f3f"
        })
        expect(res.status).toBe(400)
        expect(res.body.success).toBe(false)
    })
})

describe("update post",()=>{
    // it("should update post", async()=>{
    //     const res = await request(app).put("/update_post/69c3c9ca72e5e593f060e536").send({
    //         content:"first test update",
    //         description:"eriohgoihgisjreiof"
    //     })
    //     expect(res.status).toBe(200)
    //     expect(res.body.success).toBe(true)
    // }),
    it("should return error user not found", async()=>{
        const res = await request(app).put("/update_post/69c3c8ca72e5e593f060e536").send({
            content:"first",
            description:"eriohgoihgisjreiof"
        })
        expect(res.status).toBe(400)
        expect(res.body.success).toBe(false)
    })
})

describe("delete post",()=>{
    // it("should delete post", async()=>{
    //     const res = await request(app).delete("/delete_post/69c3ca97daec26d1e6ea6ef7")
    //     expect(res.status).toBe(200)
    //     expect(res.body.success).toBe(true)
    // }),
    it("should return error user not found", async()=>{
        const res = await request(app).delete("/delete_post/69c3ca97daec26d1e6e86ef7")
        expect(res.status).toBe(400)
        expect(res.body.success).toBe(false)
    })
})



afterAll(async()=>{
    await mongoose.connection.close()
    server.close()
})