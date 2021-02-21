const express = require('express');
const path = require('path');
const { Script } = require('vm');
const app = express();

app.get('/',
    function(req,res){
        res.send('<h1>This page</h1><a href="file1.html">Go to file1 (Static page)</a>');
});

app.use(express.static(path.join(__dirname,'static_folder')));


const PORT = process.env.PORT || 8000;

app.listen(PORT,
    function(req,res){
        console.log('Server started on port: '+PORT);
    }
);