import React, { useState,useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import { BsTrash3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Extractionform from '../Forms/Extractionform';
// import { AiFillDelete } from "react-icons/ai";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const ExtractionConfiguration = () => {
const[data,setData]=useState([]);
const [selectedItems, setSelectedItems] = useState([]);
const [show, setShow] = useState(false);

const handleShow = () => setShow(true);
const handelclose=()=>setShow(false);

useEffect(() => {
  
  axios.get('http://localhost:5241/api/ExtractionConfiguration')
      .then(response => {setData(response.data)})
      .catch(error => {console.error(error)})
    
  }, []);

  // const handleCheckboxChange = (itemId) => {
  //   const selectedIndex = selectedItems.indexOf(itemId);
  //   let newSelectedItems = [...selectedItems];

  //   if (selectedIndex === -1) {
  //     // Add the item to the selected items list
  //     newSelectedItems.push(itemId);
  //   } else {
  //     // Remove the item from the selected items list
  //     newSelectedItems.splice(selectedIndex, 1);
  //   }

  //   setSelectedItems(newSelectedItems);
  // };

 

  // const handleDelete = (batchId) => {
  //   axios.delete(`http://localhost:5241/api/ExtractionConfiguration/${batchId}`)
  //     .then(response => {
  //       setData(data.filter((item) => !selectedItems.includes(item.batchId)));
  //       setSelectedItems([]);
  //     })
  //     .catch(error => console.log(error));
  // };

  const handleDelete = (batchId) => {
    axios.delete(`http://localhost:5241/api/ExtractionConfiguration/${batchId}`)
      .then(response => {
        setData(data.filter((item) => item.batchId!==batchId));
       
      })
      .catch(error => console.log(error));
  };



  const handleDeleteSelected = () => {
    const updatedData = data.filter((item) => !selectedItems.includes(item.id));
    setData(updatedData);
    setSelectedItems([]);
  };


 

  // const update=(fileName)=>{
  //   axios.put(`http://192.168.29.128/api/ConfigExtractions/${updateData.fileName}`, { fileName: updateData.fileName })
  //   .then(response=>{
  //     setData(data.map(item => (item.id === updateData.id ? response.data : item)));
  //     setUpdateData({
  //       fileName: ''  
  //     })
  //   })
  // }


    
  return (
    <div className=' margin '>   
    <div className='d-flex addbutton '>
      <h4 className='heading '>Extraction Configuration:</h4> 

       <button  onClick={handleShow} className='buttonradious' > Add </button>
     
      <Modal show={show}>        
        <Modal.Body>
          <>
          <button className='justify-content-end buttonradious' onClick={handelclose}>X</button><Extractionform />
           </>
        </Modal.Body>              
      </Modal>  
      
    </div>
   
      <table className='table table-striped ' > 
        <thead  >
          <tr className='tableheadcolor'>
            <th className='p-2 '>BatchId</th>   
            <th className='p-2 '>FileName</th>   
            <th className='p-2'>Num_Of_Fields</th>  
            <th className='p-2'>TypeofFile</th>  
            <th className='p-2'>Delimiter</th>   
            <th className='p-2'>SequenceOrder</th>
            <th className='p-2'>Predecessor</th>
            <th className='p-2'>Normalization</th>
            <th className='p-2'>ProgramName</th>                         
          </tr>
                                                
            {
              data.map((item,id)=>{
                return(
                <tr key={id} className='text font'>
                
                  <td>{item.batchId}</td>
                  <td>{item.fileName}</td>
                  <td>{item.noOfFields}</td>
                  <td>{item.typeofFile}</td>
                  <td>{item.delimiter}</td>
                  <td>{item.sequence}</td>
                  <td>{item.predecessor}</td>
                  <td>{item.normalizationConfiguration}</td>
                  <td>{item.programName}</td>

                  
                   <td>
                   <span onClick={() => handleDelete(item.fileName)} ><BsTrash3/></span>    
                   {/* <td><span onClick={() => deletetransfer(item.fileName)}> <BsTrash3/></span></td> */}

                   </td>                 

                  </tr>                                   
                )
              })
            }   
            </thead>                                       
          </table>
      {/* </div>                       */}
    </div>  
  )
}

export default ExtractionConfiguration;