const express = require("express");
const app =express();

app.get("/" , (req,res)=>{
    res.send("backend is running");
});

const Port = 5000;
app.listen(Port, ()=>{
    console.log(`server is running on port ${Port}`)
})