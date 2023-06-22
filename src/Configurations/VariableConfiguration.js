

import axios from 'axios';
import '../App.css'
import React, { useEffect,useState } from 'react'
import { BsTrash3 } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import VariableConfigurationForm from '../Forms/VariableConfigurationForm';

import edit from '../edit.png';
import del from '../delete.png'
import plus from "../plus.png"




const VariableConfiguration = () => {
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

    
     
    useEffect(()=>{
        axios.get("http://localhost:5241/api/VariableConfiguration")
        .then(res=>(setData(res.data)))
        .catch(error => {console.error(error)})

    },[])
      
           
    

    const handeldelete=(variableName)=>{
        axios.delete(`http://localhost:5241/api/VariableConfiguration/${variableName}`).then(res=>{
            setData(data.filter(item=>item.variableName!==variableName));
        })
    }

    const handleEdit = (item) => {
        setEditData(item);
        setIsEditFormOpen(true);
        setUpdatedData(item);
      };

      const handleUpdate = () => {
        axios.put(`http://localhost:5241/api/ValidationConfiguration/${editData.fileId}`, updatedData)
          .then(response => {
            setData(data.map(item => (item.fileId === editData.fileId ? response.data : item)));
            handleClose();
          })
          .catch(error => console.log(error));
      };
  return (
    <div className=' margin '>
        <div className='d-flex addbutton '>
            <strong className='heading ps-2'>VariableConfiguration:</strong>         
        
            <button onClick={handleShow} className='buttonradious variablebutton'><span className='addbuttontext'>< img className='plusbutton'src={plus} alt='plus '/>New</span></button>
        
            <Modal show={show}>        
                <Modal.Body>
                    <>
                    <button className='justify-content-end xradious' onClick={handleClose}>X</button><VariableConfigurationForm/>
                    </>
                </Modal.Body>                 
            </Modal>             
        </div> 

        <table className=' table table-bordered ' >
            <thead >
                <tr className='tableheadcolor table-light'>
                    <th className='p-2'>VariableName</th>
                    <th className='p-2'> Description</th>
                    <th className='p-2'>Value</th>
                    <th className='p-2'>Actions</th>
                   
                </tr>
          </thead>
          <tbody>
          {
                data.map((item,id)=>{
                    return(
                        <tr key={id} className="text font">
                            <td>{item.variableName}</td>
                            <td>{item.description}</td>
                            <td>{item.value}</td>
                            
                            <td>
                                <span className="cursor p-2" onClick={() => handleEdit(item) }><img className='iconfont' src={edit} alt ='edit button'/></span>
                                <span onClick={()=>handeldelete(item.variableName)}><img  className='deleteicon' src={del} alt='delete image' /></span>
                            </td>
                        </tr>
                    )
                })
            }   
          </tbody>
           
        </table>
        {/* EDIt Form For Variable configuration */}

        <div>
                {
                    isEditFormOpen&&(
                        <Modal show={isEditFormOpen} onHide={handleClose}>
                            <Modal.Body>
                            <center> <strong className='heading'>Extraction Form:</strong></center>
                                <form className=' form-control  '>
                            
                                <div className='col formtext' >
                                    <div><label><strong>variableName:</strong></label></div>
                                    <input className='form-control ' type={'text'}  value={updatedData.variableName || ''} />
                                </div>  

                                <div className=' mt-2 formtext'>
                                    <div><label><strong>Description:</strong></label></div>
                                    <input className='form-control' type={'text'} placeholder='description'  name='description' value={updatedData.description || ''} onChange={(e) => setUpdatedData({ ...updatedData, description: e.target.value })}/>  
                                </div> 

                                <div className='mt-2 formtext'>
                                    <div><label><strong>Value:</strong></label></div>
                                    <input className='form-control' type={'text'} placeholder='value' name='value' value={updatedData.value || ''}  onChange={(e) => setUpdatedData({ ...updatedData, description: e.target.value })}/>
                                </div>  
                                
                                
                                <div className='row m-2 justify-content-center'>
                                    <div className='col-4'>
                                        <button type='submit' onClick={handleUpdate} className='btn btn-primary form-control'>Update</button>
                                    </div>
                                </div>
                                </form>

                            </Modal.Body>
                        </Modal>
                    )
                }
            </div>
    </div>
  )
}

export default VariableConfiguration;