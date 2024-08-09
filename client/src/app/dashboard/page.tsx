'use client'
import LastSixMonthSalesChart from "@/components/Admin/LastSixMonthSalesChart";
import SalesProfitAreaChart from "@/components/Admin/SalesProfitAreaChart";
import TopFiveCategoryProductPieChart from "@/components/Admin/TopFiveCategoryProductPieChart";

const index = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-2">
        <SalesProfitAreaChart color="#3468C0"  name="Sales" />
        <SalesProfitAreaChart color="#D24545"  name="Expense" />
        <SalesProfitAreaChart color="green" name="Profit"  />
      </div>
      <div className=" my-3 grid grid-cols-1 lg:grid-cols-12 gap-1 ">
      <LastSixMonthSalesChart />
      <TopFiveCategoryProductPieChart/>
      </div>

    </>
  );
};
export default index;
