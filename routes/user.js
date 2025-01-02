const express =require('express');
let router=express.Router();

router.get("/",(req,res)=>{
    res.send("user information");
})
router.get("/profile",(req,res)=>{
    res.send("this is a profile page");
})
router.get('/delete',(req,res)=>{
    res.send("this is a delete page");
})
router.get("/:id",(req,res)=>{
    res.send("user id is "+req.params.id);
})
router 
  .route('/:id')
  .get((req, res) => {
    res.send('retruve user id is ' + req.params.id);
  })
  .put((req, res) => {
    res.send('update user id is ' + req.params.id);
  })
  .delete((req, res) => {
    res.send('delete user id is ' + req.params.id);
  });
  const users=[{name:"rani"},{name:"rani"},{name:"rani"}];

  router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery=users[id];//need to mention while using next
    next();
  })



module.exports=router;
