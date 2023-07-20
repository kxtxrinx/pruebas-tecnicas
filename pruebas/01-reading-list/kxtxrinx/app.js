const express = require("express")
const app = express()

const path = require("path")

app.get("/", (req, res)=>{
    //res.send("hey yo!")
    res.sendFile(path.join(__dirname, "./index.html"))
})

app.listen(3000, ()=>{
    console.log("running server on port", 3000)
})