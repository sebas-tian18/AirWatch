import React, { useEffect, useState } from "react";
import { database } from '../firebase';  // Asegúrate de que esto apunte a tu archivo de configuración de Firebase
import { ref, onValue, off } from "firebase/database";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function DataDisplay() {
  const [pm10, setPm10] = useState(null);
  const [pm25, setPm25] = useState(null);

  useEffect(() => {
    const pm10Ref = ref(database, 'test/PM10');
    const pm10Listener = onValue(pm10Ref, (snapshot) => {
      const newValue = snapshot.val();
      console.log('Nuevo valor PM10:', newValue);  // Logging para diagnosticar
      setPm10(newValue);
    });

    const pm25Ref = ref(database, 'test/PM2_5');
    const pm25Listener = onValue(pm25Ref, (snapshot) => {
      const newValue = snapshot.val();
      console.log('Nuevo valor PM2.5:', newValue);  // Logging para diagnosticar
      setPm25(newValue);
    });

    return () => {
      off(pm10Ref, 'value', pm10Listener);
      off(pm25Ref, 'value', pm25Listener);
    };
  }, []);

  return (
    <div className="h-screen">
      <NavBar position="relative" />
      <div className="flex flex-row justify-center w-full">
        <div className="basis-1/4"></div>
        <div className="basis-2/4 flex flex-col items-center">
          <h2 className="mb-4 mt-4"><strong>PM10 Value: {pm10 || 'Loading...'}</strong></h2>
        </div>
        <div className="basis-1/4"></div>
      </div>
      <div className="flex flex-row justify-center w-full mt-4">
        <div className="basis-1/4"></div>
        <div className="basis-2/4 flex flex-col items-center">
          <h2 className="mb-4"><strong>PM2.5 Value: {pm25 || 'Loading...'}</strong></h2>
        </div>
        <div className="basis-1/4"></div>
      </div>
      <Footer />
    </div>
  );
}

export default DataDisplay;
