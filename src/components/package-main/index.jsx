import React from 'react'

const PackageMain = () => {
  return (
    <div className='container mx-auto flex flex-col gap-4  py-2 px-40'>
        <h2 className='text-3xl font-bold'>Notifications</h2>
        <div className='flex  justify-between h-[500px] '>
            <label className='flex flex-col w-[605px] '>
                Azərbaycanca
                <textarea className='outline-0 resize-none h-[140px] rounded-lg border border-[#C3BFBB]' name="" id=""></textarea>
            </label>
            <label className='flex flex-col w-[605px] '>
                Rusca
                <textarea className='outline-0 resize-none h-[140px] rounded-lg border border-[#C3BFBB]' name="" id=""></textarea>
            </label>
          
        </div>
    </div>
  )
}

export default PackageMain