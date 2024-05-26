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
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&exclude={minutely}&appid=bd1323b2ca2752073120f0c501fe8b72&units=metric"
    );

    const jsonData = await data.json();
    setWeatherDetail(jsonData);
    console.log(weatherDetail);
  };

  const temp = weatherDetail?.main?.temp;
  const feels_like = weatherDetail?.main?.feels_like;
  const weatherDescription = weatherDetail?.weather?.[0]?.description;
  const iconCode = weatherDetail?.weather?.[0]?.icon;
  // const { temp, feels_like } = weatherDetail?.main;
  var oldTime = weatherDetail?.dt;
  const event = new Date(oldTime * 1000);
  const newDate = event.toDateString();
  const newTime = event.toLocaleTimeString("en-US");

  return (
    <div>
      <div className="flex m-5">
        <div className="current w-[30%] h-64 rounded-2xl mr-6 bg-[#05459c80] text-white backdrop-blur-sm">
          <div className="inner-div px-3 mx-3">
            <div className="temp border-b border-white">
              <img
                src={
                  "https://openweathermap.org/img/wn/" + iconCode + "@2x.png"
                }
              ></img>
              <div className="inner-temp flex">
                <div>
                  <span className=" text-5xl">{Math.trunc(temp)}°</span>
                  <span className=" text-2xl mb-4">C</span>
                </div>
                <span>Feels like {feels_like}° C</span>
              </div>
              <div className=" flex">
                <img
                  src={
                    "https://openweathermap.org/img/wn/" + iconCode + "@2x.png"
                  }
                  className=" w-8 h-8"
                ></img>
                <span>{weatherDescription}</span>
              </div>
            </div>
            <div>
              <p className="location">
                {weatherDetail?.name}, {weatherDetail?.sys?.country}
              </p>
              <p className="datentime">
                {newTime}, {newDate}
              </p>
            </div>
          </div>
        </div>
        <div className="others w-[70%] h-64 rounded-2xl ml-6 bg-[#05459c80] text-white backdrop-blur-sm"></div>
      </div>
    </div>
  );
};
export default WeatherDetail;
