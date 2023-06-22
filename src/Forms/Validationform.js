import React, { useState } from 'react'
// import ConfigValidation from '../Tables/ConfigValidation';
import axios from 'axios';

const Validationform = () => {
    const[inputvalidation,setInputValidation]=useState({
        fileId:'',
        field:'',
        width:'',
        dataType:'',
        precision:'',
        mandatory:'',
        defaultValidation:'',
    });

    const{fileId,field,width,dataType,precision,mandatory,defaultValidation}=inputvalidation

    const handler=e=>{
        setInputValidation({...inputvalidation,[e.target.name]:e.target.value})
    }

    const submithandler=e=>{
        e.preventDefault();
        
        const data={
            fileId:fileId,
            field:field,
            width:width,
            dataType:dataType,
            precision:precision,
            mandatory:mandatory,
            defaultValidation:defaultValidation
        };

        axios.post('http://192.168.29.128/api/ConfigValidations', data)
        .then(response => {setInputValidation(response.data)})
        .catch(error => {console.error(error)}); 
 
      
    };
  return (   
    <div className='row' >     
        <strong><center className='heading'>Validation Configuration</center></strong>  
        <div className="mt-2">
            <form className='formtransparent  ' onSubmit={submithandler}>
             <div className='formtext'>
                <div className='row col '>
                    <div className='col mt-2' > 
                        <label><strong className='tableheadcolor'>FileId:</strong></label>
                        <input className='form-control' type={'text'} placeholder='fileId' name='fileId' value={fileId} onChange={handler}/>
                    </div>
                    
                    <div className='col mt-2'>
                        <label><strong className='tableheadcolor'>FieldName:</strong></label>
                        <input className='form-control' type={'text'} placeholder='FieldName'  name='field' value={field} onChange={handler} />  
                    </div> 

                    <div className='col mt-2'>
                        <label><strong className='tableheadcolor'>Width:</strong></label>
                        <input className='form-control' type={'text'} placeholder='Width' name='width' value={width} onChange={handler}/>
                    </div>
                </div>
                <div className='row col'>
                    <div className='col mt-2'>
                        <div><label><strong className='tableheadcolor'>DataType:</strong></label></div>
                        <input className='form-control' type={'text'} placeholder='DataType' name='dataType' value={dataType} onChange={handler}/>
                    </div>  
                                        
                    <div className='col mt-2'>
                        <label><strong className='tableheadcolor'>Precision:</strong></label>
                        <input className='form-control' type={'text'} placeholder='Precision' name='precision' value={precision} onChange={handler}/>
                    </div>

                    <div className='col mt-2'>
                        <label><strong className='tableheadcolor'>Mandatory:</strong></label>                
                        <input className = "form-control" type={'text'} placeholder='Mandatory' name='mandatory' value={mandatory} onChange={handler}/>
                    </div>
                </div>
                                       
             
                <div className='col mt-2'>
                    <div><label><strong className='tableheadcolor'>Default_Value:</strong></label></div>
                        <input className='form-control' type={'text'} placeholder='Default_Validation' name='defaultValidation' value={defaultValidation}  onChange={handler}/>
                    </div>   
                <div className='row  justify-content-center'>
                    <div className='col-5 mt-4'>
                        <button type='submit'  className='btn btn-primary form-control'>Submit</button>
                    </div>                
                </div>
             </div>            
            </form>              
        </div>  
        <div className="col"> 
             {/* <ConfigValidation/>       */}
        </div>       
    </div>    
  )
}

export default Validationform