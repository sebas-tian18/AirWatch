import React from "react";
import logo from "../Images/Blackfavicon.png";
function NavBar() {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-primary">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <button class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-8" alt="logo AirWach" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              AirWatch
            </span>
          </button>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            
            <a
              href="#"
              class="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              <button class="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded active:border-blue-500 active:pb-1" >
                Enlace 1
              </button>
            </a>
            <a
              href="#"
              class="text-sm  text-blue-600 dark:text-blue-500 hover:underline "
            >
              <button class="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded active:border-blue-500 active:pb-1" >
                Enlace 2
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
