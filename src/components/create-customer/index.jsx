import React, { useState } from "react";
import Navbar from "../Navbar";

const CreateCustomer = () => {
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
          <h2 className="text-2xl font-bold mb-4">Yeni müştəri</h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
        
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
           </div>
          </div>


          <div className="flex justify-center mt-6">
            <button className="bg-[#332A27] text-[#FFC5C5] p-4 w-[50%] rounded-xl">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomer;
