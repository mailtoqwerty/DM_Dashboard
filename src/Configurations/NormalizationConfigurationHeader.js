

import React,{useState} from 'react'
import '../App.css'
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import NormalizationConfigurationDetails from './NormalizationConfigurationDetails';
import NormalizationHeaderForm from '../Forms/NormalizationHeaderForm';


const NormalizationConfigurationHeader = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handelclose=()=>setShow(false);
  return (
    <div className=' margin'>
    <div className='d-flex addbutton '>
        <h4 className='heading'>Normalization Configuration Header :</h4>
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
                <th className='p-2'>FileName</th>
                <th className='p-2'>Table</th>
                <th className='p-2'>Sequence</th>
                <th className='p-2'>Dependancy</th>
            </tr>
            {/* {
                data.map((item,id)=>{
                    return(
                        <tr className="text font">
                            <td>{item.fileName}</td>
                            <td>{item.fieldName}</td>
                            <td>{item.tableName}</td>
                            <ttd>{item.columnName}</ttd>
                        </tr>
                    )
                })
            } */}
           </thead>
        </table>
      
</div>
  )
}

export default NormalizationConfigurationHeader