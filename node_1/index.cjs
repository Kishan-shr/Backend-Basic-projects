// common js module
const express = require('express')
// module js Es6
require('dotenv').config()
// import express from 'express'
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('prince')
})

app.get('/twitter' ,(req,res)=>{
    res.send("Hlw from Twitter")
})

app.get('/login',(req,res)=>{
    res.send("login page")
})
app.get('/Home',(req,res)=>{
    res.send("<h1>Home page</h1>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log("backend")