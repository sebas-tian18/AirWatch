import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
//import ArrowComponent from "../Components/Toward";

// Definimos el componente Graph
function Graph() {
  const chartContainerRef1 = useRef();
  const chartContainerRef2 = useRef();
  const lineSeries1Ref = useRef();
  const lineSeries2Ref = useRef();

  useEffect(() => {
    const createChartInstance = (containerRef) => {
      const chart = createChart(containerRef.current, {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      });

      const lineSeries = chart.addLineSeries();
      const data = [];
      for (let i = 0; i < 100; i++) {
        data.push({ time: i, value: Math.random() * 100 });
      }
      lineSeries.setData(data);

      return { chart, lineSeries };
    };

    const { chart: chart1, lineSeries: lineSeries1 } = createChartInstance(chartContainerRef1);
    const { chart: chart2, lineSeries: lineSeries2 } = createChartInstance(chartContainerRef2);

    lineSeries1Ref.current = lineSeries1;
    lineSeries2Ref.current = lineSeries2;

    const updateData = () => {
      const newData1 = [];
      const newData2 = [];
      for (let i = 0; i < 100; i++) {
        newData1.push({ time: i, value: Math.random() * 100 });
        newData2.push({ time: i, value: Math.random() * 100 });
      }
      lineSeries1Ref.current.setData(newData1);
      lineSeries2Ref.current.setData(newData2);
    };

    const intervalId = setInterval(updateData, 1000);

    return () => {
      chart1.remove();
      chart2.remove();
      clearInterval(intervalId);
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
              style={{ width: "100%", height: "200px", position: "relative" }}
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
              style={{ width: "100%", height: "200px", position: "relative" }}
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
