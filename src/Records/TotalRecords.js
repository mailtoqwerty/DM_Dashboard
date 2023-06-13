import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import '../App.css'

const TotalRecords = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5241/api/Totalrecs/${params.fileId}?stage=${params.procesStage}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [params.fileId, params.procesStage]);
  
  
  return ( 
    <div className="margin">
      <strong className="heading">Total Records of {params.procesStage} in {params.fileId}:</strong>
      <table className="table table-striped">
        <thead>
          <tr className="tableheadcolor">
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

      {/* className="single-line">        */}

    </div>
  )
}

export default TotalRecords





  

  

