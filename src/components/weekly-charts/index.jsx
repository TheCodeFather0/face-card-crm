import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const WeeklyCharts = () => {
    const weeklyData = [
        { name: "A", uv: 6000, pv: 3000, amt: 1000 },
        { name: "B", uv: 8000, pv: 2800, amt: 5000 },
        { name: "C", uv: 4000, pv: 3500, amt: 3500 },
        { name: "D", uv: 3000, pv: 4200, amt: 2500 },
        { name: "E", uv: 2000, pv: 3600, amt: 3000 },
        { name: "F", uv: 5000, pv: 3000, amt: 2000 },
        { name: "G", uv: 3000, pv: 4200, amt: 4000 },
        { name: "H", uv: 6000, pv: 4500, amt: 2000 },
      ];
  return (
    <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold mb-2">Bu həftə</h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="uv" stroke="#00B4D8" />
                  <Line type="monotone" dataKey="pv" stroke="#FFB703" />
                  <Line type="monotone" dataKey="amt" stroke="#023047" />
                </LineChart>
              </ResponsiveContainer>
            </div>
  )
}

export default WeeklyCharts