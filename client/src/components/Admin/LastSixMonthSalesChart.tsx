import Chart from "react-apexcharts";

const options = {
  chart: {
    id: "basic-bar",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
  responsive: [
    {
      breakpoint: 768, // Adjust this breakpoint based on your design needs
      options: {
        chart: {
          width: "100%", // Set width to 100% for smaller screens
        },
      },
    },
    {
      breakpoint: 1140, // Adjust this breakpoint based on your design needs
      options: {
        chart: {
          width: "50%", // Set width to 100% for smaller screens
        },
      },
    },
  ],
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];

const LastSixMonthSalesChart = () => (
  <Chart options={options} series={series} type="bar" width={500} />
);

export default LastSixMonthSalesChart;
