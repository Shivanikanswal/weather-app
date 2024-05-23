const CityDetail = (props) => {
  const { cityData } = props;
  const { country, admin1, name } = cityData;
  return (
    <div className="city">
      {name},{admin1},{country}
    </div>
  );
};
export default CityDetail;
