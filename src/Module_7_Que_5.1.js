import React, { useState } from 'react';
import './Table.css';

const Table = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.price.toLowerCase().includes(searchTerm) ||
    item.category.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                    <button className='btn btn-primary'>Read</button>
                    <button className='btn btn-info mx-3'>Edit</button>
                    <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
