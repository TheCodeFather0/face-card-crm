import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {login} = useAuth()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = await login(username, password)
        if (success) {
            navigate("/")
        } else {
            alert("Invalid credentials")
        }
    }
  return (
   <div className='flex items-center bg-blue-500 '>
    <img src="/loginPage.svg" className='object-cover w-[50%] h-screen' alt="" />
     <div className="flex  items-center p-30  w-[100%] bg-white h-screen  ">
    <form onSubmit={handleSubmit} className=" flex flex-col gap-6 w-[50%] ">
      <h2 className="text-5xl font-bold mb-4 ">Log in </h2>
      <label htmlFor="" className='flex flex-col gap-4 '>
      login
      <input
        type="text"
        placeholder="Default"
        className="w-full mb-3 p-3 border border-#C3BFBB rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </label>
      <label htmlFor="" className='flex flex-col  gap-4'>
      password
      <input
        type="password"
        placeholder="Default"
        className="w-full mb-3 p-3 border border-#C3BFBB rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </label>
      <button type="submit" className="bg-[#332A27] text-[#FFC5C5] w-fit font-bold  py-3 px-6 rounded-xl">
        SAVE
      </button>
    </form>
  </div>
   </div>
  )
}

export default Login