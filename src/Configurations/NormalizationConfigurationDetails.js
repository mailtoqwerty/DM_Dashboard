 import React, { useState,useEffect } from 'react'
 import axios from 'axios'
 import { BsTrash3 } from "react-icons/bs"
import NormalizationDetailsForm from '../Forms/NormalizationDetailsForm';
import { Modal, Button, Form } from "react-bootstrap";

 const NormalizationConfigurationDetails = () => {
  const [data,setData]=useState([]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handelclose=()=>setShow(false);

  useEffect(() => {
  
    axios.get('http://localhost:5241/api/NormalizationConfigurationDetail')
        .then(response => {setData(response.data)})
        .catch(error => {console.error(error)})
         
    }, []);
  
    const deletenormdetail = (fieldName) => {
      axios.delete(`http://localhost:5241/api/NormalizationConfigurationDetail/${fieldName}`)
        .then(response => {
          setData( data.filter(item => item.fieldName !== fieldName));
        })
        .catch(error => console.log(error));
    };

   return (
     <div className='margin'>
      <div className='d-flex addbutton '>
        <strong className='heading'>Normalization Configuration Details:</strong>
        <button  onClick={handleShow} className='buttonradious' > Add </button>
      
        <Modal show={show}>        
          <Modal.Body>
            <>
            <button className='justify-content-end buttonradious' onClick={handelclose}>X</button><NormalizationDetailsForm/>
              </>
          </Modal.Body>               
        </Modal>  

      </div>

      <table  className='table  table-striped '>
        <thead>
          <tr className='tableheadcolor '>
            <th className='p-2'>FileId</th>
            <th className='p-2'>FieldName</th>
            <th className='p-2'>TableName </th>
            <th className='p-2'>ColumnName</th>
          </tr>          
        </thead>
        <tbody className="text font">
          {data.map((item,id)=>{
            return(
              <tr key={id} >
                <td>{item.fileId}</td>
                <td>{item.fieldName}</td>
                <td>{item.tableName}</td>
                <td>{item.columnName}</td>
                <td><span onClick={() => deletenormdetail(item.fieldName)}> <BsTrash3/></span></td>
              </tr>
            )
          })}
        </tbody>
      </table>

     </div>
   )
 }
 
 export default NormalizationConfigurationDetails