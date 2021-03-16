const express=require('express');
const app = express();
const fs=require('fs');
const path = require('path');
const public=path.join(__dirname, '../public');
app.use(express.static(public));
const about=fs.readFile('../public/about.html','utf-8',(err,data)=>{
    if (err) {
        console.log(err);
    }
})

// routing
app.get('/',(req, res) =>{
    res.send()
})
app.get('/about',(req, res) =>{
    res.send(about)
})
app.get('/weather',(req, res) =>{
    res.send('this is weather page');
})
app.get('*',(req, res) =>{
    res.send('oops page not found')
})
app.listen(8000);