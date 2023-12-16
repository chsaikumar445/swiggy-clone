import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../../logo-img.png";
import { useState } from "react";
//functional component
export const Title = () => {
  return (
    <a href="/">
      <img className="logo h-16 w-16 m-6" alt="Food" src={logo} />
    </a>
  );
};

// functional component
//component composition
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [loginToggle, setloginToggle] = useState(false);

  const changeToggle = () => {
    setloginToggle(!loginToggle);
  };

  return (
    <div className="header max-w-6xl h-auto mx-auto mr-auto flex justify-between items-center border-2 border-[#333] ">
      <Title />
      <div className="nav-items flex justify-between items-center">
        <ul className="flex justify-between content-center">
          <li className="pr-4">Online Status:{onlineStatus ? "✅" : " 🔴"}</li>
          <li className="pr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-4">
            <Link to="/about">About</Link>
          </li>
          <li className="pr-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="pr-4">
            <Link to="cart">Cart</Link>
          </li>
        </ul>
        <div className="mr-4">
          <button
            className="bg-[#7d94be] px-4 py-2 pr-4 pb-2 border-1 rounded-md"
            onClick={changeToggle}>
            {loginToggle === false ? "Login" : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
