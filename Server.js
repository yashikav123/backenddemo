const express=require('express');//require is used to import
const app=express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    //console.log("Hi");
    //res.status(500).send("Hello");
   // res.json({express:"learning express"});
    res.render("index.ejs",{texts:"good morning"});
});

const userRoute=require('./routes/user');
app.use('/user',userRoute);//to invoke app is used because the app have express functionality

app.listen(3000);