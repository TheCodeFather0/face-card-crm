import { useState } from "react";

export const FilterableTable = ({
  data,
  columns,
  title = "Cədvəl",
  onRowClick,
  extraFilter,
  extraButton,
}) => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredData = data.filter((item) =>
    columns.every((col) => {
      const filterValue = filters[col.accessor] || "";
      return filterValue === ""
        ? true
        : item[col.accessor]
            ?.toString()
            .toLowerCase()
            .includes(filterValue.toLowerCase());
    })
  );

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-6 py-4 px-4 sm:px-6 md:px-10">
      <div className="flex justify-between items-center mb-4 mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
        {/* <div className="flex gap-2 items-center">
          {extraFilter && extraFilter({ filters, handleFilterChange })}
          {extraButton && extraButton}
        </div> */}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-t border-gray-300">
          <thead>
            <tr className="border-b font-semibold text-gray-800">
              {columns.map((col) => (
                <th key={col.accessor} className="px-3 py-2">
                  {col.label}
                </th>
              ))}
            </tr>
            <tr className="border-b text-gray-500">
              {columns.map((col) => (
                <th key={col.accessor} className="px-3 py-2">
                  <input
                    type="text"
                    className="w-full bg-gray-100 rounded px-2 py-1"
                    value={filters[col.accessor] || ""}
                    onChange={(e) =>
                      handleFilterChange(col.accessor, e.target.value)
                    }
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => onRowClick && onRowClick(row)}
              >
                {columns.map((col) => (
                  <td key={col.accessor} className="px-3 py-2">
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length === 0 && (
          <p className="mt-4 text-sm text-gray-500">Uyğun nəticə tapılmadı.</p>
        )}
      </div>
    </div>
  );
};
