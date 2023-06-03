
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import '../App.css'

const ValidationExceptions = (props) => {
//   const params = useParams();
  const [data, setData] = useState([]);
  const [filterValues, setFilterValues] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5241/api/Exception/stagewise/BAT001?stage=Validation`).then((response) => {
      setData(response.data);
      initializeFilters(response.data);
    });
  }, []);

  const initializeFilters = (data) => {
    const filters = {};
    if (data.length > 0) {
      Object.keys(data[0]).forEach((key) => {
        const uniqueValues = new Set(data.map((item) => item[key]));
        filters[key] = '';
        filters[`${key}Options`] = [...uniqueValues];
      });
    }
    setFilterValues(filters);
  };

  const handleFilterChange = (column, value) => {
    setFilterValues((prevState) => ({
      ...prevState,
      [column]: value,
    }));
  };

  const filterData = () => {
    let filteredData = [...data];
    Object.keys(filterValues).forEach((key) => {
      const filterValue = filterValues[key];
      if (typeof filterValue === 'string') {
        const filterLower = filterValue.toLowerCase();
        filteredData = filteredData.filter((item) =>
          String(item[key]).toLowerCase().includes(filterLower)
        );
      }
    });
    return filteredData;
  };

  const filteredData = filterData();

  if (data.length === 0) {
    <div className='loading'>Loading...</div>;
 }

  return (
    <div className="margin">
      <h4 className="heading">ValidationExceptions :</h4>
      <table className="table table-striped">
        <thead>
          <tr className="tableheadcolor">
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => (
                <th key={key}>
                  {key}
                  <select
                    value={filterValues[key]}
                    onChange={(e) => handleFilterChange(key, e.target.value)}
                  >
                    <option value="">All</option>
                    {filterValues[`${key}Options`].map((value, index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="text font">
          {filteredData.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ValidationExceptions;
