import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import './App.css'

const TotalRecords = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5241/api/Totalrecs/${params.batchId}?stage=${params.procesStage}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [params.batchId, params.procesStage]);
  
  
  return ( 
    <div className="margin">
      <h4 className="heading">TotalRecords :</h4>
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





  

  

