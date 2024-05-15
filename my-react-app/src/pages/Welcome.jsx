import React from "react";
import ArrowComponent from "../Components/Toward";
import NavBar from "../Components/NavBar";
function Welcome() {
  return (
    <div>
        <div>
        <NavBar />
        </div>
      <div class="bg-primary flex items-center justify-center h-full">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-800 dark:text-white">
            ¡Bienvenido a AirWatch!
          </h1>
          <p class="text-gray-500 dark:text-gray-300">
          </p>
          <ArrowComponent to="/" text="Iniciar Sesión" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
