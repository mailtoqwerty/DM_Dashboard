 import React, { useState,useEffect } from 'react'
 import axios from 'axios'
import NormalizationDetailsForm from '../Forms/NormalizationDetailsForm';
import { Modal, Button, Form } from "react-bootstrap";

 const NormalizationConfigurationDetails = () => {
  const [data,setData]=useState([]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handelclose=()=>setShow(false);

  useEffect(() => {
  
    axios.get('')
        .then(response => {setData(response.data)})
        .catch(error => {console.error(error)})
         
    }, []);
  
    const deletetransfer = (fileName) => {
      axios.delete(``)
        .then(response => {
          setData( data.filter(item => item.fileName !== fileName));
        })
        .catch(error => console.log(error));
    };

   return (
     <div className='margin'>
      <div className='d-flex addbutton '>
        <h4 className='heading'>Normalization Configuration Details:</h4>
        {/* <button  onClick={handleShow} className='buttonradious' > Add </button> */}
      
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
            <th className='p-2'>FileName</th>
            <th className='p-2'>FiledName</th>
            <th className='p-2'>Table </th>
            <th className='p-2'>Column</th>
          </tr>          
        </thead>
        <tbody className="text font">
          {data.map((item,id)=>{
            return(
              <tr key={id} >
                <td>{item.fileName}</td>
                <td>{item.fieldName}</td>
                <td>{item.table}</td>
                <td>{item.column}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

     </div>
   )
 }
 
 export default NormalizationConfigurationDetails