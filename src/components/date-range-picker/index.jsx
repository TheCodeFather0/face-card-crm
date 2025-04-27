import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";
import DatePicker from "react-datepicker";
import { FiCalendar } from "react-icons/fi";
import { FaStore } from "react-icons/fa";

export default function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
  <div className='flex  justify-between  w-full items-center gap-2'>
     <h2 className='text-4xl font-bold'>Dashboard</h2>
      <div className='flex items-center gap-4'>
      <div className="flex  items-center border rounded-md px-4 py-2 shadow-sm  space-x-4 bg-white">
      <div className="flex  items-center divide-x">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="from"
          className="outline-none border-r px-2 py-1 text-sm placeholder-gray-500 w-24"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="to"
          className="outline-none px-2 py-1 text-sm placeholder-gray-500 w-24"
        />
      </div>
      <div className="flex items-center space-x-2">
        <FiCalendar className="w-5 h-5 text-gray-700" />
      </div>
    </div>
        <FaStore className="w-5 h-5 text-red-600" />
      </div>
  </div>
  );
}
