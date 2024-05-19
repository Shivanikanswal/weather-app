import { useState } from "react";
import WeatherDetail from "./WeatherDetail";

const CityDetail = (props) => {
  const [flag, setFlag] = useState(false);
  const { cityDetail } = props;
  //console.log(cityDetail);
  const getGeoLocation = () => {
    var longitude = cityDetail.longitude;
    var latitude = cityDetail.latitude;
  };
  return (
    <div className="city">
      {/* <h1 role="button" onClick={() => setFlag(true)}> */}
      {/* {cityDetail.name}, {cityDetail.admin1}, {cityDetail.country} */}
      {/* </h1> */}
      <button onClick={() => setFlag(true)}>
        {cityDetail.name}, {cityDetail.admin1}, {cityDetail.country}
      </button>
      {flag && <WeatherDetail weatherData={cityDetail} />}
    </div>
  );
};
export default CityDetail;
