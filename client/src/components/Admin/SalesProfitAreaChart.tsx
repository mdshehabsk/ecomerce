import Chart from "react-apexcharts";

import React from "react";
import { ApexOptions } from "apexcharts";

const SalesProfitAreaChart: React.FC<{ color: string; name?: string }> = ({
  color,
  name,
}) => {
  const series = [
    {
      name,
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51],
    },
  ];
  const options: ApexOptions = {
    chart: {
      type:'area',
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 0.4,
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      min: 0,
    },
    colors: [color],
    title: {
      text: "$424,652",
      offsetX: 0,
      style: {
        fontSize: "24px",
      },
    },
    subtitle: {
      text: name,
      offsetX: 0,
      style: {
        fontSize: "14px",
      },
    },
  };

  return (
    <div className="bg-white shadow-lg px-2   ">
      <Chart
        options={options}
        series={series}
        type="area"
      />
    </div>
  );
};

export default SalesProfitAreaChart;
