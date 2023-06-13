
import React, { useState,useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import { BsTrash3 } from "react-icons/bs"
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import NormalizationConfigurationDetails from './NormalizationConfigurationDetails';
import NormalizationHeaderForm from '../Forms/NormalizationHeaderForm';


const NormalizationConfigurationHeader = () => {
  const [data,setData]=useState([]);

  const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handelclose=()=>setShow(false);

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
  
  return (
    <div className=' margin'>
    <div className='d-flex addbutton '>
        <strong className='heading'>Normalization Configuration Header :</strong>
        {/* <button  onClick={handleShow} className='buttonradious' > Add </button> */}
     
      <Modal show={show}>        
        <Modal.Body>
          <>
          <button className='justify-content-end buttonradious' onClick={handelclose}>X</button><NormalizationHeaderForm/>
           </>
        </Modal.Body> 
             
      </Modal>  

    </div>

    
        <table className='table table-striped' >
           <thead>
           <tr className='table tableheadcolor  '>
                <th className='p-2'>FileId</th>
                <th className='p-2'>Table Name</th>
                <th className='p-2'>Sequence</th>
                <th className='p-2'>Dependency</th>
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
                          <td><span onClick={() => deletenormheader(item.tablename)}> <BsTrash3/></span></td>
                      </tr>
                    )
                })} 
              </tbody>
        </table>
      
</div>
  )
}

export default NormalizationConfigurationHeader