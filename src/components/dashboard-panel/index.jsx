import React, { useEffect, useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DateRangePicker from '../date-range-picker';
import DashBoardStatsCards from '../dashboard-stats-cards';
import { useNavigate } from 'react-router-dom';

const DashboardPanel = () => {
  

  return (
    <div className='container mx-auto flex flex-col gap-4 py-2 px-40'>
      <DateRangePicker />
      <DashBoardStatsCards />
      
    </div>
  );
};

export default DashboardPanel;
