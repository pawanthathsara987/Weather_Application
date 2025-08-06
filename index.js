import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { kelvinToCelsius, formatTimestamp, mpsToKmph } from "./public/js/weatherCalculations.js";

const app = express();
const port = 3000;
const API_KEY = "8f9fe522d8896b621e44b29672f83af7";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/search", async (req, res) => {
    let city = req.body.city?.trim();

    if (!city) {
        return res.render("index.ejs", {
            error: "Please enter a city name."
        });
    }

    try {
        const locationResponse = await axios.get("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + API_KEY);

        if (!locationResponse.data.length) {
            return res.render("index.ejs", {
                error: "City not found. Please try again."
            });
        }

        const locationData = locationResponse.data;
        const lat = locationData[0].lat;
        const lon = locationData[0].lon;


        const weatherResponse = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY);
        const rawData = weatherResponse.data;
        const weatherData = {
            description: rawData.weather[0].description,
            temperature: kelvinToCelsius(rawData.main.temp),
            humidity: rawData.main.humidity,
            windSpeed: mpsToKmph(rawData.wind.speed),
            sunrise: formatTimestamp(rawData.sys.sunrise),
            sunset: formatTimestamp(rawData.sys.sunset),
            icon: rawData.weather[0].icon,
            city: city,
            low: kelvinToCelsius(rawData.main.temp_min),
            high: kelvinToCelsius(rawData.main.temp_max)
        };

        res.render("weatherDetails.ejs", { weatherData });
        console.log(weatherData);

    } catch (error) {
        console.error(error.message);
        res.render("index.ejs", {
            error: "Something went wrong. Please try again later."
        });
    }

});

app.listen(port, () => {
    console.log(`Server is runnning port number: ${port}`);
});