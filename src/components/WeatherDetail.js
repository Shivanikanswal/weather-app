import { useEffect, useState } from "react";
const WeatherDetail = (props) => {
  const [weatherDetail, setWeatherDetail] = useState([]);
  //console.log("Hello from weatherDetail component");
  useEffect(() => {
    fetchWeatherData();
  }, []);
  const { weatherData } = props;
  const { latitude, longitude } = weatherData;
  // const longitude = weatherData.longitude;
  // const latitude = weatherData.latitude;

  const fetchWeatherData = async () => {
    const data = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=" +
        latitude +
        "&longitude=" +
        longitude +
        "&current=temperature_2m,relative_humidity_2m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&forecast_days=1"
    );

    const jsonData = await data.json();

    console.log(jsonData);
    setWeatherDetail(jsonData);
    console.log(weatherDetail);
  };

  return (
    <div>
      <h1>{latitude}</h1>
    </div>
  );
};
export default WeatherDetail;
