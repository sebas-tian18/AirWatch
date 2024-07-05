import React from "react";
import logo from "../Images/Blanco.png";
import ArrowComponent from "../Components/Toward";

function NavBar({ position = "absolute", navBarRef }) {
  return (
    <nav
      ref={navBarRef}
      className={`bg-primary p-7 ${position} top-0 inset-x-0`}
    >
      <div className="grid grid-cols-2 gap-5">
        <button className="flex justify-center flex-wrap">
          <ArrowComponent
            to="/"
            text={<img className="h-20" src={logo} alt="Logo" />}
            buttonStyle="text-white text-l"
          />
        </button>
        <div className="grid grid-cols-6 items-center justify-center w-full space-x-[15%] flex-wrap ">
          <div>
            <ArrowComponent
              to="/Login"
              text="Login"
              buttonStyle="text-white text-l active:text-blue-500"
            />
          </div>
          <div>
            <ArrowComponent
              to="/Register"
              text="Register"
              buttonStyle="text-white text-l active:text-blue-500"
            />
          </div>
          <div>
            <ArrowComponent
              to="/"
              text="Inicio"
              buttonStyle="text-white text-l active:text-blue-500"
            />
          </div>
          <div>
            <ArrowComponent
              to="/Graph"
              text="Graph"
              buttonStyle="text-white text-l active:text-blue-500"
            />
          </div>
          <div>
            <ArrowComponent
              to="/Values"
              text="Values"
              buttonStyle="text-white text-l active:text-blue-500"
            />
          </div>
          <div>
            <ArrowComponent
              to="/"
              text="Cerrar Sesión"
              buttonStyle="text-white text-l active:text-blue-500"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
