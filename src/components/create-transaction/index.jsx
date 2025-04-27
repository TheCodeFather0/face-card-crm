import React, { useState } from "react";
import Navbar from "../Navbar";

const CreateTransaction = () => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    surname: "",
    birthday: "",
    gender: "kişi",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Yeni müşteri:", formData);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center py-10">
        <div className="bg-[#F4F4F4] p-8 rounded-lg ">
          <h2 className="text-2xl font-bold mb-4">Yeni əməliyyat</h2>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <label className="flex flex-col" htmlFor="">
              Telefon
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon"
                className="p-2 border rounded"
              />
            </label>
            <label className="flex flex-col" htmlFor="">
              Ad
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ad"
                className="p-2 border rounded"
              />
            </label>
            <label className="flex flex-col" htmlFor="">
              Soyad
              <input
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="Soyad"
                className="p-2 border rounded"
              />
            </label>
            <label className="flex flex-col" htmlFor="">
              Ad günü
              <input
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                placeholder="Ad günü"
                type="date"
                className="p-2 border rounded"
              />
            </label>
            <div className="flex flex-col">
                <p>Cins</p>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="kişi">kişi</option>
              <option value="qadın">qadın</option>
            </select>
            </div>
           <div className="flex items-end  w-[100%] ">
           <button
              onClick={handleSave}
              className="bg-[#C8CFCB] h-[40px] w-full text-black font-bold  rounded"
            >
              Save
            </button>
           </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center text-2xl">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-black">Məbləğ</h3>
              <p className="font-bold">42.50 ₼</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-green-500">Endirim 5%</h3>
              <p className="font-bold">4.14 ₼</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-blue-500">Yekun</h3>
              <p className="font-bold">3.84 ₼</p>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-[#332A27] text-[#FFC5C5] p-4 w-[50%] rounded-xl">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTransaction;
