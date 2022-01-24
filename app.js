const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.render('index');
});

app.get('/page1', function(req, res){
    res.render("page1");
})

app.get('/a', function(req, res){
    res.render('page2');
});

app.get('/b', function(req, res){
    res.render('page2')
});

app.get("*",function(req,res){
    res.render('error')
})
app.listen(port, function(){
    console.log("De open hoise de......");
});