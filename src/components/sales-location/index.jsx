import React from 'react'
import { Bar, BarChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const SalesLocation = () => {
    const locationData = [
        { name: "Jan", temperature: 2, rainfall: 30 },
        { name: "Feb", temperature: 4, rainfall: 40 },
        { name: "Mar", temperature: 8, rainfall: 60 },
        { name: "Apr", temperature: 12, rainfall: 80 },
        { name: "May", temperature: 16, rainfall: 100 },
        { name: "Jun", temperature: 20, rainfall: 120 },
        { name: "Jul", temperature: 22, rainfall: 130 },
        { name: "Aug", temperature: 21, rainfall: 120 },
        { name: "Sep", temperature: 17, rainfall: 90 },
        { name: "Oct", temperature: 12, rainfall: 70 },
        { name: "Nov", temperature: 6, rainfall: 50 },
        { name: "Dec", temperature: 3, rainfall: 30 },
      ];
  return (
    <div className="bg-white p-4 rounded shadow">
    <h2 className="text-lg font-bold mb-2">Məkan üzrə satışlar</h2>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={locationData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="rainfall" fill="#0077B6" />
        <Line type="monotone" dataKey="temperature" stroke="#000" />
      </BarChart>
    </ResponsiveContainer>
  </div>
  )
}

export default SalesLocation