
// import React, { useState, useEffect } from 'react';
// import { Link ,useNavigate} from 'react-router-dom';
// import axios from 'axios';
// import filterbutton from "./filterbutton.png"
// import { IoMdArrowDropup } from "react-icons/io";
// import { IoMdArrowDropdown } from "react-icons/io";
// import back from "./back.png";
// import exportbutton from "./export.png"


// import dropup from "./dropup.png";
// import dropdown from "./dropdown.png";

// const BatchStatusSummary = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [fileIdFilter, setFileIdFilter] = useState('');
//   const [runIdFilter, setRunIdFilter] = useState('');
//   const [statusFilter, setStatusFilter] = useState('');
//   const [procesStageFilter, setProcesStageFilter] = useState('');
//   const [fileIdOptions, setFileIdOptions] = useState([]);
//   const [runIdOptions, setRunIdOptions] = useState([]);
//   const [procesStageOptions, setProcesStageOptions] = useState([]);
//   const [statusOptions, setStatusOptions] = useState([]);
//   const [isFilterVisible, setIsFilterVisible] = useState(false);


//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5241/api/BatchStautsSummary');
//       const fetchedData = response.data;
//       setData(fetchedData);

//       const uniqueFileIds = [...new Set(fetchedData.map((item) => item.fileId))];
//       setFileIdOptions(uniqueFileIds);

//       const uniqueRunIds = [...new Set(fetchedData.map((item) => item.runId))];
//       setRunIdOptions(uniqueRunIds);

//       const uniqueStatus = [...new Set(fetchedData.map((item) => item.status))];
//       setStatusOptions(uniqueStatus);

//       const uniqueProcesStages = [...new Set(fetchedData.map((item) => item.procesStage))];
//       setProcesStageOptions(uniqueProcesStages);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleFileIdFilterChange = (e) => {
//     setFileIdFilter(e.target.value);
//   };

//   const handleRunIdFilterChange = (e) => {
//     setRunIdFilter(e.target.value);
//   };

//   const handleProcesStageFilterChange = (e) => {
//     setProcesStageFilter(e.target.value);
//   };

//   const handleStatusFilterChange = (e) => {
//     setStatusFilter(e.target.value);
//   };

//   const filteredData = data.filter((item) => {
//     const matchFileId = item.fileId.toLowerCase().includes(fileIdFilter.toLowerCase());
//     const matchRunId = String(item.runId).toLowerCase().includes(runIdFilter.toLowerCase());
//     const matchProcesStage = String(item.procesStage).toLowerCase().includes(procesStageFilter.toLowerCase());
//     const matchStatus = String(item.status).toLowerCase().includes(statusFilter.toLowerCase());

//     return matchFileId && matchRunId && matchProcesStage && matchStatus;
//   });

//   const toggleFilterVisibility = () => {
//     setIsFilterVisible(!isFilterVisible);
//   };

//   return (
//     <div className="margin">
      
//       <div className="d-flex">
//          <span className="cursor" onClick={() => navigate(-1)}>
//       <img className='backbutton' src={back} alt='back button '/>
//         </span>
//         <strong className="heading ">Batch Status: Summary</strong>
//         <div className='hidefilter'>
//           <span className='' onClick={toggleFilterVisibility} ><img className='filtericon' src={exportbutton} alt='export button'/></span>
//           <span className='ps-3' onClick={toggleFilterVisibility} ><img className='filtericon' src={filterbutton} alt='dropdown'/></span>
//         </div>
//       </div>

//       <div className='filterpadding'>
//       {isFilterVisible && (
//         <div className="d-flex filterspadding">
//           <div className="filter">
//             <label className="p-1">
//               <span className=' filtelable'>FileId:</span>
//             </label>
//             <select value={fileIdFilter} className="filterborder" onChange={handleFileIdFilterChange}>
//               <option value="">All</option>
//               {fileIdOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="filter">
//             <label className="p-1">
//               <span className=' filtelable'>RunId:</span>
//             </label>
//             <select value={runIdFilter} className="filterborder" onChange={handleRunIdFilterChange}>
//               <option value="">All</option>
//               {runIdOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="filter">
//             <label className="p-1  ">
//               <span className=' filtelable'>ProcesStage:</span>
//             </label>
//             <select value={procesStageFilter} className="filterborder" onChange={handleProcesStageFilterChange}>
//               <option value="">All</option>
//               {procesStageOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="filter">
//             <label className="p-1 ">
//               <span className=' filtelable'>Status:</span>
//             </label>
//             <select value={statusFilter} className="filterborder " onChange={handleStatusFilterChange}>
//               <option value="">All</option>
//               {statusOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       )}
//       </div>

//       <div className="table">
//         <table className=" table table-bordered table-responsive" width="100%">
//           <thead>
//             <tr className="tableheadcolor  table-light">
//               <th className="single-line">FileId</th>
//               <th className="single-line">RunId</th>
//               <th className="single-line">ProcesStage</th>
//               <th className="single-line">StartTime</th>
//               <th className="single-line">EndTime</th>
//               <th className="single-line">Duration</th>
//               <th className="single-line">Status</th>
//               <th className="single-line">Total Records</th>
//               <th className="single-line">Exceptions</th>
//               <th className="single-line">Successful Records</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((item, id) => (
//               <tr key={id} className="font">
//                 <td className="single-line">{item.fileId}</td>
//                 <td className="single-line">{item.runId}</td>
//                 <td className="single-line">{item.procesStage}</td>
//                 <td className="single-line">{item.startTime} </td>
//                 <td className="single-line">{item.endTime}</td>
//                 <td className="single-line">{item.duration}</td>
//                 <td className="single-line">{item.status}</td>
//                 <td className="single-line">
//                   <Link to={`/totalrecords/${item.fileId}/${item.procesStage}`} className="text">
//                     {item.totalRecords}
//                   </Link>
//                 </td>
//                 <td className="single-line">
//                   <Link
//                     to={`/exceptions/${item.fileId}/${item.procesStage}/${item.runId}`}
//                     className="text"
//                   >
//                     {item.exceptions}
//                   </Link>
//                 </td>
//                 <td className="single-line">
//                   <Link to={`/succefullrecords/${item.fileId}/${item.procesStage}`} className="text">
//                     {item.successfulRecords}
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BatchStatusSummary;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { CSVLink } from 'react-csv'; // Import CSVLink from react-csv library
import filterbutton from "./filterbutton.png"
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import back from "./back.png";
import exportbutton from "./export.png"


import dropup from "./dropup.png";
import dropdown from "./dropdown.png";

const BatchStatusSummary = () => {
  const params=useParams
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [fileIdFilter, setFileIdFilter] = useState('');
  const [runIdFilter, setRunIdFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [procesStageFilter, setProcesStageFilter] = useState('');
  const [fileIdOptions, setFileIdOptions] = useState([]);
  const [runIdOptions, setRunIdOptions] = useState([]);
  const [procesStageOptions, setProcesStageOptions] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5241/api/BatchStautsSummary');
      const fetchedData = response.data;
      setData(fetchedData);

      const uniqueFileIds = [...new Set(fetchedData.map((item) => item.fileId))];
      setFileIdOptions(uniqueFileIds);

      const uniqueRunIds = [...new Set(fetchedData.map((item) => item.runId))];
      setRunIdOptions(uniqueRunIds);

      const uniqueStatus = [...new Set(fetchedData.map((item) => item.status))];
      setStatusOptions(uniqueStatus);

      const uniqueProcesStages = [...new Set(fetchedData.map((item) => item.procesStage))];
      setProcesStageOptions(uniqueProcesStages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileIdFilterChange = (e) => {
    setFileIdFilter(e.target.value);
  };

  const handleRunIdFilterChange = (e) => {
    setRunIdFilter(e.target.value);
  };

  const handleProcesStageFilterChange = (e) => {
    setProcesStageFilter(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const filteredData = data.filter((item) => {
    const matchFileId = item.fileId.toLowerCase().includes(fileIdFilter.toLowerCase());
    const matchRunId = String(item.runId).toLowerCase().includes(runIdFilter.toLowerCase());
    const matchProcesStage = String(item.procesStage).toLowerCase().includes(procesStageFilter.toLowerCase());
    const matchStatus = String(item.status).toLowerCase().includes(statusFilter.toLowerCase());

    return matchFileId && matchRunId && matchProcesStage && matchStatus;
  });

  const exportToCSV = () => {
    const csvData = filteredData.map((item) => ({
      FileId: item.fileId,
      RunId: item.runId,
      ProcesStage: item.procesStage,
      StartTime: item.startTime,
      EndTime: item.endTime,
      Duration: item.duration,
      Status: item.status,
      'Total Records': item.totalRecords,
      Exceptions: item.exceptions,
      'Successful Records': item.successfulRecords,
    }));

    return csvData;
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="margin">

      <div className="d-flex">
        <span className="cursor" onClick={() => navigate(-1)}>
          <img className='backbutton' src={back} alt='back button ' />
        </span>
        <strong className="heading ">Batch Status: Summary</strong>
        <div className='hidefilter'>
          <CSVLink data={exportToCSV()} filename='batchstatus_summary' >
            <img className='exporticon' src={exportbutton} alt='export button' />
          </CSVLink>
          <span className='ps-3' onClick={toggleFilterVisibility} >
            <img className='batchfiltericon ' src={filterbutton} alt='dropdown' />
          </span>
        </div>
      </div>

      <div className='filterpadding'>
        {isFilterVisible && (
          <div className="d-flex filterspadding">
            <div className="filter">
              <label className="p-1">
                <span className=' filtelable'>FileId:</span>
              </label>
              <select value={fileIdFilter} className="filterborder" onChange={handleFileIdFilterChange}>
                <option value="">All</option>
                {fileIdOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter">
              <label className="p-1">
                <span className=' filtelable'>RunId:</span>
              </label>
              <select value={runIdFilter} className="filterborder" onChange={handleRunIdFilterChange}>
                <option value="">All</option>
                {runIdOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter">
              <label className="p-1  ">
                <span className=' filtelable'>ProcesStage:</span>
              </label>
              <select value={procesStageFilter} className="filterborder" onChange={handleProcesStageFilterChange}>
                <option value="">All</option>
                {procesStageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter">
              <label className="p-1 ">
                <span className=' filtelable'>Status:</span>
              </label>
              <select value={statusFilter} className="filterborder " onChange={handleStatusFilterChange}>
                <option value="">All</option>
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="table">
        <table className=" table table-bordered table-responsive" width="100%">
          <thead>
            <tr className="tableheadcolor  table-light">
              <th className="single-line" >FileId</th>
              <th className="single-line">RunId</th>
              <th className="single-line">ProcesStage</th>
              <th className="single-line">StartTime</th>
              <th className="single-line">EndTime</th>
              <th className="single-line">Duration</th>
              <th className="single-line">Status</th>
              <th className="single-line">Total Records</th>
              <th className="single-line">Exceptions</th>
              <th className="single-line">Successful Records</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, id) => (
              <tr key={id} className="font">
                <td className="single-line">{item.fileId}</td>
                <td className="single-line">{item.runId}</td>
                <td className="single-line">{item.procesStage}</td>
                <td className="single-line">{item.startTime} </td>
                <td className="single-line">{item.endTime}</td>
                <td className="single-line">{item.duration}</td>
                <td className="single-line">{item.status}</td>
                <td className="single-line">
                  <Link to={`/totalrecords/${item.fileId}/${item.procesStage}`} className="text">
                    {item.totalRecords}
                  </Link>
                </td>
                <td className="single-line">
                  <Link
                    to={`/exceptions/${item.fileId}/${item.procesStage}/${item.runId}`}
                    className="text"
                  >
                    {item.exceptions}
                  </Link>
                </td>
                <td className="single-line">
                  <Link to={`/succefullrecords/${item.fileId}/${item.procesStage}`} className="text">
                    {item.successfulRecords}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BatchStatusSummary;

