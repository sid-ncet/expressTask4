
const express=require('express')
const router=express.Router()
router.get('/',(req,res,next)=>{
    console.log('this is express js')
    res.send('<h1>welcome to the home page page</h1>');
});
module.exports=router