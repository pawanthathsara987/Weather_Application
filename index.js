import express  from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const API_KEY = "8f9fe522d8896b621e44b29672f83af7";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res)=> {
    res.render("index.ejs");
});

app.post("/search", async (req, res) => {
    let city = req.body.city;
    
    try{
        const locationResponse = await axios.get("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + API_KEY);
        const locationData = locationResponse.data;
        const lat = locationData[0].lat;
        const lon = locationData[0].lon;
        
        const weatherResponse = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY);
        const weatherData = weatherResponse.data;
        res.render("weatherDetails.ejs", { weatherData});
        
    }catch(error){  
        res.send(error);
        console.log(error);
    }

});

app.listen(port, ()=> {
    console.log(`Server is runnning port number: ${port}`);
});