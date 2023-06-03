import React, { useState } from 'react'
// import ConfigValidation from '../Tables/ConfigValidation';
import axios from 'axios';

const Validationform = () => {
    const[inputvalidation,setInputValidation]=useState({
        batchId:'',
        field:'',
        width:'',
        dataType:'',
        precision:'',
        mandatory:'',
        defaultValidation:'',
    });

    const{batchId,field,width,dataType,precision,mandatory,defaultValidation}=inputvalidation

    const handler=e=>{
        setInputValidation({...inputvalidation,[e.target.name]:e.target.value})
    }

    const submithandler=e=>{
        e.preventDefault();
        
        const data={
            batchId:batchId,
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
    <h2><center className='heading'>Validation Configuration</center></h2>  
        <div className="mt-2">
            <form className='formtransparent formtext form-control' onSubmit={submithandler}>
                <div className='row mt-2' > 
                    <div>
                    <div><label><strong>BatchID:</strong></label></div>
                    <input className='form-control' type={'text'} placeholder='BatchId' name='batchId' value={batchId} onChange={handler}/>
                    </div>
                </div>
                
                <div className=' mt-2'>
                    <div><label><strong>Field:</strong></label></div>
                    <input className='form-control' type={'text'} placeholder='Field'  name='field' value={field} onChange={handler} />  
                </div>    

                <div className='row mt-2'>
                    <div className=''>
                    <div><label><strong>Width:</strong></label></div>
                        <input className='form-control' type={'text'} placeholder='Width' name='width' value={width} onChange={handler}/>
                    </div>  
                    <div className=' mt-2'>
                    <div><label><strong>DataType:</strong></label></div>
                        <input className='form-control' type={'text'} placeholder='DataType' name='dataType' value={dataType} onChange={handler}/>
                    </div>             
                </div>    
                <div className='row mt-2'>
                    <div className='col'>
                    <div><label><strong>Precision:</strong></label></div>
                        <input className='form-control' type={'text'} placeholder='Precision' name='precision' value={precision} onChange={handler}/>
                    </div>
                    <div className='col'>
                    <div><label><strong>Mandatory:</strong></label></div>
                        <input className='form-control' type={'text'} placeholder='Mandatory' name='mandatory' value={mandatory} onChange={handler}/>
                    </div>                            
                </div>  
                <div className='col mt-2'>
                <div><label><strong>Default_Validation:</strong></label></div>
                    <input className='form-control' type={'text'} placeholder='Default_Validation' name='defaultValidation' value={defaultValidation}  onChange={handler}/>
                </div>   
                <div className='row mt-2 justify-content-center'>
                    <div className='  col-5'>
                        <button type='submit'  className='btn btn-primary form-control' >Submit</button>
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