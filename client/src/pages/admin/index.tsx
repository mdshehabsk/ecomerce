import  LastSixMonthSalesChart  from "@components/Admin/LastSixMonthSalesChart";
import SalesProfitAreaChart from "@components/Admin/SalesProfitAreaChart";

const index = () => {
  return (
    <>
    <div className="flex gap-2 justify-between">
    <SalesProfitAreaChart color="#3468C0" /><SalesProfitAreaChart color="#D24545" /><SalesProfitAreaChart color="green" />
    </div>
    <LastSixMonthSalesChart  />
    </>
  );
};
export default index;
