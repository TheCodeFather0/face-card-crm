import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      {/* Image */}
      <div className="w-full md:w-1/2 h-[300px] md:h-screen">
        <img
          src="/loginPage.svg"
          className="w-full h-full object-cover"
          alt="Login Illustration"
        />
      </div>

      {/* Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center h-auto md:h-screen py-10 px-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full max-w-md"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Log in
          </h2>

          <label className="flex flex-col gap-2">
            login
            <input
              type="text"
              placeholder="Default"
              className="w-full p-3 border border-[#C3BFBB] rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label className="flex flex-col gap-2">
            password
            <input
              type="password"
              placeholder="Default"
              className="w-full p-3 border border-[#C3BFBB] rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="bg-[#332A27] text-[#FFC5C5] font-bold py-3 px-6 rounded-xl w-fit"
          >
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
