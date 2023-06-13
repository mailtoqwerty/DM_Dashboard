import React, {useEffect, useState } from 'react'
import axios from 'axios';
import { BsTrash3 } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Validationform from '../Forms/Validationform';
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import 'reactjs-popup/dist/index.css';

const ValidationConfiguration = () => {
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
        axios.get('http://localhost:5241/api/ValidationConfiguration')
        .then(res=>setData(res.data))            
        .catch(error => {console.error(error)})

    },[]);       

    const deletvalidatios=(fileName)=>{
        axios.delete(`http://localhost:5241/api/ValidationConfiguration/${fileName}`)
        .then(responce=>{
            setData(data.filter(item=>item.fileName !==fileName)) 
        })
        .catch(error => console.log(error));
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
    <div className=' margin'>       
          <div className='d-flex addbutton '>
          <strong className='heading'>Validation Configuration:</strong>     

<button  onClick={handleShow} className='buttonradious' > Add </button>

<Modal show={show} onHide={handleClose}>        
<Modal.Body>
<>
<button className='justify-content-end buttonradious' onClick={handleClose}>X</button><Validationform/>
        </>
</Modal.Body> 
 
</Modal>   
            
         </div>   

        <div className=''>
        
            <table className='table  table-striped' >
                <thead>
                    <tr className='tableheadcolor '>
                        <th className='p-2'>FileId</th>   
                        <th className='p-2'>FieldName</th>                            
                        <th className='p-2'>Width</th>  
                        <th className='p-2'>DataType</th>   
                        <th className='p-2'>Precision</th>                              
                        <th className='p-2'>Mandatory</th>   
                        <th className='p-2'>Default_Value</th>   
                        <th className='p-2'>Actions</th>
                    </tr>
                </thead>
                <tbody className='bordered table-striped'>
                {
                    data.map((item,id)=>{
                        return(
                            <tr key={id} className="text font">
                                <td>{item.fileId}</td>
                                <td>{item.fieldName}</td>
                                <td>{item.width}</td>
                                <td>{item.dataType}</td>
                                <td>{item.precision}</td>
                                <td>{item.mandatory}</td>
                                <td>{item.defaultValue}</td>
                                
                                <td>
                                    <span className="cursor p-2" onClick={() => handleEdit(item) }><BiEdit/></span>
                                    <span className="cursor" onClick={()=>deletvalidatios(item.fileName)}><BsTrash3/></span>
                                </td>

                            </tr>
                        )
                    })
                }   
                </tbody>                         
            </table>

            <div>
                {
                    isEditFormOpen&&(
                        <Modal show={isEditFormOpen} onHide={handleClose}>
                            <Modal.Body>
                            <center> <strong className='heading'>Extraction Form:</strong></center>
                                <form className=' form-control  '>
                            
                                <div className='col formtext' >
                                    <div><label><strong>FileId:</strong></label></div>
                                    <input className='form-control ' type={'text'}  value={updatedData.fileId || ''} />
                                </div>  

                                <div className=' mt-2'>
                                    <div><label><strong>FieldName:</strong></label></div>
                                    <input className='form-control' type={'text'} placeholder='FieldName'  name='fieldName' value={updatedData.fieldName || ''} onChange={(e) => setUpdatedData({ ...updatedData, fieldName: e.target.value })}/>  
                                </div> 

                                <div className='mt-2'>
                                    <div><label><strong>Width:</strong></label></div>
                                    <input className='form-control' type={'text'} placeholder='Width' name='width' value={updatedData.width || ''}/>
                                </div>  
                                <div className=' mt-2'>
                                    <div><label><strong>DataType:</strong></label></div>
                                    <input className='form-control' type={'text'} placeholder='DataType' name='dataType' value={updatedData.dataType || ''}/>
                                </div>   

                                <div className='col'>
                                    <div><label><strong>Precision:</strong></label></div>
                                        <input className='form-control' type={'text'} placeholder='Precision' name='precision' value={updatedData.precision || ''}/>
                                </div>
                                <div className='col'>
                                    <div><label><strong>Mandatory:</strong></label></div>
                                   
                                    <input className = "form-control" type={'text'} placeholder='Mandatory' name='mandatory' value={updatedData.mandatory || ''} />
                                    
                                </div>  

                                <div>
                                   <div><label><strong>Default_Value:</strong></label></div>
                                  <input className='form-control' type={'text'} placeholder='Default_Validation' name='defaultValidation' value={updatedData.defaultValidation || ''} />
                               
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
    </div>
  )
}

export default ValidationConfiguration