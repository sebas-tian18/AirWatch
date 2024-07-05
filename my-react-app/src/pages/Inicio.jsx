import React, { useEffect, useRef } from "react";
import ArrowComponent from "../Components/Toward";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import cloudInicio from "../Images/CloudInicio.jpg";
import WhiteLogo from "../Images/Blanco.png";
import Pulmon from "../Images/pulmon_verde.jpg";
import Lago from "../Images/lago_verde.jpg";
import tipo from "../Images/tipo.png";

// Si quiere quitar que inicie sin ver el navbar
// cambie la linea 25 a <NavBar position="relative"/>
// y se solucionará, me pareció bacán que se viera asi la fotito
// con las nubes y el logo jajaja

const Inicio = () => {
  const navBarRef = useRef(null);

  useEffect(() => {
    if (navBarRef.current) {
      const navBarHeight = navBarRef.current.getBoundingClientRect().height;
      window.scrollTo(0, navBarHeight);
    }
  }, []);

  return (
    <div>
      <NavBar position="relative" navBarRef={navBarRef} />
      <div className="flex flex-col justify-between min-h-screen">
        <div
          className="flex-1 bg-black bg-no-repeat bg-cover relative"
          style={{ backgroundImage: `url(${cloudInicio})` }}
        >
          <div className="flex justify-center items-center min-h-screen">
            <div className="basis-1/3"></div>
            <div className="text-white text-2xl basis-1/3 backdrop-blur-[1px] bg-black/20 flex justify-center items-center">
              <img className="h-[50%]" src={WhiteLogo} alt="Cloud" />
            </div>
            <div className="basis-1/3"></div>
          </div>
        </div>
        <div className="flex flex-row justify-around items-center mt-20 mb-20">
          <div
            className="rounded-full flex items-center justify-center bg-cover h-60 w-60 m-1"
            style={{
              backgroundImage: `url(${cloudInicio})`,
              font: "170px",
            }}
          >
            LOREM IPSUM
          </div>
          <div
            className="rounded-full flex items-center justify-center bg-cover h-60 w-60 m-1"
            style={{
              backgroundImage: `url(${cloudInicio})`,
              font: "170px",
            }}
          >
            LOREM IPSUM
          </div>
          <div
            className="rounded-full flex items-center justify-center bg-cover h-60 w-60 m-1"
            style={{
              backgroundImage: `url(${cloudInicio})`,
              font: "170px",
            }}
          >
            LOREM IPSUM
          </div>
          <div
            className="rounded-full flex items-center justify-center bg-cover h-60 w-60 m-1"
            style={{
              backgroundImage: `url(${cloudInicio})`,
              font: "170px",
            }}
          >
            LOREM IPSUM
          </div>
        </div>
        <div
          className="flex flex-row justify-around items-center mt-20 mb-20 bg-cover h-96"
          style={{
            backgroundImage: `url(${Pulmon})`,
            font: "170px",
          }}
        >
          <div className="basis-1/2"></div>
          <div className="bg-[#5191AB] basis-2/5 relative h-128 rounded-3xl mr-10 break-all text-ellipsis overflow-auto">
            <div className="text-white basis-1/3 flex flex-col gap-1 break-all mt-10">
              <div className="basis-1/3">
                <h2 className="font-bold text-4xl text-center">
                  ¿POR QUÉ ELEGIRNOS?
                </h2>
              </div>
              <div className="basis-1/3">
                <p className="mr-10 ml-10 mt-10 text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="basis-1/3">
                <ArrowComponent
                  to="/"
                  text="Más información..."
                  buttonStyle="bg-[#A2DEF6] rounded text-white p-2 ml-10 mt-20"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-row justify-around items-center mt-20 mb-20 bg-cover h-96"
          style={{
            backgroundImage: `url(${Lago})`,
            font: "170px",
          }}
        >
          <div className="bg-[#5191AB] basis-2/5 relative h-128 rounded-3xl ml-10 break-all text-ellipsis overflow-auto">
            <div className="text-white basis-1/3 flex flex-col gap-1 break-all mt-10">
              <div className="basis-1/3">
                <h2 className="font-bold text-4xl text-center">
                  ¿Quienes somos?
                </h2>
              </div>
              <div className="basis-1/3">
                <p className="mr-10 ml-10 mt-10 text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="basis-1/3">
                <ArrowComponent
                  to="/"
                  text="Más información..."
                  buttonStyle="bg-[#A2DEF6] rounded text-white p-2 ml-10 mt-20"
                />
              </div>
            </div>
          </div>
          <div className="basis-1/2"></div>
        </div>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col items-center space-y-20">
            <div className="flex flex-row space-x-36">
              <img src={tipo} alt="" className="w-60 h-60" />
              <img src={tipo} alt="" className="w-60 h-60" />
              <img src={tipo} alt="" className="w-60 h-60" />
            </div>
            <div className="flex flex-row space-x-36 justify-center mt-5">
              <img src={tipo} alt="" className="w-60 h-60" />
              <img src={tipo} alt="" className="w-60 h-60" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
