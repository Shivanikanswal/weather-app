import { useEffect, useState } from "react";
import CityDetail from "./CityDetail";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [cityName, setCityName] = useState("");
  useEffect(() => {
    if (cityName) {
      fetchWeatherDetails();
    } else {
      setWeatherData([]);
    }
  }, [cityName]);

  const fetchWeatherDetails = async () => {
    const data = await fetch(
      "https://geocoding-api.open-meteo.com/v1/search?name=" +
        cityName +
        "&count=10&language=en&format=json"
    );

    const jsonData = await data.json();
    setWeatherData(jsonData.results);
  };

  return (
    <div>
      <div className="search-box h-12 border border-cyan-700 max-w-screen-sm rounded-xl m-auto mt-44 bg-white">
        <FontAwesomeIcon
          icon={faSearch}
          className=" h-6 w-6 mr-2 p-3 text-[#9b9da3] ml-1"
        />
        <input
          type="text"
          className="input-text absolute p-[11px] focus-visible:outline-none w-4/12"
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
          }}
          placeholder="Search your Address, City or Zipcode..."
        ></input>
      </div>
      <div className="cities sticky left-[29.5%] top-[39%] bg-slate-50 w-[41%]">
        {weatherData?.map((cityDetail) => {
          {
            return (
              <Link
                to={
                  "/city/" +
                  cityDetail.name +
                  "/lat/" +
                  cityDetail.latitude +
                  "/long/" +
                  cityDetail.longitude
                }
                key={cityDetail.id}
              >
                {<CityDetail cityData={cityDetail} key={cityDetail.id} />}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
