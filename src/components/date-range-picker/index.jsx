import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-10 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold ">Dashboard</h2>

      <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
        {/* Date Range Box */}
        <div className="flex items-center border rounded-md px-4 py-2 shadow-sm space-x-4 bg-white">
          <div className="flex items-center divide-x">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="from"
              className="outline-none border-r px-2 text-sm placeholder-gray-500 w-24"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="to"
              className="outline-none px-2 text-sm placeholder-gray-500 w-24"
            />
          </div>
          <div className="flex items-center space-x-2">
            <FiCalendar className="w-5 h-5 text-gray-700" />
          </div>
        </div>

        {/* Add User Icon */}
        <Link to="/create-customer">
          <img
            src="/adduser.png"
            alt="add user icon"
            className="w-7 h-7 object-contain"
          />
        </Link>
      </div>
    </div>
  );
}
