 import React, { useState,useEffect } from 'react'
 import axios from 'axios'
 import { BsTrash3 } from "react-icons/bs"
 import { BiEdit } from "react-icons/bi";
import NormalizationDetailsForm from '../Forms/NormalizationDetailsForm';
import { Modal, Button, Form } from "react-bootstrap";
import edit from '../edit.png';
import del from '../delete.png'
import plus from "../plus.png"



 const NormalizationConfigurationDetails = () => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState({});
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState({});

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setEditData({});
    setUpdatedData({});
    setIsEditFormOpen(false);
  };

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

    const handleEdit = (item) => {
      setEditData(item);
      setIsEditFormOpen(true);
      setUpdatedData(item);
    };

    const handleUpdate = () => {
      axios.put(`http://localhost:5241/api/NormalizationConfigurationDetail/${editData.fileId}`, updatedData)
        .then(response => {
          setData(data.map(item => (item.fileId === editData.fileId ? response.data : item)));
          handleClose();
        })
        .catch(error => console.log(error));
    };

   return (
     <div className='margin'>
      <div className='d-flex addbutton '>
        <strong className='heading ps-2 single-line'>Normalization Configuration Details:</strong>
        <button onClick={handleShow} className='buttonradious normbutton'><span className='addbuttontext'>< img className='plusbutton'src={plus} alt='plus '/>New</span></button>
      
        <Modal show={show}>        
          <Modal.Body>
            <>
            <button className='justify-content-end xradious ' onClick={handleClose}>X</button>

             <NormalizationDetailsForm/>
            </>
          </Modal.Body>                
        </Modal>  

      </div>

      <div className=''>
      <table  className='table table-bordered  '>
        <thead>
          <tr className='tableheadcolor table-light'>
            <th className='p-2'>FileId</th>
            <th className='p-2'>FieldName</th>
            <th className='p-2'>TableName </th>
            <th className='p-2'>ColumnName</th>
            <th className='p-2'>Actions</th>


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
                <td className='jutifycontent-center'>
                  <span className="cursor " onClick={() => handleEdit(item) }><img className='iconfont' src={edit} alt ='edit button'/></span>
                  <span className="cursor  " onClick={() => deletenormdetail(item.fieldName)}> <img className='deleteicon' src={del} alt='delete image' /></span></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      <div className='row' >
      {isEditFormOpen && (
        <Modal show={isEditFormOpen} onHide={handleClose}  >
          <Modal.Body className='formwidth ' >

         
          <div className='mt-4 formtext' >
           <center> <strong className='heading '>Normalization Form:</strong></center>
             <form className='formtext  '>           
              <div className='col ' >
                  <label><strong className='tableheadcolor'>FileId:</strong></label>
                  <input className='form-control ' type={'text'}  value={updatedData.fileId || ''} />
              </div>  

              <div className='col ' >
                <label><strong className='tableheadcolor'>FieldName:</strong></label>
                <input className='form-control ' type={'text'} name='fieldName' value={updatedData.fieldName || ''} onChange={(e) => setUpdatedData({ ...updatedData, fieldName: e.target.value })}/>
              </div>          

            
              <div  className='col '>
                <lable><strong className='tableheadcolor'>TableName:</strong></lable></div>
              <div>
                <input className='form-control'  type="text" name='tableName'value={updatedData.tableName || ''} onChange={(e) => setUpdatedData({ ...updatedData, tableName: e.target.value })}/>
              </div>             

            
              <div  className='col '>
                <lable><strong className='tableheadcolor'>ColumnName:</strong></lable></div>
              <div>
                <input className='form-control' type="text" value={updatedData.columnName || ''} onChange={(e) => setUpdatedData({ ...updatedData, columnName: e.target.value })} />
              </div>       
        
           <div className='row m-2 justify-content-center'>
              <div className='col-4'>
                <button type='submit' onClick={handleUpdate} className='btn btn-primary form-control mt-3'>Update</button>
              </div>
            </div>
          </form>
          </div>
          </Modal.Body>
         </Modal>
      )}
      </div>

     </div>
   )
 }
 
 export default NormalizationConfigurationDetails