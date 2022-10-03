const express=require('express')
const router=express.Router()
router.get('/add-product',(req,res,next)=>{
    console.log('this is product')
    res.send('<form action="/product" method="POST">Name<input type="text" name="title">size<input type="text" name="size of product"><button type="btn">submit</button>');
});
router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})


module.exports=router