'use client'
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const series = [44, 55, 13, 33, 100];
const option: ApexOptions = {
  chart: {
    width: "100%",
  },
  title: {
    text: "Top Five category Product",
    offsetY: 5,
    offsetX:2,
    style: {
      fontSize: "18px",
    },
  },
  dataLabels: {
    enabled: true,
  },
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  // responsive: [{
  //   breakpoint: 480,
  //   options: {
  //     chart: {
  //       width: 200
  //     },
  //     legend: {
  //       show: false
  //     }
  //   }
  // }],
  legend: {
    position: "bottom",
    offsetY: 5,
  },
};

const TopFiveCategoryProductPieChart = () => {
  return (
    <div className="bg-white shadow-md  lg:col-span-5 grow ">
      <Chart options={option} series={series} type="donut" />
    </div>
  );
};

export default TopFiveCategoryProductPieChart;
