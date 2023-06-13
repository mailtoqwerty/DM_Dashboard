

import axios from 'axios';
import '../App.css'
import React, { useEffect,useState } from 'react'
import { BsTrash3 } from "react-icons/bs";
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import VariableConfigurationForm from '../Forms/VariableConfigurationForm';


const VariableConfiguration = () => {
    const[data,setData]=useState([]); 

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handelclose=()=>setShow(false);

    
     
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

   
  return (
    <div className=' margin '>
        <div className='d-flex addbutton '>
            <strong className='heading'>VariableConfiguration:</strong>         
        
            <button  onClick={handleShow} className='buttonradious' > Add </button>
        
            <Modal show={show}>        
                <Modal.Body>
                    <>
                    <button className='justify-content-end buttonradious' onClick={handelclose}>X</button><VariableConfigurationForm/>
                    </>
                </Modal.Body>                 
            </Modal>             
        </div> 

        <table className=' table table-striped ' >
            <thead >
                <tr className='tableheadcolor '>
                    <th className='p-2'>VariableName</th>
                    <th className='p-2'> Description</th>
                    <th className='p-2'>Value</th>
                   
                </tr>
          
            {
                data.map((item,id)=>{
                    return(
                        <tr key={id} className="text font">
                            <td>{item.variableName}</td>
                            <td>{item.description}</td>
                            <td>{item.value}</td>
                            
                            <td><span onClick={()=>handeldelete(item.id)}><BsTrash3/></span></td>
                        </tr>
                    )
                })
            }   
            </thead>
        </table>
    </div>
  )
}

export default VariableConfiguration;