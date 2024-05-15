import React from "react";
import logo from "../Images/Blanco.png";
import ArrowComponent from "../Components/Toward";

function NavBar() {
  return (
      <nav className="bg-primary p-7 fixed top-0 w-screen">
        <div className="grid grid-cols-2">
          <button className="flex justify-center">
            <img className="h-20" src={logo} alt="Logo" />
          </button>
          <div className="flex flex-row items-center justify-center w-full space-x-[15%] ">
            <div>
              <ArrowComponent to="/" text="Enlace 1" buttonStyle="text-white active:text-blue-500" />
            </div>
            <div>
              <ArrowComponent to="/" text="Enlace 2" buttonStyle="text-white active:text-blue-500" />
            </div>
            <div>
              <ArrowComponent to="/" text="Enlace 3" buttonStyle="text-white active:text-blue-500" />
            </div>
            <div>
              <ArrowComponent to="/" text="Enlace 4" buttonStyle="text-white active:text-blue-500" />
            </div>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;
