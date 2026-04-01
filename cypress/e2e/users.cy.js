
describe("get all user",()=>{
    it("should it return users in array", ()=>{
        cy.request({
            method:"GET",
            url:"http://localhost:3000/get_users"
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.success).to.eq(true)
        })
    })
})
