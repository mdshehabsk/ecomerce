'use client'


import { SolidApexCharts } from 'solid-apexcharts';

import { ApexOptions } from "apexcharts";

const options = {
  chart: {
    id: "basic-bar",
    toolbar:{
      show:false
    },
    
  },
  xaxis: {
    categories: [
      'July',
      'June',
      'May',
      'April',
      'March',
      'February'
    ]
  },
  title: {
    text: "Last six month sales overview",
    offsetX: 2,
    offsetY:5,
    style: {
      fontSize: "18px",
    },
  },
  // responsive: [
  //   {
  //     breakpoint: 768, // Adjust this breakpoint based on your design needs
  //     options: {
  //     title:{
  //       style:{
  //         fontSize:'20px'
  //       }
  //     },
  //       chart: {
  //         width: "100%", // Set width to 100% for smaller screens
  //       },
  //     },
  //   },
    
  // ],
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60],
  },
];

const LastSixMonthSalesChart = () => (
 <div class="px-2 bg-white md:col-span-7  shadow-md " >
   <SolidApexCharts options={options} series={series} type="bar"  />
 </div>
);

export default LastSixMonthSalesChart;
