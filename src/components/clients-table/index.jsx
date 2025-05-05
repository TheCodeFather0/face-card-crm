import React, { useEffect, useState } from "react";
import { FilterableTable } from "../table";
import { Calendar, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ClientsTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Yüklənmə vəziyyəti
  const navigate = useNavigate();

  const handleRowClick = (row) => {
    navigate(`/clients/${row.id}`);
  };

  useEffect(() => {
    fetch("https://facecardapi.azurewebsites.net/api/customers")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false); // Verilənlər yükləndikdən sonra loading statusunu dəyişirik
      });
  }, []);

  const columns = [
    { label: "ID", accessor: "id" },
    { label: "Müştəri", accessor: "fullName" },
    { label: "Telefon", accessor: "phoneNumber" },
    {
      label: "Səviyyə",
      accessor: "level",
    },
    { label: "Xərclənən,₼", accessor: "spendAmount" },
    {
      label: "Qoşulma tarixi",
      accessor: "joinDate",
      render: (value) =>
        new Date(value).toLocaleString("az-AZ", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
    },
  ];

  return (
    <div className="w-full">
      {/* Cədvəl başlığı */}
      <FilterableTable
        data={data}
        columns={columns}
        title="Müştərilər"
        onRowClick={handleRowClick}
        extraFilter={({ filters, handleFilterChange }) => (
          <div className="flex items-center border rounded px-2 py-1 gap-2 ">
            <Filter className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Tarix ilə axtar"
              className="outline-none w-full text-sm"
              value={filters["joinDate"] || ""}
              onChange={(e) => handleFilterChange("joinDate", e.target.value)}
            />
            <Calendar className="w-4 h-4 text-gray-500" />
          </div>
        )}
      />

      {/* Yüklənmə zamanı cədvəl bədənində spinner */}
      {loading && (
        <div className="w-full flex justify-center items-center py-6">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-200"></div>
        </div>
      )}
    </div>
  );
};

export default ClientsTable;
