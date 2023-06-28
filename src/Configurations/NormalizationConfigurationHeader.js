
import React, { useState,useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import { BsTrash3 } from "react-icons/bs"
import { BiEdit } from "react-icons/bi";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import NormalizationConfigurationDetails from './NormalizationConfigurationDetails';
import NormalizationHeaderForm from '../Forms/NormalizationHeaderForm';

import edit from '../edit.png';
import del from '../delete.png'
import plus from "../plus.png"
import back from "../back.png";

import { useNavigate } from 'react-router-dom';



const NormalizationConfigurationHeader = () => {
  const navigate=useNavigate();
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
  
      axios.get('http://localhost:5241/api/NormalizationConfigurationHeader')
          .then(response => {setData(response.data)})
          .catch(error => {console.error(error)})
           
      }, []);
    
      const deletenormheader = (tablename) => {
        axios.delete(`http://localhost:5241/api/NormalizationConfigurationHeader/${tablename}`)
          .then(response => {
            setData( data.filter(item => item.tablename !== tablename));
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
    <div className=' margin'>
    
    <div className='d-flex addbutton '>
    <span className="" onClick={() => navigate(-1)}>
      <img className='backbutton' src={back} alt='back button '/>
        </span>
        <strong className='heading single-line'>Normalization Configuration Header:</strong>
        <span onClick={handleShow} className='buttonradious normbutton cursor p-1'><span className='addbuttontext'>< img className='plusbutton'src={plus} alt='plus '/>New</span></span>
     
      <Modal show={show}>        
        <Modal.Body>
          <>
          <button className='justify-content-end xradious' onClick={handleClose}>X</button>
          <NormalizationHeaderForm/>
           </>
        </Modal.Body> 
             
      </Modal>  

    </div>

    
<div className=''>
<table className=' table table-bordered ' >
           <thead>
           <tr className=' tableheadcolor table-light  '>
                <th className='p-2'>FileId</th>
                <th className='p-2'>Table Name</th>
                <th className='p-2'>Sequence</th>
                <th className='p-2'>Dependency</th>
                <th className='p-2'>Actions</th>
            </tr>
           </thead>
           <tbody className="text font">
           {
                data.map((item,id)=>{
                    return(
                      <tr className="text font">
                          <td>{item.fileId}</td>
                          <td>{item.tablename}</td>
                          <td>{item.sequence}</td>
                          <td>{item.dependency}</td>
                          <td>
                          <span className="cursor p-2" onClick={() => handleEdit(item) }><img className='iconfont' src={edit} alt ='edit button'/></span>
                            <span className="cursor" onClick={() => deletenormheader(item.tablename)}> <img className='deleteicon' src={del} alt='delete image' /></span></td>
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

         
          <div className=' mt-4 ' >
           <center> <strong className='heading'>Normalization Form:</strong></center>
             <form className=' formtext  '>
           
             <div >
              <div><label><strong className='tableheadcolor'>FileId:</strong></label></div>
                <input className='form-control ' type={'text'}  value={updatedData.fileId || ''} />
              </div>   

            
              <div><lable><strong className='tableheadcolor'> TableName:</strong></lable></div>
              <div>
                <input className='form-control'  type="text" name='tableName'value={updatedData.tableName || ''} onChange={(e) => setUpdatedData({ ...updatedData, tableName: e.target.value })}/>
              </div>             

            
              <div  className='col '><lable><strong className='tableheadcolor'>sequence:</strong></lable></div>
              <div>
                <input className='form-control' type="text" name='sequence' value={updatedData.sequence || ''} onChange={(e) => setUpdatedData({ ...updatedData, sequence: e.target.value })} />
              </div>       
              <div  className='col '><lable><strong className='tableheadcolor'>Dependency:</strong></lable></div>
              <div>
                <input className='form-control' type="text" name='dependency' value={updatedData.dependency || ''} onChange={(e) => setUpdatedData({ ...updatedData, dependency: e.target.value })} />
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

export default NormalizationConfigurationHeader