import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import DashboardPanel from "../components/dashboard-panel";

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="">
      <Navbar logout={handleLogout} />
      <DashboardPanel />
    </div>
  );
};

export default Home;
