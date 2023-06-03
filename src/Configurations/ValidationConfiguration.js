


import React, {useEffect, useState } from 'react'
import axios from 'axios';
import Validationform from '../Forms/Validationform';
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const ValidationConfiguration = () => {
    const[data,setData]=useState([]); 
    
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handelclose=()=>setShow(false);
    
    useEffect(()=>{
        axios.get('http://localhost:5241/api/FieldlevelConfiguration')
        .then(res=>setData(res.data))            
        .catch(error => {console.error(error)})

    },[]);       

    const deletvalidatios=(fileName)=>{
        axios.delete(`http://localhost:5241/api/FieldlevelConfiguration/${fileName}`)
        .then(responce=>{
            setData(data.filter(item=>item.fileName !==fileName)) 
        })
        .catch(error => console.log(error));
    }

  return (
    <div className=' margin'>       
          <div className='d-flex addbutton '>
          <h4 className='heading'>Validation Configuration:</h4>     

<button  onClick={handleShow} className='buttonradious' > Add </button>

<Modal show={show}>        
<Modal.Body>
<>
<button className='justify-content-end buttonradious' onClick={handelclose}>X</button><Validationform/>
        </>
</Modal.Body> 
 
</Modal>   
            
         </div>   

        <div className=''>
        
            <table className='table  table-striped' >
                <thead>
                    <tr className='tableheadcolor '>
                        <th className='p-2'>BatchId</th>   
                        <th className='p-2'>Field</th>                            
                        <th className='p-2'>Width</th>  
                        <th className='p-2'>DataType</th>   
                        <th className='p-2'>Precision</th>                              
                        <th className='p-2'>Mandatory</th>   
                        <th className='p-2'>Default_Value</th>   
                    </tr>
                </thead>
                <tbody className='bordered table-striped'>
                {
                    data.map((item,id)=>{
                        return(
                            <tr key={id} className="text font">
                                <td>{item.batchId}</td>
                                <td>{item.field}</td>
                                <td>{item.width}</td>
                                <td>{item.dataType}</td>
                                <td>{item.precision}</td>
                                <td>{item.mandatory}</td>
                                <td>{item.defaultValue}</td>
                                <td><button onClick={()=>deletvalidatios(item.fileName)}>Delete</button></td>
                            </tr>
                        )
                    })
                }   
                
                </tbody>       
                                     
            </table>
        </div>                       
    </div>
  )
}

export default ValidationConfiguration