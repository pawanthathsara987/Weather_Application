import express  from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res)=> {
    const hour = new Date().getHours();
    const isMorning = hour >= 6 && hour < 18;
    res.render("index.ejs", { isMorning });
});

app.listen(port, ()=> {
    console.log(`Server is runnning port number: ${port}`);
});