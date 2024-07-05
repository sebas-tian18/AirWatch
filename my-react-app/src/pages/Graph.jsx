import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import { database } from "../firebase"; // importar la base de datos de Firebase
import { ref, onValue, off } from "firebase/database";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Graph() {
  const chartContainerRef1 = useRef();
  const chartContainerRef2 = useRef();
  const lineSeries1Ref = useRef();
  const lineSeries2Ref = useRef();
  const chart1Ref = useRef();
  const chart2Ref = useRef();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const dataLimit = 50;

  useEffect(() => {
    const createChartInstance = (containerRef) => {
      const chart = createChart(containerRef.current, {
        layout: {
          backgroundColor: "#ffffff",
          textColor: "#000000",
        },
        grid: {
          vertLines: {
            color: "#e1ecf2",
          },
          horzLines: {
            color: "#e1ecf2",
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

    const { chart: chart1, lineSeries: lineSeries1 } =
      createChartInstance(chartContainerRef1);
    const { chart: chart2, lineSeries: lineSeries2 } =
      createChartInstance(chartContainerRef2);

    lineSeries1Ref.current = lineSeries1;
    lineSeries2Ref.current = lineSeries2;
    chart1Ref.current = chart1;
    chart2Ref.current = chart2;

    window.addEventListener("resize", () => {
      chart1.resize(
        chartContainerRef1.current.clientWidth,
        chartContainerRef1.current.clientHeight
      );
      chart2.resize(
        chartContainerRef2.current.clientWidth,
        chartContainerRef2.current.clientHeight
      );
    });

    return () => {
      chart1.remove();
      chart2.remove();
      window.removeEventListener("resize", () => {
        chart1.resize(
          chartContainerRef1.current.clientWidth,
          chartContainerRef1.current.clientHeight
        );
        chart2.resize(
          chartContainerRef2.current.clientWidth,
          chartContainerRef2.current.clientHeight
        );
      });
    };
  }, []);

  useEffect(() => {
    const pm10Ref = ref(database, "test/PM10");
    const pm25Ref = ref(database, "test/PM2_5");

    const updateChartData = (pm10Value, pm25Value) => {
      const newTime = Math.floor(Date.now() / 1000); // Obtener el tiempo actual en segundos

      setData1((prevData1) => {
        // Solo agregar nuevos datos si hay un valor y el tiempo es mayor al último valor
        if (
          pm10Value !== null &&
          (prevData1.length === 0 ||
            newTime > prevData1[prevData1.length - 1].time)
        ) {
          const newData1 = [...prevData1, { time: newTime, value: pm10Value }];
          if (newData1.length > dataLimit) newData1.shift();
          lineSeries1Ref.current.setData(newData1);
          return newData1;
        }
        return prevData1;
      });

      setData2((prevData2) => {
        // Solo agregar nuevos datos si hay un valor y el tiempo es mayor al último valor
        if (
          pm25Value !== null &&
          (prevData2.length === 0 ||
            newTime > prevData2[prevData2.length - 1].time)
        ) {
          const newData2 = [...prevData2, { time: newTime, value: pm25Value }];
          if (newData2.length > dataLimit) newData2.shift();
          lineSeries2Ref.current.setData(newData2);
          return newData2;
        }
        return prevData2;
      });
    };

    const pm10Listener = onValue(pm10Ref, (snapshot) => {
      const pm10Value = snapshot.val();
      updateChartData(pm10Value, null);
    });

    const pm25Listener = onValue(pm25Ref, (snapshot) => {
      const pm25Value = snapshot.val();
      updateChartData(null, pm25Value);
    });

    return () => {
      off(pm10Ref, "value", pm10Listener);
      off(pm25Ref, "value", pm25Listener);
    };
  }, []);

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
        <Footer Absolute />
      </div>
    </div>
  );
}

export default Graph;