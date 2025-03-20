const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/home", (req, res) => {
    console.log("Rendering index.ejs");
    res.render("index.ejs");
});

app.get("/home/chat", (req, res)=>{
    res.render("chat.ejs");
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})