
const express=require('express')
const fs=require('fs')
const router=express.Router()

router.get('/send',(req,res,next)=>{
    fs.readFile('message.txt',(error,data)=>{
        if(error)
         console.log(error)
        if(data==null)
        data='no chat exists'
        res.send(`${data} <form action="/message" method="POST"><input type="text" name="message"/><button>Send</button></form>`)
    })
    

})

router.post('/message',(req,res)=>{
    
    console.log(req.body)
   
    fs.writeFileSync('message.txt',JSON.stringify(req.body),{flag:'a'})
    res.redirect('/send')
}) 

module.exports=router