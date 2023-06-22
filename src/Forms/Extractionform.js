// import React,{ useEffect, useState} from 'react'
// import '../App.css'
// import axios from 'axios'
// // import Extraction from '../Tables/Extraction'

// const Extractionform = () => {
  
 
//     const [inputValues, setInputValues] = useState({
//       fileId:'', 
//       fileName:'',
//       noOfFields:'',
//       typeofFile:'',
//       delimiter:'',
//       sequence:'',
//       predecessor:'',
//       normalizationConfiguration:'',
//       programName:''  
//     });

//     const{fileId,fileName,noOfFields,typeofFile,delimiter,sequence,predecessor,normalizationConfiguration,programName}=inputValues

//     const handleInputChange = (e) => {
      
//       setInputValues({...inputValues,[e.target.name]:e.target.value})
//       console.log(inputValues)

//     };
    
    
//     const handleSubmit =(e) => {
//       console.log(e)

//       e.preventDefault();
    
//     const data = {
//       fileId: fileId,
//       fileName: fileName,
//       noOfFields: noOfFields,
//       typeofFile: typeofFile,
//       delimiter: delimiter,
//       sequence:sequence,
//       predecessor:predecessor,
//       normalizationConfiguration:normalizationConfiguration,
//       programName:programName
 
//     };   
//       axios.post('http://localhost:5241/api/ExtractionConfiguration',data)
//       .then(res=>{setInputValues(res.data)})
//       .catch(err=>{console.log(err)})        
//     };     

//   return (
//     <div className='row'>   
//     <center><strong className='heading'>Extraction Configuration</strong></center>    
//       <div className="mt-2">
//         <form className='form-control ' onSubmit={handleSubmit}>  
//             <div className='formtext'>
//               <div className=' mt-2 ' >
//                 <div className='col'>
//                     <div><label><strong>FileId:</strong></label></div>
//                     <input className='form-control' type={'text'} placeholder='FileId'name='fileId' value={fileId} onChange={handleInputChange}/>     
//                 </div>
                
//                 <div className='col ' >
//                 <div><label><strong>FileName:</strong></label></div>
//                   <input className='form-control' type={'text'} placeholder='FileName'name='fileName' value={fileName} onChange={handleInputChange}/>
//                 </div>         

//                 <div className='col'>
//                 <div><label><strong>Num_Of_Fields:</strong></label></div>
//                   <input className='form-control' type={'text'} placeholder='Num_Of_Fields' name='noOfFields' value={noOfFields} onChange={handleInputChange}/>        
//                 </div>
//              </div>             
            
//            <div className='row mt-2 col'>
//             <div className='col'>
//               <div><label><strong>Type_Of_File:</strong></label></div>
//               <input className='form-control' type={'text'} placeholder='typeofFile' name='typeofFile' value={typeofFile}  onChange={handleInputChange}/>
//             </div>  

//             <div className='col'>
//               <div><label><strong>Delimiter:</strong></label></div>
//               <input className='form-control' type={'text'} placeholder='Delimiter' name='delimiter' value={delimiter} onChange={handleInputChange}/>
//             </div>  

//             <div className='col'>
//               <div><label><strong>SequenceOrder:</strong></label></div>
//               <input className='form-control' type={'number'} placeholder='sequence' name='sequence' value={sequence}  onChange={handleInputChange}/>
//             </div>  
             
//            </div>         
           
//             <div className='row mt-2'>
//               <div className='col'>
//               <div><label><strong>Predecessor:</strong></label></div>
//               <input className='form-control' type={'text'} placeholder='Predecessor' name='predecessor' value={predecessor} onChange={handleInputChange}/>

//               </div>
//               <div className=''>                 
//                 <div><label><strong>Normalization:</strong></label></div>
//                 <input className='form-control' type={'text'}placeholder='normalizationConfiguration' name='normalizationConfiguration' value={normalizationConfiguration}  onChange={handleInputChange}/>   
//               </div>
//               <div className='col'>
//               <div><label><strong>ProgramName:</strong></label></div>
//                 <input className='form-control' type={'text'} placeholder='ProgramName' name='programName' value={programName} onChange={handleInputChange}/>     
//              </div>
//            </div>    

//             <div className='row m-3 justify-content-center'>
//               <div>
//                 <button type='submit' className='btn btn-primary form-control'>Submit</button>
//               </div>
//             </div>
//            </div>
       
//         </form>   
//       </div>               
//     </div>
//   )
// }
// export default Extractionform


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Extractionform = () => {
  const [inputValues, setInputValues] = useState({
    fileId: '',
    fileName: '',
    noOfFields: '',
    typeofFile: '',
    delimiter: '',
    sequence: '',
    predecessor: '',
    normalizationConfiguration: '',
    programName: '',
  });

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      fileId: inputValues.fileId,
      fileName: inputValues.fileName,
      noOfFields: inputValues.noOfFields,
      typeofFile: inputValues.typeofFile,
      delimiter: inputValues.delimiter,
      sequence: inputValues.sequence,
      predecessor: inputValues.predecessor,
      normalizationConfiguration: inputValues.normalizationConfiguration,
      programName: inputValues.programName,
    };

    axios
      .post('http://localhost:5241/api/ExtractionConfiguration', data)
      .then((res) => {
        console.log(res.data);
        setInputValues({
          fileId: '',
          fileName: '',
          noOfFields: '',
          typeofFile: '',
          delimiter: '',
          sequence: '',
          predecessor: '',
          normalizationConfiguration: '',
          programName: '',
        });
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  return (
    <div className='row'>
      <center>
        <strong className='heading'>Extraction Configuration</strong>
      </center>
      <div className=''>
        <form className='' onSubmit={handleSubmit}>
          <div className='formtext'>
            <div className='row col mt-2'>
              <div className='col'>
                <div>
                  <label>
                    <strong className='tableheadcolor'>FileId:</strong>
                  </label>
                </div>
                <input
                  className='form-control tableheadcolor'
                  type='text'
                  placeholder='FileId'
                  name='fileId'
                  value={inputValues.fileId}
                  onChange={handleInputChange}
                />
              </div>

              <div className='col'>
                <div>
                  <label>
                    <strong className='tableheadcolor'>FileName:</strong>
                  </label>
                </div>
                <input
                  className='form-control'
                  type='text'
                  placeholder='FileName'
                  name='fileName'
                  value={inputValues.fileName}
                  onChange={handleInputChange}
                />
              </div>

              <div className='col'>
                <div>
                  <label>
                    <strong className='tableheadcolor' >Num_Of_Fields:</strong>
                  </label>
                </div>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Num_Of_Fields'
                  name='noOfFields'
                  value={inputValues.noOfFields}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className='row mt-2 col'>
              <div className='col'>
                <div>
                  <label>
                    <strong className='tableheadcolor'>Type_Of_File:</strong>
                  </label>
                </div>
                <input
                  className='form-control'
                  type='text'
                  placeholder='TypeOfFile'
                  name='typeofFile'
                  value={inputValues.typeofFile}
                  onChange={handleInputChange}
                />
              </div>

              <div className='col'>
                <div>
                  <label>
                    <strong className='tableheadcolor'>Delimiter:</strong>
                  </label>
                </div>
                <input
                  className='form-control inputcolor'
                  type='text'
                  placeholder='Delimiter'
                  name='delimiter'
                  value={inputValues.delimiter}
                  onChange={handleInputChange}
                />
              </div>

              <div className='col'>
                <div>
                  <label>
                    <strong className='tableheadcolor'>SequenceOrder:</strong>
                  </label>
                </div>
                <input
                  className='form-control'
                  type='number'
                  placeholder='sequence'
                  name='sequence'
                  value={inputValues.sequence}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className='row mt-2'>
              <div className='col'>
                <div>
                  <label>
                    <strong className='tableheadcolor'>Predecessor:</strong>
                  </label>
                </div>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Predecessor'
                  name='predecessor'
                  value={inputValues.predecessor}
                  onChange={handleInputChange}
                />
              </div>
              <div className=''>
                <div>
                  <label>
                    <strong className='tableheadcolor'>Normalization:</strong>
                  </label>
                </div>
                <input
                  className='form-control'
                  type='text'
                  placeholder='normalizationConfiguration'
                  name='normalizationConfiguration'
                  value={inputValues.normalizationConfiguration}
                  onChange={handleInputChange}
                />
              </div>
              <div className='col'>
                <div>
                  <label>
                    <strong className='tableheadcolor'>ProgramName:</strong>
                  </label>
                </div>
                <input
                  className='form-control'
                  type='text'
                  placeholder='ProgramName'
                  name='programName'
                  value={inputValues.programName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className='row  p-3 justify-content-center'>
              <div className='col-4'>
                <button type='submit' className='btn btn-primary form-control '>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Extractionform;
