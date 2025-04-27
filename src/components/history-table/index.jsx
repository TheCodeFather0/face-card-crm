import React from 'react'
import { FilterableTable } from '../table';
import { Calendar, Filter } from 'lucide-react';
const data = [
  {
    id: 1,
   merchant: 'Khan',
    musteri: 'Əli Məmmədov',
    telefon: '+994(55) 777-73-49',
    mebleg: 85.5,
    endirim: 'Gold 9%',
    tarix: '2024-12-16 14:30',
  },
  {
    id: 2,
   merchant: 'Khan',
    musteri: 'Əli Məmmədov',
    telefon: '+994(55) 777-73-49',
    mebleg: 85.5,
    endirim: 'Gold 9%',
    tarix: '2024-12-16 14:30',
  },
  {
    id: 3,
   merchant: 'Khan',
    musteri: 'Əli Məmmədov',
    telefon: '+994(55) 777-73-49',
    mebleg: 85.5,
    endirim: 'Gold 9%',
    tarix: '2024-12-16 14:30',
  },
  {
    id: 4,
   merchant: 'Khan',
    musteri: 'Əli Məmmədov',
    telefon: '+994(55) 777-73-49',
    mebleg: 85.5,
    endirim: 'Gold 9%',
    tarix: '2024-12-16 14:30',
  },
];

const columns = [
  { label: 'ID', accessor: 'id' },
  { label: 'Müştəri', accessor: 'musteri' },
  { label: 'Telefon', accessor: 'telefon' },
  {label:"Merchant",accessor:"merchant"},
  { label: 'Məbləğ, ₼', accessor: 'mebleg' },
  { label: 'Endirim', accessor: 'endirim' },
  { label: 'Tarix', accessor: 'tarix' },
];
const HistoryTable = () => {
  return (
    <div>
      <FilterableTable data={data} columns={columns}
        extraFilter={({ filters, handleFilterChange }) => (
          <div className="flex items-center border rounded px-2 py-1 gap-2 w-[200px]">
            <Filter className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="search by date"
              className="outline-none w-full text-sm"
              value={filters['tarix'] || ''}
              onChange={(e) => handleFilterChange('tarix', e.target.value)}
            />
            <Calendar className="w-4 h-4 text-gray-500" />
          </div>
        )}
      />
    </div>
  )
}

export default HistoryTable