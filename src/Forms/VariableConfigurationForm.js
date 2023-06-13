import React, { useState } from 'react'

const VariableConfigurationForm = () => {
    const [data,setData]=useState({
        variableName:'',
        description:'',
        value:''
    })

    const{variableName,description,value}=data

    const handelchange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handelSubmit=e=>{
        e.preventDefault();

    }

  return (
    <div className=' row '>
        <strong><center>Variable Configuration</center></strong>
        <div className=''>
            <form className='formtransparent formtext form-control' onSubmit={handelSubmit}>
                <div className='m-2'>
                    <div><label><strong>VariableName:</strong></label></div>
                    <input type='text'  className='form-control' placeholder='variableName' name='variableName' value={variableName} onChange={handelchange}/>
                </div>
                <div className='m-2'>
                    <div><label><strong>Description:</strong></label></div>
                    <input type='text'  className='form-control' placeholder='Description' name='description' value={description} onChange={handelchange}/>
                </div>
                <div className='m-2'>
                   <div> <label><strong>Value:</strong></label></div>
                    <input type='text' className='form-control' placeholder='Value' name='value' value={value} onChange={handelchange}/>
                </div>
                <div className='row mt-2 justify-content-center'>
                    <div className='  col-5'>
                        <button type='submit'  className='btn btn-primary form-control' >Submit</button>
                    </div>                
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default VariableConfigurationForm