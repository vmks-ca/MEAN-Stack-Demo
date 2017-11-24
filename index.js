const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise=global.Promise;
mongoose.connect(config.uri,(err)=>{
    if(err){
        console.log('Error on db connection!');
    }else{
        console.log('Db connect successfully on '+config.db);
        //console.log('Db connect successfully on '+config.secret);
    }
})
app.use(express.static(__dirname + '/client/dist'));

app.get('*',(req, res)=>{
    res.sendfile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(4000, ()=>{
    console.log('Server Running on port:4000');
});