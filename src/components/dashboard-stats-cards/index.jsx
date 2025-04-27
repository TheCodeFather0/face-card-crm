import React from 'react'

const DashBoardStatsCards = () => {
  const mockData = [
    {
      title:"Ümumi Satışlar",
      date:"Bu gün",
      percentage:"2.4%",
      price:"15,425.50 ₼"
    },
    {
      title:"Aktiv İstifadəçilər",
      date:"Son 30 Gün",
      percentage:"2.4%",
      price:"1,245"
    },
    {
      title:"Orta çek",
      date:"Bu ay",
      percentage:"2.4%",
      price:"68.50 ₼"
    },
    {
      title:"Yeni müştərilər",
      date:"Bu həftə",
      percentage:"2%",
      price:"124"
    },
  ]
  return (
    
    <div className="flex justify-between items-center mt-5 gap-6">
    {mockData.map(({title,date,percentage,price})=>(
          <div className="bg-[#F4F4F4] flex flex-col gap-4 w-[25%] p-4">
            <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center gap-3">
          <p> {date}</p>
          <p className="text-[#17B439]">{percentage}</p>
          </div>
            <p className="text-3xl">{price}</p>
          </div>
      ))}
    </div>
  )
}

export default DashBoardStatsCards