

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { BsTrash3 } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Extractionform from '../Forms/Extractionform';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import edit from '../edit.png';
import del from '../delete.png';
import plus from "../plus.png"
import back from "../back.png";



const ExtractionConfiguration = () => {
  const navigate = useNavigate();
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
  // ------------------


  // ___________________________________

  useEffect(() => {
    axios.get('http://localhost:5241/api/ExtractionConfiguration')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = (fileName) => {
    axios.delete(`http://localhost:5241/api/ExtractionConfiguration/${fileName}`)
      .then(response => {
        setData(data.filter((item) => item.fileName !== fileName));
      })
      .catch(error => console.log(error));
  };

  const handleEdit = (item) => {
    setEditData(item);
    setIsEditFormOpen(true);
    setUpdatedData(item);
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:5241/api/ExtractionConfiguration/${editData.fileId}`, updatedData)
      .then(response => {
        setData(data.map(item => (item.fileId === editData.fileId ? response.data : item)));
        handleClose();
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='margin'>
     
      <div className='d-flex addbutton'>
      <span className="cursor" onClick={() => navigate(-1)}>
      <img className='backbutton' src={back} alt='back button '/>
        </span>
      
       <strong className='heading '>Extraction Configuration:</strong>
        <sapn onClick={handleShow} className='buttonradious extractionbutton cursor p-1'><span className='addbuttontext'>< img className='plusbutton'src={plus} alt='plus '/>New</span></sapn>
      
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
             <button className='justify-content-end xradious ' onClick={handleClose}>X</button>
            <Extractionform />
            
          </Modal.Body>
        </Modal>
      </div>

      <table className=' table table-bordered'>
        <thead>
          <tr className='tableheadcolor table-light'>
            <th className='p-2'>FileId</th>
            <th className='p-2'>FileName</th>
            <th className='p-2'>Num_Of_Fields</th>
            <th className='p-2'>TypeofFile</th>
            <th className='p-2'>Delimiter</th>
            <th className='p-2'>SequenceOrder</th>
            <th className='p-2'>Predecessor</th>
            <th className='p-2'>Normalization</th>
            <th className='p-2'>ProgramName</th>
            <th className='p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item} className='text font'>
              <td>{item.fileId}</td>
              <td>{item.fileName}</td>
              <td>{item.noOfFields}</td>
              <td>{item.typeofFile}</td>
              <td>{item.delimiter}</td>
              <td>{item.sequence}</td>
              <td>{item.predecessor}</td>
              <td>{item.normalizationConfiguration}</td>
              <td>{item.programName}</td>
              <td >
                 <span className="p-2 cursor" onClick={() => handleEdit(item) }><img className='iconfont' src={edit} alt ='edit button'/></span>
                <span  className=' cursor' onClick={() => handleDelete(item.fileName)}><img className='deleteicon' src={del} alt='delete image' /></span>          
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ------------------------- */}

            
      <div className='row' >
      {isEditFormOpen && (
        <Modal show={isEditFormOpen} onHide={handleClose}  >
          <Modal.Body className='formwidth ' >

         
          <div className='mt-4 formtext ' >
           <center> <strong className='heading'>Extraction Form:</strong></center>
             <form className=' form-control tableheadcolor mt-2 '>
           
             <div className='col formtext tableheadcolor m-1' >
              <div><label><strong >FileId:</strong></label></div>
                <input className='form-control ' type={'text'}  value={updatedData.fileId || ''} />
              </div>  

              <div className='col formtext tableheadcolor m-1' >
              <div><label><strong>FileName:</strong></label></div>
                <input className='form-control ' type={'text'} placeholder='FileName' value={updatedData.fileName || ''} onChange={(e) => setUpdatedData({ ...updatedData, fileName: e.target.value })}/>
              </div>   
          

            
              <div  className='col formtext tableheadcolor m-1'><lable><strong>Number of Fields:</strong></lable></div>
              <div>
                <input className='form-control'  type="text" value={updatedData.noOfFields || ''} onChange={(e) => setUpdatedData({ ...updatedData, noOfFields: e.target.value })}/>
              </div>
            

            
            
              <div className='row col mt-1'>
               <div className='col'>
               <div  className='formtext tableheadcolor m-1'>
                  <lable><strong>Type of File:</strong></lable>
                </div>
              
                <div>
                  <input className='form-control' type="text" value={updatedData.typeofFile || ''} onChange={(e) => setUpdatedData({ ...updatedData, typeofFile: e.target.value })} />
                </div>
                </div>
              
              
                <div className='col'>
                <div  className=' formtext tableheadcolor m-1'><> <lable><strong>Delimiter:</strong></lable></></div>
                <div>
                <input className='form-control' type="text" value={updatedData.delimiter || ''} onChange={(e) => setUpdatedData({ ...updatedData, delimiter: e.target.value })}  />
                </div>
                </div>
              

            
               <div className='col'>
               <div  className='col formtext tableheadcolor m-1'><lable><strong>Sequence Order:</strong></lable></div>
                <div>
                <input className='form-control'
                  type="text"
                  value={updatedData.sequence || ''}
                  onChange={(e) => setUpdatedData({ ...updatedData, sequence: e.target.value })}
                />
                </div>
               </div>
              </div>
         
          

          
              <div  className='col formtext tableheadcolor m-1'><lable><strong>Predecessor:</strong></lable></div>
              <div>
              <input className='form-control'
                type="text"
                value={updatedData.predecessor || ''}
                onChange={(e) => setUpdatedData({ ...updatedData, predecessor: e.target.value })}
              />
              </div>
          

        
            <div  className='col formtext tableheadcolor m-1'>  <lable><strong>Normalization Configuration:</strong></lable></div>
              <div>
              <input className='form-control'
                type="text"
                value={updatedData.normalizationConfiguration || ''}
                onChange={(e) => setUpdatedData({ ...updatedData, normalizationConfiguration: e.target.value })}
              />  
              </div>
        
              <div  className='col formtext tableheadcolor m-1'><lable><strong>Program Name:</strong></lable></div>
              <div>       
                  <input className='form-control' type="text"  value={updatedData.programName || ''} onChange={(e) => setUpdatedData({ ...updatedData, programName: e.target.value })} />
              </div>
       
        
           <div className='row m-2 justify-content-center'>
              <div className='col-4'>
                <button type='submit' onClick={handleUpdate} className='btn btn-primary form-control'>Update</button>
              </div>
            </div>
          </form>
          </div>
          </Modal.Body>
         </Modal>
      )}
      </div>
      

    </div>
  );
}

export default ExtractionConfiguration;
