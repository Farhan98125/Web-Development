const express=require('express');
const app=express();
const port=3000;

// when we send the data without these express middlewares, we can't access the body data
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/get',(req,res)=>{
    // this will print on console
    console.log(req.query);
    const name=req.query.name;
    const password=req.query.password;
    res.send(`Hello ${name},  your password is ${password} is a GET request`);
});

app.post('/post',(req,res)=>{
    console.log(req.body);
    const name=req.body.name;
    const password =req.body.password;
    res.send(`Hello ${name},  your password is ${password} is a POST request`);

});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
