

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BatchStatusSummary = () => {
  const [data, setData] = useState([]);
  const [fileIdFilter, setFileIdFilter] = useState('');
  const [runIdFilter, setRunIdFilter] = useState('');
  const [procesStageFilter, setProcesStageFilter] = useState('');
  const [fileIdOptions, setFileIdOptions] = useState([]);
  const [runIdOptions, setRunIdOptions] = useState([]);
  const [procesStageOptions, setProcesStageOptions] = useState([]);

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

  //   const filteredData = data.filter((item) => {
//     const matchFileId = item.fileId.toLowerCase().includes(fileIdFilter.toLowerCase());
//     const matchRunId = String(item.runId).toLowerCase().includes(runIdFilter.toLowerCase());
//     const matchProcesStage = String(item.procesStage).toLowerCase().includes(procesStageFilter.toLowerCase());
  
//     return matchFileId && matchRunId && matchProcesStage;
//   });


  const filteredData = data.filter((item) => {
    const matchFileId =  item.fileId.toLowerCase().includes(fileIdFilter.toLowerCase());
    const matchRunId = String(item.runId).toLowerCase().includes(runIdFilter.toLowerCase());
    const matchProcesStage = String(item.procesStage).toLowerCase().includes(procesStageFilter.toLowerCase());

    return matchFileId && matchRunId && matchProcesStage;
  });

  return (
    <div className="margin ">
      <div className='d-flex '>
        <strong className="heading">Batch Status: Summary</strong>
        <div className='d-flex filterspadding'>
          <div className="filter ">
            <label className='p-2'><strong>FileId:</strong></label>
            <select value={fileIdFilter} className='filterborder' onChange={handleFileIdFilterChange}>
              <option value="">All</option>
              {fileIdOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="filter">
            <label className='p-2'><strong>RunId:</strong></label>
            <select value={runIdFilter} className='filterborder' onChange={handleRunIdFilterChange}>
              <option value="">All</option>
              {runIdOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="filter">
            <label className='p-2 '><strong>ProcesStage:</strong></label>
            <select value={procesStageFilter} className='filterborder' onChange={handleProcesStageFilterChange}>
              <option value="">All</option>
              {procesStageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className='table-container'>
        <table className=" table table-striped table-responsive" width="100%">
          <thead>
            <tr className="tableheadcolor">
              <th className="single-line">FileId</th>
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
              <tr key={id} className='font'>
                <td className="single-line">{item.fileId}</td>
                <td className="single-line">{item.runId}</td>
                <td className="single-line">{item.procesStage}</td>
                <td className="single-line">{item.startTime} </td>
                <td className="single-line">{item.endTime}</td>
                <td className="single-line">{item.duration}</td>
                <td className="single-line">{item.status}</td>
                <td className="single-line">
                  <Link to={`/totalrecords/${item.fileId}/${item.procesStage}`} className='text'>{item.totalRecords}</Link>
                </td>
                <td className="single-line">
                  <Link to={`/exceptions/${item.fileId}/${item.procesStage}/${item.runId}`} className='text'>{item.exceptions}</Link>
                </td>
                <td className="single-line">
                  <Link to={`/succefullrecords/${item.fileId}/${item.procesStage}`} className='text'>{item.successfulRecords}</Link>
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

