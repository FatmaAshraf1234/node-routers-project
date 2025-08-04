//استدعاء المكتبات 
const express = require('express');
const morgan = require('morgan');
const app = express();
const router=require("express").Router();
const port=3000;
// app.use(express.json());
app.use(morgan('dev'));

//(application level)ميدل وير عام شغال علي كل الطلبات 
app.use((req,res,next)=>{
    console.log("ميدل وير عام:تم استقبال طلب");
    next();
});

//ميدل وير خاص بالراوتر دا بس
router.use((req,res,next)=>{
    console.log("ميدل وير خاص بالراوتر");
    next();
});

//مسار داخل الراوتر
router.get("/hello",(req,res)=>{
    console.log("الراوتر اشتغل");
    res.send("hello fatoma in api");
});

//ربط الراوتر بالمشروع
app.use('/api', router);
//(error handing middleware)ميدل وير الاخطاء
app.use((err,req,res,next)=>{
    console.error("error error",err.message);
    res.status(500).send("حصل خطا في السيرفر")
});
//البورت 
app.listen(3000);