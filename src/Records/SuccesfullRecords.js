import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const SuccesfullRecords = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    // http://localhost:5241/api/Totalrecs/success/BAT001?stage=Extraction
    axios.get(`http://localhost:5241/api/Totalrecs/success/${params.fileId}?stage=${params.procesStage}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [params.batchId, params.procesStage]);


  return (
    <div className='margin'>
      <strong className="heading">SuccessFull Records: SuccessFull {params.procesStage}s in {params.fileId}</strong>
      <table className="table table-bordered">
        <thead>
          <tr className="tableheadcolo table-light formtext">
            {data.length > 0 &&          
              Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>))}
          </tr>        
        </thead> 
        <tbody className="text font">
          {data.map((item, index) => (
            <tr key={index} className="single-line">
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>   
      </table> 
    </div>
  )
}

export default SuccesfullRecords