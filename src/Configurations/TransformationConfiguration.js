import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import { BsTrash3 } from "react-icons/bs";
// import { Button } from 'react-bootstrap';
import { Modal, Button, Form } from "react-bootstrap";
// import Extractionform from '../Forms/Extractionform';
import TransformationForm from '../Forms/TransformationForm';



const TransformationConfiguration = () => {

    const[data,setData]=useState([]);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handelclose=()=>setShow(false);

    useEffect(() => {
  
        axios.get('http://192.168.29.128/api/ConfigTransformations')
            .then(response => {setData(response.data)})
            .catch(error => {console.error(error)})
             
        }, []);
      
        const deletetransfer = (fileName) => {
          axios.delete(`http://192.168.29.128/api/ConfigTransformations/${fileName}`)
            .then(response => {
              setData( data.filter(item => item.fileName !== fileName));
            })
            .catch(error => console.log(error));
        };
      
  return (
    <div className=' margin' > 
        <div className='d-flex addbutton ' >
        <h4 className='heading '>Transformation Configuration:</h4>  
        <button  onClick={handleShow} className='buttonradious' > Add </button>
     
      <Modal show={show}>        
        <Modal.Body>
          <>
          <button className='justify-content-end buttonradious' onClick={handelclose}>X</button><TransformationForm/>
           </>
        </Modal.Body> 
             
      </Modal>
          </div>        
          <table className='table table-striped ' >  
            <thead>              
            <tr className='tableheadcolor '>
              <th className='p-2'>FileName</th>   
              <th className='p-2'>FieldName</th>                            
              <th className='p-2'>Source</th>  
              <th className='p-2'>Destination</th>    
              <th className='p-2'>Derivation_Function</th>                              
              <th className='p-2'>Transf_Type</th>                          
            </tr>              
                  
            {
              data.map((item,id)=>{
                  return(
                      <tr key={id} className='text font '>
                          <td>{item.fileName}</td>
                          <td>{item.fieldName}</td>
                          <td>{item.source}</td>
                          <td>{item.destination}</td>
                          <td>{item.derivationFunction}</td>
                          <td>{item.transfType}</td>
                          <td><span onClick={() => deletetransfer(item.fileName)}> <BsTrash3/></span></td>
                      </tr>
                  )
              })
          }
             </thead>                  
            </table>
        {/* </div>                  */}
    </div>
  )
}

export default TransformationConfiguration;