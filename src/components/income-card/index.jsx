import React, { useState, useEffect } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { MdOutlineAccessTime } from 'react-icons/md';
import { LuUserPlus } from 'react-icons/lu';
import { useNavigate, useLocation } from 'react-router-dom';

const IncomeCard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(location.state?.show || false);
  const [customer, setCustomer] = useState(location.state?.customer || null);
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState(location.state?.customer?.discount || 0);
  const [finalAmount, setFinalAmount] = useState(0);

  const handlePay = () => {
    if (!show) {
      navigate('/create-customer');
    } else {
      console.log('Ödəniş olunur');
    }
  };

  useEffect(() => {
    if (amount) {
      const discountAmount = (Number(amount) * Number(discount)) / 100;
      setFinalAmount(Number(amount) - discountAmount);
    } else {
      setFinalAmount(0);
    }
  }, [amount, discount]);

  return (
    <div className='flex justify-center items-center py-10'>
      <div className='bg-[#F4F4F4] p-9 flex flex-col gap-6 rounded-lg'>
        <div className='flex justify-between items-center gap-4'>
          <h3 className='text-2xl font-bold'>Yeni əməliyyat</h3>
          <IoIosCloseCircle className='text-3xl' />
        </div>

        <div>
          <p className=''>Müştəri</p>
          <div className='flex items-center gap-6 justify-between'>
            {show && customer ? (
              <h2 className='text-4xl'>{customer.name}</h2>
            ) : (
              <h2 className='text-4xl italic'>tapılmadı</h2>
            )}
            {show ? (
              <MdOutlineAccessTime className='text-2xl' />
            ) : (
              <div
                className='flex items-center rounded-3xl p-2 bg-[#FFE70B] gap-3 cursor-pointer hover:opacity-80 transition'
                onClick={() => navigate('/create-customer')}
              >
                <LuUserPlus className='text-2xl' />
                <h2 className='text-lg'>Müştəri yarat</h2>
              </div>
            )}
          </div>
        </div>

        <div className='bg-white rounded-lg'>
          <div className='flex items-center justify-between p-2 border-b border-[#DDD]'>
            <h2 className='font-bold'>Məbləğ</h2>
            <div className='flex justify-end items-center'>
              <input
                type='number'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className='w-[30%] p-2 outline-none border-none font-3xl'
              />
              <p>₼</p>
            </div>
          </div>

          {show && (
            <>
              <div className='flex items-center text-[#17B439] justify-between p-2 border-b border-[#DDD]'>
                <h2 className='font-bold'>Endirim %</h2>
                <div className='flex justify-end items-center'>
                  <input
                    type='number'
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    className='w-[30%] p-2 outline-none border-none font-3xl'
                  />
                  <p>%</p>
                </div>
              </div>

              <div className='flex items-center text-[#1A7EDA] justify-between p-2'>
                <h2 className='font-bold'>Yekun</h2>
                <div className='flex justify-end items-center'>
                  <input
                    type='text'
                    value={Number(finalAmount).toFixed(2)}
                    disabled
                    className='w-[30%] p-2 outline-none border-none font-3xl bg-gray-100'
                  />
                  <p>₼</p>
                </div>
              </div>
            </>
          )}
        </div>

        {show && customer && (
          <div className='bg-[#DFA100] rounded-lg text-white text-4xl font-bold p-3'>
            <h2>{customer.membership}</h2>
          </div>
        )}

        {amount > 0 && !isNaN(finalAmount) && (
          <div className='flex justify-center'>
            <p className='text-2xl font-bold mt-4'>
              Yekun məbləğ: {Number(finalAmount).toFixed(2)} ₼
            </p>
          </div>
        )}

        <div className='flex justify-center'>
          <button
            onClick={handlePay}
            className='text-[#FFC5C5] bg-[#332A27] p-4 w-[50%] rounded-xl'
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeCard;
