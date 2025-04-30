import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DateRangePicker from '../date-range-picker';
import DashBoardStatsCards from '../dashboard-stats-cards';
import { useNavigate } from 'react-router-dom';

const DashboardPanel = () => {
  const [barcode, setBarcode] = useState('');
  const navigate = useNavigate();

  const mockCustomers = [
    { barcode: '12345', name: 'Yuriy Kovalchuk', discount: 5, membership: 'Gold' },
    { barcode: '67890', name: 'Elvin Məmmədov', discount: 10, membership: 'Silver' },
  ];

  const handleScan = () => {
    const foundCustomer = mockCustomers.find((c) => c.barcode === barcode);
    if (foundCustomer) {
      navigate('/income', {
        state: {
          customer: foundCustomer,
          discount: foundCustomer.discount,
          show: true,
        },
      });
    } else {
      navigate('/income', {
        state: {
          customer: null,
          discount: 0,
          show: false,
        },
      });
    }
  };

  return (
    <div className='container mx-auto flex flex-col gap-4 py-2 px-40'>
      <DateRangePicker />
      <DashBoardStatsCards />
      <div className='flex gap-2 mb-4 '>
        <input
          type='text'
          placeholder='Barkod oxut...'
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          className='p-2 border rounded w-full'
        />
        <button onClick={handleScan} className='bg-blue-500 text-white p-2 rounded'>
          Scan
        </button>
      </div>
    </div>
  );
};

export default DashboardPanel;
