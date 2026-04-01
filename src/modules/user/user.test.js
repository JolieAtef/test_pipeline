import request from "supertest"
import app from "../../main.js"
import {server} from "../../main.js"
import mongoose from "mongoose"


// describe("get all users",()=>{
//     it("should return array of users", async()=>{
//         const res = await request(app).get("/get_users")
//         expect(res.status).toBe(200)
//         expect(res.body.success).toBe(true)
//     })
    // it("should error array empty", async()=>{
    //     const res = await request(app).get("/get_users")
    //     expect(res.status).toBe(400)
    //     expect(res.body.success).toBe(false)
    // })
// })

describe("add user",()=>{
 it("should add user", async()=>{
    const res = await request(app).post("/add_user").send({
        name:"test",
        email:"test@gmail.com",
        password:"123123"
    })
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
 }),
 it("should return error user exist",async()=>{
    const res = await request(app).post("/add_user").send({
        name:"test",
        email:"test@gmail.com",
        password:"123123"
    })
    expect(res.status).toBe(400)
    expect(res.body.success).toBe(false)
 })
})

// describe("update user",()=>{
    // it("should update user", async()=>{
    //     const res = await request(app).put("/update_user/69c3afd2a7e0488a3a847c69").send({
    //         name:"updated_test",
    //     })
    //     expect(res.status).toBe(200)
    //     expect(res.body.success).toBe(true)
    //  }),
    // it("should return name required", async()=>{
    //     const res = await request(app).put("/update_user/69c3afd2a7e0488a3a847c69").send({
    //         email:"test@gmail.com"
    //     })
    //     expect(res.status).toBe(400)
    //     expect(res.body.success).toBe(false)
    //  }),
    // it("should return user not found", async()=>{
    //     const res = await request(app).put("/update_user/69c3afd2a7e04883a847c69").send({
    //        name:"updated_test"
    //     })
    //     expect(res.status).toBe(400)
    //     expect(res.body.success).toBe(false)
    //  })

// })


// describe("delete user",()=>{
//     it("should delete user", async()=>{
//         const res = await request(app).delete("/delete_user/69c3afd2a7e0488a3a847c69")
//         expect(res.status).toBe(200)
//         expect(res.body.success).toBe(true)
//      }),
//      it("should return user not found", async()=>{
//         const res = await request(app).delete("/delete_user/69c3afd2a7e04883a847c69")
//         expect(res.status).toBe(400)
//         expect(res.body.success).toBe(false)
//      })
// })


afterAll(async()=>{
    await mongoose.connection.close()
    server.close()
})

