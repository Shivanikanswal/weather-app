import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import weatherImg from "../utils/images/all-weather.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { LineChart } from "@mui/x-charts";
// import { faSun } from "@fortawesome/free-solid-svg-icons";

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
  const humidity = weatherDetail?.main?.humidity;
  const weatherDescription = weatherDetail?.weather?.[0]?.description;
  const iconCode = weatherDetail?.weather?.[0]?.icon;
  // const { temp, feels_like } = weatherDetail?.main;
  var oldTime = weatherDetail?.dt;
  const event = new Date(oldTime * 1000);
  const newDate = event.toDateString();
  const newTime = event.toLocaleTimeString("en-US");
  const windSpeed = weatherDetail?.wind?.speed;
  const visibility = weatherDetail?.visibility;

  return (
    <div>
      <div className="flex m-5 p-5">
        <div className="current w-[25%] h-auto rounded-2xl mr-6 bg-[#05459c80] text-white backdrop-blur-sm">
          <div className="inner-div px-5">
            <div className="temp border-b border-white mt-3">
              <img
                src={
                  "https://openweathermap.org/img/wn/" + iconCode + "@2x.png"
                }
              ></img>
              <div className="inner-temp flex items-center mb-3">
                <div className="temp-main flex items-center pr-4">
                  <span className=" text-6xl">{Math.trunc(temp)}°</span>
                  <span className=" text-2xl mb-2">C</span>
                </div>
                <span>(Feels like {feels_like}°)</span>
              </div>
              <div className=" flex mb-3">
                <img
                  src={
                    "https://openweathermap.org/img/wn/" + iconCode + "@2x.png"
                  }
                  className=" w-8 h-8"
                ></img>
                <span>{weatherDescription}</span>
              </div>
            </div>
            <div className="ext my-3">
              <div className=" loc flex mb-3">
                <p className=" pr-2">
                  <FontAwesomeIcon icon={faLocationPin} />
                </p>
                <p className="location">
                  {weatherDetail?.name}, {weatherDetail?.sys?.country}
                </p>
              </div>
              <div className="cal flex">
                <p className=" pr-2">
                  <FontAwesomeIcon icon={faCalendar} />
                </p>
                <p className="datentime">
                  {newTime}, {newDate}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="others w-[75%] h-auto rounded-2xl ml-6 bg-[#05459c80] text-white backdrop-blur-sm p-4">
          <p className="m-3">Today's Highlight</p>
          <div className="new-section flex">
            <div className=" m-2 w-1/3 grid grid-rows-[160px_50px]">
              <div className="wind bg-[#11407e80] rounded-md mb-4">
                <p>Wind Status</p>
                <span className="text-3xl">{windSpeed}km/h</span>
              </div>
              <div className="humidity bg-[#11407e80] rounded-md">
                <p>Humidity</p>
                <span className="text-3xl">{humidity}%</span>
              </div>
            </div>
            <div className="m-2 w-1/3 grid grid-rows-[160px_50px]">
              <div className="uvindex bg-[#11407e80] rounded-md mb-4">
                UV Index
              </div>
              <div className="visibility bg-[rgba(17,64,126,0.5)] rounded-md">
                <p>Visibility</p>
                <span className="text-3xl">{visibility}</span>
              </div>
            </div>
            <div className=" m-2 w-1/3 grid grid-rows-[160px_50px]">
              <div className="sunrise-sunset bg-[#11407e80] rounded-md mb-4 ">
                Sunrise Sunset
              </div>
              <div className="feels-like bg-[#11407e80] rounded-md">
                <p>Feels like</p>
                <span className="text-3xl">{feels_like}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherDetail;
