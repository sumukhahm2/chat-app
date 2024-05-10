const express=require('express')
const fs=require('fs')
const router=express.Router()

router.get('/',(req,res,next)=>{
    res.send(`<form action="/login" method="POST" onSubmit="localStorage.setItem('username',document.getElementById('username').value)"><input id="username" type="text" name="username" value=""/><button type="submit">Login</button></form>`)

})

router.post('/login',(req,res)=>{
    
    console.log(req.body)
    console.log()
   res.redirect('/send')
    
}) 

module.exports=router