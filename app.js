const express = require("express")
const {restart} = require("nodemon")
const app = express()

app.get("/",(res,req)=>{
    req.send({Message:"This works"})

})


app.listen(3000,()=>{
    console.log("running now")
})