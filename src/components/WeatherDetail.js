import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WeatherDetail = (props) => {
  const [weatherDetail, setWeatherDetail] = useState([]);

  const { latitude, longitude, name } = useParams();

  useEffect(() => {
    if (name) fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    const data = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=" +
        latitude +
        "&longitude=" +
        longitude +
        "&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,cloud_cover,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,rain,cloud_cover,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min"
    );

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
            <img src=""></img>
            <div>{weatherDetail?.current?.temperature_2m}</div>
            <label>Clear Sky</label>
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
