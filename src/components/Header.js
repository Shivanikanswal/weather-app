import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="flex justify-between h-16 p-6 backdrop-blur-sm bg-[#05459c80]">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faSun} className=" h-11 w-10 text-[#ee7b0d]" />
        <p className=" ml-2 font-semibold text-xl text-white">Weatherly</p>
      </div>
      <div>
        <button>Login/Sign-Up</button>
      </div>
    </div>
  );
  // bg-[#94b7e780]
};
export default Header;
