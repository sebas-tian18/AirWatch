import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import { database } from '../firebase';  // importar la base de datos de Firebase
import { ref, onValue } from "firebase/database";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
//import ArrowComponent from "../Components/Toward";

// Definimos el componente Graph
function Graph() {
  const chartContainerRef1 = useRef();
  const chartContainerRef2 = useRef();
  const lineSeries1Ref = useRef();
  const lineSeries2Ref = useRef();
  const chart1Ref = useRef();
  const chart2Ref = useRef();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataLimit = 50;

  useEffect(() => {
    const createChartInstance = (containerRef) => {
      const chart = createChart(containerRef.current, {
        layout: {
          backgroundColor: '#ffffff', 
          textColor: '#000000',
        },
        grid: {
          vertLines: {
            color: '#e1ecf2',
          },
          horzLines: {
            color: '#e1ecf2',
          },
        },
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
        rightPriceScale: {
          scaleMargins: {
            top: 0.1,
            bottom: 0.1,
          },
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: true,
          tickMarkFormatter: (time) => {
            const date = new Date(time * 1000); // Convertir de segundos a milisegundos
            return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
          },
        },
      });

      const lineSeries = chart.addLineSeries({
        lineWidth: 2,
      });
      return { chart, lineSeries };
    };

    const { chart: chart1, lineSeries: lineSeries1 } = createChartInstance(chartContainerRef1);
    const { chart: chart2, lineSeries: lineSeries2 } = createChartInstance(chartContainerRef2);

    lineSeries1Ref.current = lineSeries1;
    lineSeries2Ref.current = lineSeries2;
    chart1Ref.current = chart1;
    chart2Ref.current = chart2;

    window.addEventListener('resize', () => {
      chart1.resize(chartContainerRef1.current.clientWidth, chartContainerRef1.current.clientHeight);
      chart2.resize(chartContainerRef2.current.clientWidth, chartContainerRef2.current.clientHeight);
    });

    return () => {
      chart1.remove();
      chart2.remove();
      window.removeEventListener('resize', () => {
        chart1.resize(chartContainerRef1.current.clientWidth, chartContainerRef1.current.clientHeight);
        chart2.resize(chartContainerRef2.current.clientWidth, chartContainerRef2.current.clientHeight);
      });
    };
  }, []);

  useEffect(() => {
    if (lineSeries1Ref.current && lineSeries2Ref.current) {
      const intervalId = setInterval(() => {
        const newTime = Math.floor(Date.now() / 1000); // Obtener el tiempo actual en segundos
        setData1((prevData1) => {                                                                               //cambiar newData1 al valor de pm10
          const newData1 = [...prevData1, { time: newTime, value: Math.random() * 100 }];
          if (newData1.length > dataLimit) newData1.shift();
          lineSeries1Ref.current.setData(newData1); 
          return newData1;
        });

        setData2((prevData2) => {                                                                                //cambiar newData2 al valor de pm2.5
          const newData2 = [...prevData2, { time: newTime, value: Math.random() * 100 }];
          if (newData2.length > dataLimit) newData2.shift();
          lineSeries2Ref.current.setData(newData2);
          return newData2;
        });

        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [currentIndex]);

  return (
    <div className="h-screen">
      <div className="h-screen flex flex-col">
        <NavBar position="relative" />
        <div className="flex flex-row justify-center w-full">
          <div className="basis-1/4"></div>
          <div className="basis-2/4 flex flex-col items-center">
            <h2 className="mb-4 mt-4">
              <strong>PM10</strong>
            </h2>
            <div
              ref={chartContainerRef1}
              style={{ width: "50%", height: "200px", position: "relative" }}
              className="mb-10"
            />
          </div>
          <div className="basis-1/4"></div>
        </div>
        <div className="flex flex-row justify-center w-full mt-4">
          <div className="basis-1/4"></div>
          <div className="basis-2/4 flex flex-col items-center">
            <h2 className="mb-4">
              <strong>PM2.5</strong>
            </h2>
            <div
              ref={chartContainerRef2}
              style={{ width: "50%", height: "200px", position: "relative" }}
              className="mb-10"
            />
          </div>
          <div className="basis-1/4"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Graph;
