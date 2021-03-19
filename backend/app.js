const express=require('express');
const app = express();
const fs=require('fs');
const path = require('path');
const public=path.join(__dirname,'../public');
const templates=path.join(__dirname,'views/templates');
const hbs=require('hbs');
const request=require('request');
const { json } = require('express');
const port=process.env.PORT || 8000;
app.use(express.static(public));
// setting templates engine  and registered templates
app.set('view engine','hbs');
hbs.registerPartials(templates);
// routing
// app.get('/',(req, res) =>{
    //     res.send()
    // })
app.get('/about',(req, res) =>{
    fs.readFile('../public/about.html','utf-8',(err,data)=>{
        if (err) {
                console.log(err);
        }
        else{
            res.send(data);
        }
     })
        
})
app.get('*/weather',(req, res) =>{
    res.render('weather')
})
app.get('*',(req, res) =>{
    res.send('oops page not found')
})
app.listen(port);