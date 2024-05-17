import React from "react";
import ArrowComponent from "../Components/Toward";
import NavBar from "../Components/NavBar";
import nube from "../Images/nube.png";

function Register() {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="grid grid-cols-2  flex flex-col items-center justify-center h-full ">
        <div className="h-[50%] ml-[50%] bg-secondary flex flex-col justify-center  item-center text-center">
          <div className="m-auto" id="nube">
            <img src={nube} alt="Cloud-Icon" />
          </div>
        </div>

        <div className="flex flex-wrap text-white h-[50%] mr-[40%]  text-center bg-third  ">
          <h2 className=" space-x-6 rtl:space-x-reverse mt-5 font-bold text-2xl  w-full ">
            Registrarse
          </h2>
          <div className="pr-[10%] pl-[10%]">
            <input
              className=" text-black h-10  mt-5 rounded-full  px-4 w-full bg-gray-50  "
              type="text"
            />
            <input
              className=" text-black h-10  mt-5 rounded-full  px-4 w-full bg-gray-50  "
              type="text"
            />
            <input
              className=" text-black h-10  mt-5 rounded-full  px-4 w-full bg-gray-50  "
              type="text"
            />
            <input
              className="text-black h-10  mt-5 rounded-full px-4 w-full bg-gray-50  "
              type="text"
            />
            <div className="">
            <div className="mt-5 flex space-x-4 flex-wrap">
              <ArrowComponent
                to="/"
                text="Registrarse"
                buttonStyle="mt-0.5 bg-neutral-700 text-white font-bold py-2 px-2 w-w"
              />
              <ArrowComponent
                to="/"
                text="Iniciar sesión"
                buttonStyle="mt-0.5 bg-neutral-700 text-white font-bold py-2 px-2"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
