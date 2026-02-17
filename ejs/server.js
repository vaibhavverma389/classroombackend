
const express=require("express");
const path=require("path");
const { title } = require("process");
const port=8080;
const app=express();


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"ui"))
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("home",
        {
            title: "home",
            name: "Vaibhav Verma"
        }
    );
})

app.get("/about",(req,res)=>{
    res.render("about",{
        title: "About_Page",
        name: "Vaibhav Verma"    
    })
})

app.get("/contact",(req,res)=>{
    res.render("about",{
        title: "contact_Page"
    })
})

app.get("/form",(req,res)=> {
    res.render("form",{
        title :"User Infomation"
    })
})
app.get("/submit",(req,res)=>{
    const {username,email}=req.body;
    res.render("submit",{
        name:username,
        email:email
    })
})


app.listen(port,()=>{
    console.log(`server is running at Port no${port}`);
    
})

