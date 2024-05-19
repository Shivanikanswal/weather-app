import logo from "../utils/images/logo.png";
const Header = () => {
  return (
    <div className="flex justify-between h-16 p-6 backdrop-blur-sm bg-[#3b79d080]">
      <div className="flex items-center">
        <img src={logo} className=" w-20 h-20"></img>
        <p>UrWeather</p>
      </div>
      <div>Menu</div>
    </div>
  );
};
export default Header;
