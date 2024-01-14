import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import React from "react";

interface ChartData {
  options: ApexOptions;
  series: any;
}

const SalesProfitAreaChart: React.FC<{ color: string }> = ({ color }) => {
  const chartData: ChartData = {
    options: {
      chart: {
        id: "basic-area",
        toolbar: {
          show: false,
        },
        zoom:{enabled:false},
       
      },
      title:{
text:'sales',
margin:10,
style:{
    fontSize:'16px'
}
      },
      colors: [color],
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
        labels: { show: false, },

      },
      yaxis: {
        labels: { show: false },
        
      },
      
    },
    

    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 80, 20, 12],
      },
    ],
  };

  return (
    <div className="bg-white shadow-sm flex-1">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
      />
    </div>
  );
};

export default SalesProfitAreaChart;
