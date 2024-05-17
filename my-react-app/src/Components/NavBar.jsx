import React from "react";
import logo from "../Images/Blanco.png";
import ArrowComponent from "../Components/Toward";

function NavBar() {
  return (
    <nav className="bg-primary p-7 absolute top-0 inset-x-0">
      <div className="grid grid-cols-2 gap-5">
        <button className="flex justify-center flex-wrap">
          <img className="h-20" src={logo} alt="Logo" />
        </button>
        <div className="flex flex-row items-center justify-center w-full space-x-[15%] flex-wrap ">
          <div>
            <ArrowComponent
              to="/Login"
              text="Login"
              buttonStyle="text-white text-l active:text-blue-500"
            />
          </div>
          <div>
            <ArrowComponent
              to="/"
              text="Register"
              buttonStyle="text-white text-l active:text-blue-500"
            />
          </div>
          <div>
            <ArrowComponent
              to="/"
              text="Enlace3"
              buttonStyle="text-white text-l active:text-blue-500"
            />
          </div>
          <div>
            <ArrowComponent
              to="/"
              text="Enlace4"
              buttonStyle="text-white text-l active:text-blue-500"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
