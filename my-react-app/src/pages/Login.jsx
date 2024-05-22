import React from "react";
import ArrowComponent from "../Components/Toward";
import NavBar from "../Components/NavBar";
import nube from "../Images/nube.png";
import Footer from "../Components/Footer";

function Login() {
  return (
    <div>
      <NavBar />
      <div className="h-screen flex flex-row items-center">
        <div className="basis-1/4"></div>
        <div className="basis-2/4 bg-[#a3def6] rounded-2xl flex flex-row">
          <div className="basis-1/2 flex justify-center items-center">
            <img className="h-[50%]" src={nube} alt="Cloud" />
          </div>
          <div className="basis-1/2 px-12 py-16 flex flex-col justify-center gap-10 bg-[#5191AB] rounded-2xl">
            <div className="basis-1/4 text-white text-5xl">Iniciar Sesion</div>
            <div className="basis-1/4">
              <input
                className="text-black h-10 rounded-full px-4 w-full bg-[#d9d9d9] outline-none"
                type="text"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="basis-1/4">
              <input
                className="text-black h-10 rounded-full px-4 w-full bg-[#d9d9d9] outline-none"
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <div className="basis-1/4 flex flex-row gap-5">
              <div className="basis-4/10">
                <ArrowComponent
                  to="/"
                  text="Iniciar Sesión"
                  buttonStyle="bg-[#3a3a3a] rounded text-white p-2"
                />
              </div>
              <div className="basis-4/10">
                <ArrowComponent
                  to="/"
                  text="Crear cuenta"
                  buttonStyle="bg-[#3a3a3a] rounded text-white p-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/4"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
