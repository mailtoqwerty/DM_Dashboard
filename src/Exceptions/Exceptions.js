
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../App.css";
// import back from "../back.png";
// import filterbutton from "../filterbutton.png"
// import exportbutton from "../export.png"

// const Exceptions = () => {
//   const navigate = useNavigate();
//   const params = useParams();
//   const [data, setData] = useState([]);
//   const [filterValues, setFilterValues] = useState({});
//   const [isFilterVisible, setIsFilterVisible] = useState(false);

//   useEffect(() => {
//     axios
//       .get(
//         `http://localhost:5241/api/Exception/stagewise/${params.fileId}?stage=${params.procesStage}&runid=${params.runId}`
//       )
//       .then((response) => {
//         setData(response.data);
//         initializeFilters(response.data);
//       });
//   }, [params.fileId, params.procesStage, params.runId]);

//   const initializeFilters = (data) => {
//     const filters = {};
//     if (data.length > 0) {
//       Object.keys(data[0]).forEach((key) => {
//         const uniqueValues = new Set(data.map((item) => item[key]));
//         filters[key] = "";
//         filters[`${key}Options`] = [...uniqueValues];
//       });
//     } else {
//       const key = ""; // Initialize key separately
//       filters[key] = "";
//       filters[`${key}Options`] = [];
//     }
//     setFilterValues(filters);
//   };

//   const handleFilterChange = (column, value) => {
//     setFilterValues((prevState) => ({
//       ...prevState,
//       [column]: value,
//     }));
//   };

//   const handleFilterToggle = () => {
//     setIsFilterVisible(!isFilterVisible);
//   };

//   const filterData = () => {
//     let filteredData = [...data];
//     Object.keys(filterValues).forEach((key) => {
//       const filterValue = filterValues[key];
//       if (typeof filterValue === "string") {
//         const filterLower = filterValue.toLowerCase();
//         filteredData = filteredData.filter((item) =>
//           String(item[key]).toLowerCase().includes(filterLower)
//         );
//       }
//     });
//     return filteredData;
//   };

//   const filteredData = filterData();

//   if (data.length === 0) {
//     return <div className="loading">Loading...</div>;
//   }

//   return (
//     <div className="margin">
      
//       <div className="topheading">
//       <div className="mb-3 cursor" onClick={() => navigate(-1)}>
//         <img className='backbutton' src={back} alt='back button '/>
//       </div>
//         <strong className="heading ">
//           Exceptions: {params.fileId} in {params.procesStage} of RunId {params.runId}
//         </strong>
//         <div>
//         <span  >
//             <img className='exporticon' src={exportbutton} alt='export button' />
//           </span>
//           <span className='exceptionfilter cursor' onClick={handleFilterToggle} ><img className='filtericon' src={filterbutton} alt='dropdown'/></span>    
//         </div>
//       </div>
//       <div className="exceptiontable">
//       <table className="table table-bordered ">
//         <thead>
//           <tr className="tableheadcolor table-light">
//             {data.length > 0 &&
//               Object.keys(data[0]).map((key) => (
//                 <th key={key}>
//                   {key}
//                 </th>
//               ))}
//           </tr>
//           {isFilterVisible && (
//             <tr className="tableheadcolor table-light">
//               {data.length > 0 &&
//                 Object.keys(data[0]).map((key) => (
//                   <th key={key}>
//                     <select
//                       className="filterborder"
//                       value={filterValues[key]}
//                       onChange={(e) => handleFilterChange(key, e.target.value)}
//                     >
//                       <option value="">All</option>
//                       {filterValues[`${key}Options`].map((value, index) => (
//                         <option key={index} value={value}>
//                           {value}
//                         </option>
//                       ))}
//                     </select>
//                   </th>
//                 ))}
//             </tr>
//           )}
//         </thead>
//         <tbody className="text font">
//           {filteredData.map((item, index) => (
//             <tr  key={index}>
//               {Object.values(item).map((value, index) => (
//                 <td  className="single-line" key={index}>{value}</td>
//               ))} 
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </div>
//     </div>
//   );
// };

// export default Exceptions;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CSVLink } from "react-csv";
import "../App.css";
import back from "../back.png";
import filterbutton from "../filterbutton.png";
import exportbutton from "../export.png";

const Exceptions = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState([]);
  const [filterValues, setFilterValues] = useState({});
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  // const [fileName, setFileName] = useState(params.procesStage);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5241/api/Exception/stagewise/${params.fileId}?stage=${params.procesStage}&runid=${params.runId}`
      )
      .then((response) => {
        setData(response.data);
        initializeFilters(response.data);
      });
  }, [params.fileId, params.procesStage, params.runId]);

  const initializeFilters = (data) => {
    const filters = {};
    if (data.length > 0) {
      Object.keys(data[0]).forEach((key) => {
        const uniqueValues = new Set(data.map((item) => item[key]));
        filters[key] = "";
        filters[`${key}Options`] = [...uniqueValues];
      });
    } else {
      const key = ""; // Initialize key separately
      filters[key] = "";
      filters[`${key}Options`] = [];
    }
    setFilterValues(filters);
  };

  const handleFilterChange = (column, value) => {
    setFilterValues((prevState) => ({
      ...prevState,
      [column]: value,
    }));
  };

  const handleFilterToggle = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const filterData = () => {
    let filteredData = [...data];
    Object.keys(filterValues).forEach((key) => {
      const filterValue = filterValues[key];
      if (typeof filterValue === "string") {
        const filterLower = filterValue.toLowerCase();
        filteredData = filteredData.filter((item) =>
          String(item[key]).toLowerCase().includes(filterLower)
        );
      }
    });
    return filteredData;
  };

  // const handleExportClick = () => {
   
  //   const dynamicFileName = {fileName}+"exceptions_" + Date.now() + ".csv";
  //   setFileName(dynamicFileName);
  // }

  const filteredData = filterData();

  if (data.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  const exportToCSV = () => {
    const csvData = filteredData.map((item) => ({
      ...item,
    }));

    return csvData;
  };

  return (
    <div className="margin">
      <div className="topheading ">
        <div className="mb-3 cursor" onClick={() => navigate(-1)}>
          <img className="backbutton" src={back} alt="back button " />
        </div>
        <strong className="heading ">
          Exceptions: {params.fileId} in {params.procesStage} of RunId {params.runId}
        </strong>
        <div className='exc-export-import-buttons'>
          <CSVLink data={exportToCSV()} filename={params.procesStage+"_"+params.fileId}>
            <img  className="exporticon" src={exportbutton} alt="export button" />
          </CSVLink>
          <span className=" cursor" onClick={handleFilterToggle}>
            <img className="ps-3 batchfiltericon" src={filterbutton} alt="dropdown" />
          </span>
        </div>
      </div>
      <div className="exceptiontable">
        <table className="table table-bordered ">
          <thead>
            <tr className="tableheadcolor table-light">
              {data.length > 0 &&
                Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
            </tr>
            {isFilterVisible && (
              <tr className="tableheadcolor table-light">
                {data.length > 0 &&
                  Object.keys(data[0]).map((key) => (
                    <th key={key}>
                      <select
                        className="filterborder"
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
            )}
          </thead>
          <tbody className="text font ">
            {filteredData.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, index) => (
                  <td className="single-line" key={index}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exceptions;
