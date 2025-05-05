import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import DashboardPanel from "../components/dashboard-panel";
import Scaner from "../components/Scaner";

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div>
      <Navbar logout={handleLogout} />
      <DashboardPanel />
      <Scaner />
    </div>
  );
};

export default Home;
