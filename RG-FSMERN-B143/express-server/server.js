const express = require('express');
const app = express();
const path = require('path');
const port = 5700;

//basic route
app.get('/',(req,res)=>{
    res.send('this is home page');
});
app.get('/about',(req,res)=>{
    res.send('this is about page');
});
app.get('/contact',(req,res)=>{
    res.send('this is contact page');
});
app.get('/service',(req,res)=>{
    res.send('this is service page');
});
app.get('/json',(req,res)=> {
    res.json({message:"done"});
})
//static file
app.use(express.static(path.join(__dirname,'public')));
//fallback route
// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public/index.html'));
// })
app.get('/user/:id',(req,res)=>{
    res.json(`user id is ${req.params.id}`);
});
//post form data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//post json
app.post('/post-json',(req,res)=>{
    console.log('received json :', req.body);
    res.json({
        message:"json data recived",
        recived:req.body
    });
});
app.route('/product')
   .get((req,res)=>{
    res.send('get all products');
   })
   .post((req,res)=>{
    res.send('create new product');
   })
   .put((req,res)=>{
    res.send('update all products');
   })
   .delete((req,res)=>{
    res.send('deleted all product');
   })
//start server
app.listen(port,()=>{
    console.log('server is running port 5700');
});
