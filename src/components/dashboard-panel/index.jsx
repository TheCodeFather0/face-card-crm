import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import DateRangePicker from "../date-range-picker";
import DashBoardStatsCards from "../dashboard-stats-cards";

const DashboardPanel = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-6 py-4 px-4 sm:px-6 md:px-10">
      <DateRangePicker />
      <DashBoardStatsCards />
    </div>
  );
};

export default DashboardPanel;
