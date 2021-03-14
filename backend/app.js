const express=require('express');
const app = express();
const path = require('path');
const public=path.join(__dirname, '../public');
app.use(express.static(public))

// routing
app.get('/',(req, res) =>{
    res.send()
})
app.get('/about',(req, res) =>{
    res.send('this is about page');
})
app.get('/weather',(req, res) =>{
    res.send('this is weather page');
})
app.get('*',(req, res) =>{
    res.send('oops page not found')
})
app.listen(8000);