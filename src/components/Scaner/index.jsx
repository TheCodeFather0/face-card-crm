import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Scaner = () => {
  const [barcode, setBarcode] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanBuffer, setScanBuffer] = useState("");
  const navigate = useNavigate();

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
    const foundCustomer = mockCustomers.find(
      (c) => c.barcode === scannedBarcode
    );
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
  return (
    <div className="flex gap-2 mb-4 scanDiv ">
      <input
        type="text"
        placeholder="Barkod oxut..."
        value={barcode}
        readOnly
        className="p-2 border rounded w-full"
      />
    </div>
  );
};

export default Scaner;
