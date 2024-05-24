import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WeatherDetail = (props) => {
  const [weatherDetail, setWeatherDetail] = useState([]);

  const { latitude, longitude, name } = useParams();

  useEffect(() => {
    if (name) fetchWeatherData();
  }, []);

  var oldTime = weatherDetail?.dt;

  const event = new Date(oldTime * 1000);
  const newDate = event.toDateString();
  const newTime = event.toLocaleTimeString("en-US");

  console.log(event.toDateString());

  const fetchWeatherData = async () => {
    const data = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&exclude={minutely}&appid=bd1323b2ca2752073120f0c501fe8b72&units=metric"
      // "https://api.open-meteo.com/v1/forecast?latitude=" +
      // latitude +
      // "&longitude=" +
      // longitude +
      // "&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,cloud_cover,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,rain,cloud_cover,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min"
    );
    // https://api.openweathermap.org/data/2.5/weather?lat=30.32295&lon=78.03168&appid=bd1323b2ca2752073120f0c501fe8b72

    const jsonData = await data.json();

    console.log(jsonData);
    setWeatherDetail(jsonData);
    console.log(weatherDetail);
  };

  return (
    <div>
      <div className="flex m-5">
        <div className="current w-[30%] h-64 rounded-2xl mr-6 bg-[#05459c80] text-white backdrop-blur-sm">
          <div>
            <div className="temp">
              <img src=""></img>
              <div>{weatherDetail?.main?.temp}</div>
            </div>
            <div>
              <p className="location">{name}</p>
              <p className="datentime">
                {newTime}, {newDate}
              </p>
            </div>
          </div>
        </div>
        <div className="others w-[70%] h-64 rounded-2xl ml-6 bg-[#05459c80] text-white backdrop-blur-sm"></div>
      </div>
      {/* <h1>{name}</h1> */}
      {/* <h1>Time {weatherDetail?.current?.time}</h1> */}
      {/* <h1>Temperature {weatherDetail?.current?.temperature_2m}</h1> */}
    </div>
  );
};
export default WeatherDetail;
