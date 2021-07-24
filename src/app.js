const express  = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT||8000;

const staticpath = path.join(__dirname,"../public");
const partialspath = path.join(__dirname,"../templates/partials");
const templatepath = path.join(__dirname,"../templates/views");


hbs.registerPartials(partialspath);
app.set("view engine","hbs");
app.set("views",templatepath);

app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("errorpage");
})

// these will be active if above get() dont work
app.get("/",(req,res)=>{
    res.send("welcmoe to thapa ");
})

app.get("/about",(req,res)=>{
    res.send("welcmoe to thapa about ");
})

app.get("/weather",(req,res)=>{
    res.send("welcmoe to thapa weather ");
})

app.get("*",(req,res)=>{
    res.send("404 error page oops!");
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})