/* eslint-disable */
import React, { useState } from "react";
import dotenv from "dotenv";
import Card from "./components/Card";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";

dotenv.config();

const Heading = ({ text }) => <h1>{text}</h1>;

const Input = (props) => (
  <div className="form-group mb-2">
    <label htmlFor="cityInput">
      City name
      <input
        id="cityInput"
        className="form-control"
        onInput={(e) => props.onInput(e.target.value)}
        name="cityName"
        placeholder="Enter a city name"
      />
    </label>
  </div>
);

function App() {
  const [temperature, setTemperature] = useState(0);
  const [date, setDate] = useState(new Date().toUTCString());
  const [city, setCity] = useState("");
  const [input, setInput] = useState("");
  const [wind, setWind] = useState(0);
  const [weatherIconId, setWeatherIconId] = useState("");

  const onInput = (value) => {
    setInput(value);
  };

  const fetchData = async (apiKey) => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=${apiKey}`;
    // dafuq use fetch bro...
    await fetch(url);
    // $.get(url, (data) => {
    //   setTemperature(data.list[0].main.temp);
    //   setDate(data.list[0].dt_txt);
    //   setCity(data.city.name);
    //   setWind(data.list[0].wind.speed);
    //   setWeatherIconId(data.list[0].weather[0].icon);
    // });
  };

  const onClick = (event) => {
    event.preventDefault();
    return fetchData(process.env.REACT_APP_API_KEY);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <Heading text="Todays temperature" />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <form onSubmit={onClick} className="form-inline">
            <Input onInput={onInput} />
            <Button text="Submit" />
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <Card
            city={city}
            temp={temperature}
            date={date}
            wind={wind}
            weatherIconId={weatherIconId}
          />
        </div>
        <div className="row justify-content-center">
          <div className="col d-flex justify-content-center">
            <Button text="More information" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
