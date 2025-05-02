import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Navbar = ({ handleLogout }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const linkStyle = (path) =>
    currentPath === path ? "text-[#FF4D00]" : "text-[#FFFFFF]";

  const [barcode, setBarcode] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanBuffer, setScanBuffer] = useState("");

  const mockCustomers = [
    {
      barcode: "12345",
      name: "Yuriy Kovalchuk",
      discount: 5,
      membership: "Gold",
    },
    {
      barcode: "67890",
      name: "Elvin Məmmədov",
      discount: 10,
      membership: "Silver",
    },
  ];

  // Dinamik barkod okuma
  useEffect(() => {
    let timeout;
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        if (scanBuffer.length > 3) {
          setBarcode(scanBuffer);
          handleScan(scanBuffer);
        }
        setScanBuffer("");
        return;
      }

      if (!scanning) {
        setScanning(true);
        timeout = setTimeout(() => {
          setScanBuffer("");
          setScanning(false);
        }, 300); // 300ms içinde tamamlanmazsa sıfırla
      }

      setScanBuffer((prev) => prev + e.key);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [scanBuffer, scanning]);

  const handleScan = (scannedBarcode) => {
    const foundCustomer = mockCustomers.find((c) => c.barcode === scannedBarcode);
    if (foundCustomer) {
      navigate("/income", {
        state: {
          customer: foundCustomer,
          discount: foundCustomer.discount,
          show: true,
        },
      });
    } else {
      navigate("/income", {
        state: {
          customer: null,
          discount: 0,
          show: false,
        },
      });
    }
  };

  return (
    <div className="bg-[#191919] flex justify-between items-center container mx-auto py-2 px-40">
      <Link to={"/"}>
        <img src="/sketchcafe.png" alt="" />
      </Link>
      <div className="flex items-center gap-8 font-bold">
        <Link to={"/"} className={linkStyle("/")}>
          Dashboard
        </Link>
        <Link to={"/history"} className={linkStyle("/history")}>
          Əməliyyatlar
        </Link>
        <Link to={"/clients"} className={linkStyle("/clients")}>
          Müştərilər
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-[#FF4D00] flex items-center gap-2 px-4 py-2 rounded-md"
      >
        <FaUserAlt className="text-white" />
      </button>
      <div className="flex gap-2 mb-4 scanDiv ">
        <input
          type="text"
          placeholder="Barkod oxut..."
          value={barcode}
          readOnly
          className="p-2 border rounded w-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
