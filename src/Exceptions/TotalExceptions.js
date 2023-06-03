  import React, { useState ,useEffect} from 'react'
  import axios from 'axios';
  const TotalExceptions = () => {
      const[data,setData]=useState([]);
      
      useEffect(() => {
          axios.get("http://localhost:5241/api/Exception").then((response) => {
            setData(response.data);
          });
        }, []);
        
        if (data.length === 0) {
          <div className='loading'>Loading...</div>;
       }

       
    return (
      <div className='margin'>
        <h4 className="heading">Total Exceptions:</h4>  
        
        <table className=" table   table-striped">
          <tr className=''>
        
            <tr>
              <th>ID</th>
              <th>Factor_Name</th>
              <th>Value</th>
              <th>Start_Date</th>
              <th>Value_2</th>
              <th>Value_3</th>
              <th>IsActive</th>
              <th>DMWB_IsExcep</th>
              <th>DMWB_ExcepDesc</th>
              <th>DMWB_timeStamp</th>
              <th>Exception_Stage</th>
            </tr>  
        
    {/*{data.length > 0 &&
                  Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}

          </tr> */}
            {/* {data.length >0 &&
                  
                    <tr>
                      {Object.keys(data[0]).map((key)=><th key={key}><tr>{key}</tr></th>)}
                    </tr>
                  } */}
        
            </tr> 
      
        {/* {qQ
          data.map((innerArray, outerIndex) => (
            <tr key={outerIndex}>
              {innerArray.map((item, innerIndex) => (
                <tr key={innerIndex} >
                  <td>{item.iD}</td> 
                  <td>{item.fACTOR_NAME}</td>
                  <td>{item.value}</td>
                  <td>{item.start_Date}</td>
                  <td>{item.value_2}</td>
                  <td>{item.value_3}</td>
                  <td>{item.isActive}</td>
                  <td>{item.dMWB_IsExcep}</td>
                  <td>{item.dMWB_ExcepDesc}</td>
                  <td>{item.dMWB_timeStamp}</td>
                  <td>{item.exception_Stage}</td>                    
                </tr>
              ))}
            </tr>
          ))
        }     */}

          {data.map((item, index) => (
            <tr key={index}>
            {item.map((items,id)=>(
              <tr key={id}>
                {Object.values(items).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
              </tr>
            ))}  
            </tr>
          ))}  
        </table>
      </div>
    )
  }

  export default TotalExceptions