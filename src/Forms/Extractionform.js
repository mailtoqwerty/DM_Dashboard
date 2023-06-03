import React,{ useState} from 'react'
import '../App.css'
import axios from 'axios'
// import Extraction from '../Tables/Extraction'

const Extractionform = () => {
  
 
    const [inputValues, setInputValues] = useState({
      batchId:'', 
      fileName:'',
      noOfFields:'',
      typeofFile:'',
      delimiter:'',
      sequence:'',
      predecessor:'',
      normalizationConfiguration:'',
      programName:''
    });

    const{batchId,fileName,noOfFields,typeofFile,delimiter,sequence,predecessor,normalizationConfiguration,programName}=inputValues

    const handleInputChange = (e) => {
      
      setInputValues({...inputValues,[e.target.name]:e.target.value})
      console.log(inputValues)

    };
    
    
    const handleSubmit =(e) => {
      console.log(e)

      e.preventDefault();
    
    const data = {
      batchId: batchId,
      fileName: fileName,
      noOfFields: noOfFields,
      typeofFile: typeofFile,
      delimiter: delimiter,
      sequence:sequence,
      predecessor:predecessor,
      normalizationConfiguration:normalizationConfiguration,
      programName:programName
 
    };  
    console.log("DATA***************"+data)
      
    
        
    axios.post('http://localhost:5241/api/ExtractionConfiguration',data)
        .then(res=>{setInputValues(res.data)})
        .catch(err=>{console.log(err)})  
        
    };   
   

  return (
    <div className='row'>   
    <center><h4 className='heading'>Extraction Configuration</h4></center>    
      <div className="mt-2">
        <form className='formtransparent form-control formtext' onSubmit={handleSubmit}>  
          
            <div className=' mt-2 ' >
             <div className='col'>
                <div><label><strong>BatchID:</strong></label></div>
                <input className='form-control' type={'text'} placeholder='BatchId'name='batchId' value={batchId} onChange={handleInputChange}/>     

              </div>
              <div className='col ' >
              <div><label><strong>FileName:</strong></label></div>
                <input className='form-control' type={'text'} placeholder='FileName'name='fileName' value={fileName} onChange={handleInputChange}/>
              </div>         

            <div className='col'>
            <div><label><strong>Num_Of_Fields:</strong></label></div>
              <input className='form-control' type={'text'} placeholder='Num_Of_Fields' name='noOfFields' value={noOfFields} onChange={handleInputChange}/>        
            </div>

             </div>             
            
           <div className=' mt-2'>
           <div className='col'>
              <div><label><strong>Type_Of_File:</strong></label></div>
              <input className='form-control' type={'text'} placeholder='typeofFile' name='typeofFile' value={typeofFile}  onChange={handleInputChange}/>
            </div>  

            <div className='col'>
              <div><label><strong>Delimiter:</strong></label></div>
              <input className='form-control' type={'text'} placeholder='Delimiter' name='delimiter' value={delimiter} onChange={handleInputChange}/>
            </div>  

            <div className='col'>
              <div><label><strong>Sequence:</strong></label></div>
              <input className='form-control' type={'text'} placeholder='sequence' name='sequence' value={sequence}  onChange={handleInputChange}/>
            </div>  
           </div>         
           
            <div className='row mt-2'>
              <div className='col'>
              <div><label><strong>Predecessor:</strong></label></div>
              <input className='form-control' type={'text'} placeholder='Predecessor' name='predecessor' value={predecessor} onChange={handleInputChange}/>

              </div>
              <div className=''>                 
                <div><label><strong>Normalization:</strong></label></div>
                <input className='form-control' type={'text'}placeholder='normalizationConfiguration' name='normalizationConfiguration' value={normalizationConfiguration}  onChange={handleInputChange}/>   
              </div>
              <div className='col'>
              <div><label><strong>ProgramName:</strong></label></div>
                <input className='form-control' type={'text'} placeholder='ProgramName' name='programName' value={programName} onChange={handleInputChange}/>     
             </div>
           </div>    

            <div className='row m-3 justify-content-center'>
              <div>
                <button type='submit' className='btn btn-primary form-control'>Submit</button>
              </div>
            </div>
       
        </form>   
      </div>               
    </div>
  )
}
export default Extractionform
