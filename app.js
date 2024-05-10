const http=require("http")

const express=require('express')
const loginRouter=require('./login')
const sendRouter=require('./send')
const app=express()

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

app.use(loginRouter)
app.use(sendRouter)
app.listen(3000)