import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import { BsTrash3 } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
// import { Button } from 'react-bootstrap';
import { Modal, Button, Form } from "react-bootstrap";
// import Extractionform from '../Forms/Extractionform';
import TransformationForm from '../Forms/TransformationForm';
import edit from '../edit.png';
import del from '../delete.png'
import plus from "../plus.png"




const TransformationConfiguration = () => {

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
  
        axios.get('http://localhost:5241/api/TransformationConfiguration')
            .then(response => {setData(response.data)})
            .catch(error => {console.error(error)})
             
        }, []);
      
        const deletetransfer = (fileName) => {
          axios.delete(`http://localhost:5241/api/TransformationConfiguration/${fileName}`)
            .then(response => {
              setData( data.filter(item => item.fileName !== fileName));
            })
            .catch(error => console.log(error));
        };

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
    <div className=' margin' > 
        <div className='d-flex addbutton ' >
        <strong className='heading ps-2 single-line '>Transformation Configuration:</strong>  
        <button onClick={handleShow} className='buttonradious transformationbutton'><span className='addbuttontext'>< img className='plusbutton'src={plus} alt='plus '/>New</span></button>
     
      <Modal show={show}>        
        <Modal.Body>
          <>
          <button className='justify-content-end xradious' onClick={handleClose}>X</button><TransformationForm/>
           </>
        </Modal.Body> 
             
      </Modal>
          </div>        
          <table className='table table-bordered ' >  
            <thead>              
            <tr className='tableheadcolor table-light '>
              <th className='p-2'>FileId</th>   
              <th className='p-2'>FieldName</th>                            
              <th className='p-2'>SourceValue</th>  
              <th className='p-2'>DestinationValue</th>    
              <th className='p-2'>DerivationFunction</th>                              
              <th className='p-2'>TransformationType</th>   
              <th className='p-2'>Actions</th>                       
            </tr>     
            </thead>         
            <tbody className='bordered table-striped'>
              {
              data.map((item,id)=>{
                  return(
                      <tr key={id} className='text font '>
                          <td>{item.fileId}</td>
                          <td>{item.fieldName}</td>
                          <td>{item.sourceValue}</td>
                          <td>{item.destinationValue}</td>
                          <td>{item.derivationFunction}</td>
                          <td>{item.transformationType}</td>

                          <td className='iconfont'>
                            <span className="cursor p-2" onClick={() => handleEdit(item) }><img className='iconfont' src={edit} alt ='edit button'/></span>
                            <span onClick={() => deletetransfer(item.fileName)}><img className='deleteicon' src={del} alt='delete image' /></span></td>
                      </tr>
                  )
              })}
              </tbody>              
            </table>
            <div>
                {
                    isEditFormOpen&&(
                        <Modal show={isEditFormOpen} onHide={handleClose}>
                            <Modal.Body>
                            <center> <strong className='heading'>Transformation Form:</strong></center>
                                <form className='formtext'>
                            
                                <div className='col ' >
                                    <div><label><strong className='tableheadcolor'>FileId:</strong></label></div>
                                    <input className='form-control ' type={'text'} name='fieldId'  value={updatedData.fileId || ''} />
                                </div>  

                                <div className=' mt-1 '>
                                    <div><label><strong className='tableheadcolor'>FieldName:</strong></label></div>
                                    <input className='form-control' type={'text'}   name='fieldName' value={updatedData.fieldName || ''} onChange={(e) => setUpdatedData({ ...updatedData, fieldName: e.target.value })}/>  
                                </div> 

                                <div className='mt-1 '>
                                    <div><label><strong className='tableheadcolor'>SourceValue:</strong></label></div>
                                    <input className='form-control' type={'text'} name='sourceValue' value={updatedData.sourceValue || ''} onChange={(e) => setUpdatedData({ ...updatedData, sourceValue: e.target.value })}/>
                                </div>  
                                <div className=' mt-1 '>
                                    <div><label><strong className='tableheadcolor'>DestinationValue:</strong></label></div>
                                    <input className='form-control' type={'text'}  name='destinationValue' value={updatedData.destinationValue || ''} onChange={(e) => setUpdatedData({ ...updatedData, destinationValue: e.target.value })}/>
                                </div>   

                                <div className='mt-1 '>
                                    <div><label><strong className='tableheadcolor'>DerivationFunction:</strong></label></div>
                                        <input className='form-control' type={'text'}  name='derivationFunction' value={updatedData.derivationFunction || ''} onChange={(e) => setUpdatedData({ ...updatedData, derivationFunction: e.target.value })}/>
                                </div>
                                <div className='mt-1 '>
                                    <div><label><strong className='tableheadcolor'>TransformationType:</strong></label></div>
                                   
                                    <input className = "form-control" type={'text'}  name='transformationType' value={updatedData.transformationType || ''} onChange={(e) => setUpdatedData({ ...updatedData, transformationType: e.target.value })} />
                                    
                                </div>  

                              
                                
                                <div className='row m-2 justify-content-center'>
                                    <div className='col-4 mt-3'>
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

export default TransformationConfiguration;