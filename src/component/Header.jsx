import React, { useContext } from "react";
import Logo from "../images/netflix-3.svg";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { getUser } from "../Auth/userAuth";

const Header = () => {
  const { isAuth, userSignOut } = useContext(Context);

  const currentUser = getUser();

  const showLogout = () => {
    document.getElementById("logout").classList.toggle("hidden");
  };

  return (
    <div className="flex justify-between absolute z-[999] w-full top-5 px-3 sm:px-10">
      <Link to={"/"}>
        <div className="logo w-24 sm:w-40">
          <img src={Logo} alt="Netflix" />
        </div>
      </Link>

      {isAuth ? (
        <div className="relative">
          <button
            onClick={showLogout}
            className="bg-gray-400 w-10 h-10 rounded-full text-2xl capitalize"
          >
            {currentUser?.displayName[0]}
          </button>
          <ul
            id="logout"
            className="absolute w-20 left-[-50px] top-12 duration-700 hidden"
          >
            <Link to={'profile'}>
              <li className="bg-blue-500 py-2 rounded-md mt-2 text-white text-sm w-20 text-center">
                Profile
              </li>
            </Link>

            <li>
              <button
                onClick={userSignOut}
                className="bg-red-600 p-2 rounded-md mt-2 text-white text-sm w-20"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <div>
              <button className="bg-red-500 px-4 py-1 text-white  rounded-sm duration-500 hover:bg-transparent hover:border-2 border-red-500 hover:text-red-700">
                Sign In
              </button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
