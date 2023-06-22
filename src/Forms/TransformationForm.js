import React,{useState} from 'react'
import axios from 'axios';
// import TransfConfiguration from '../Tables/TransfConfiguration'

const TransformationForm = () => {
    const [data,setData]=useState({
        fileId:'',
        fieldName:'',
        source:'',
        destination:'',
        derivationFunction:'',
        transfType:''
    })
  
    const{fileId,fieldName,source,destination,derivationFunction,transfType}=data;

    const handler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submithandler=async (e)=>{
        e.preventDefault();  
        
      const data={
        fileId:fileId,
        fieldName:fieldName,
        source:source,
        destination:destination,
        derivationFunction:derivationFunction,
        transfType:transfType
      }
        
        axios.post('http://192.168.29.128/api/ConfigTransformations',data)
        .then(res=>{setData(res.data)})
        .catch(err=>{console.log(err)})     

  
    }
 
  return ( 
    <div className='row    '>      
    <center><strong className='heading'>Transformation Configuration</strong></center>
        <div className="" >            
            <form className='formtransparent  ' onSubmit={submithandler}>       
                <div className='row formtext '>                    
                    <div className='mt-2'>
                    <div><label><strong className='tableheadcolor'>FileId:</strong></label></div>
                        <input className='form-control' type={'text'} placeholder='FileId' name='fileId' value={fileId}  onChange={handler} />
                    </div>
                    <div className='mt-2'>
                    <div><label><strong className='tableheadcolor'>FieldName:</strong></label></div>
                        <input className='form-control' type={'text'} placeholder='FieldName' name='fieldName' value={fieldName} onChange={handler} />
                    </div>
                    <div className='mt-2'>
                    <div><label><strong className='tableheadcolor'>Source_Value:</strong></label></div>
                        <input className='form-control' type={'text'} placeholder='Source_Value' name='source' value={source} onChange={handler}/>
                    </div>
                    <div className='mt-2'>
                    <div><label><strong className='tableheadcolor'>Destination_Value:</strong></label></div>
                        <input  className='form-control' type={'text'} placeholder='Destination_Value' name='destination' value={destination} onChange={handler}/>
                    </div>
                    <div className='mt-2'>
                    <div><label><strong className='tableheadcolor'>Derivation_Function:</strong></label></div>
                        <input  className='form-control' type={'text'} placeholder='Derivation_Function' name='derivationFunction' value={derivationFunction} onChange={handler}/>
                    </div>
                    <div className='mt-2'>
                    <div><label><strong className='tableheadcolor'>Transformation_Type:</strong></label></div>
                        <input  className='form-control' type={'text'} placeholder='Transformation_Type' name='transfType' value={transfType} onChange={handler}/>
                    </div>
                </div>
                
                <div className='row mt-2 justify-content-center'>
                    <div className=' col-4 '>
                        <button type='submit'  className='btn btn-primary form-control mt-3'>Submit</button>
                    </div>
                </div>
            </form>     
        </div>
        <div className="col ">
            <div className='table'>
                {/* <TransfConfiguration/> */}
            </div>            
        </div>       
    </div>    
  )
}

export default TransformationForm;