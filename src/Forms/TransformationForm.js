import React,{useState} from 'react'
import axios from 'axios';
// import TransfConfiguration from '../Tables/TransfConfiguration'

const TransformationForm = () => {
    const [data,setData]=useState({
        fileName:'',
        fieldName:'',
        source:'',
        destination:'',
        derivationFunction:'',
        transfType:''
    })
  
    const{fileName,fieldName,source,destination,derivationFunction,transfType}=data;

    const handler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submithandler=async (e)=>{
        e.preventDefault();  
        
      const data={
        fileName:fileName,
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
    <center><h2 className='heading'>Transformation Configuration</h2></center>
        <div className="" >            
            <form className='formtransparent formtext form-control' onSubmit={submithandler}>       
                <div className='row mt-2'>                    
                    <div className='mt-2'>
                    <div><label><strong>FileName:</strong></label></div>
                        <input className='form-control' type={'text'} placeholder='FileName' name='fileName' value={fileName}  onChange={handler} />
                    </div>
                    <div className='mt-2'>
                    <div><label><strong>Field:</strong></label></div>
                        <input className='form-control' type={'text'} placeholder='Field' name='fieldName' value={fieldName} onChange={handler} />
                    </div>
                    <div className='mt-2'>
                    <div><label><strong>Source:</strong></label></div>
                        <input className='form-control' type={'text'} placeholder='Source' name='source' value={source} onChange={handler}/>
                    </div>
                    <div className='mt-2'>
                    <div><label><strong>Destination:</strong></label></div>
                        <input  className='form-control' type={'text'} placeholder='Desination' name='destination' value={destination} onChange={handler}/>
                    </div>
                    <div className='mt-2'>
                    <div><label><strong>Derivation_Function:</strong></label></div>
                        <input  className='form-control' type={'text'} placeholder='Derivation_Function' name='derivationFunction' value={derivationFunction} onChange={handler}/>
                    </div>
                    <div className='mt-2'>
                    <div><label><strong>Transf_Type:</strong></label></div>
                        <input  className='form-control' type={'text'} placeholder='Transf_Type' name='transfType' value={transfType} onChange={handler}/>
                    </div>
                </div>
                
                <div className='row m-5 justify-content-center'>
                    <div className='  '>
                        <button type='submit'  className='btn btn-primary form-control'>Submit</button>
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