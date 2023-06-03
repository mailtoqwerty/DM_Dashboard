import React, { useState } from 'react'

const VariableConfigurationForm = () => {
    const [data,setData]=useState({
        variableName:'',
        filename:'',
        filePath:''
    })

    const{variableName,fileName,filePath}=data

    const handelchange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handelSubmit=e=>{
        e.preventDefault();

    }

  return (
    <div className=' row '>
        <h2><center>Variable Configuration</center></h2>
        <div className=''>
            <form className='formtransparent formtext form-control' onSubmit={handelSubmit}>
                <div className='m-2'>
                    <div><label><strong>VariableName:</strong></label></div>
                    <input type='text'  className='form-control' placeholder='variableName' name='variableName' value={variableName} onChange={handelchange}/>
                </div>
                <div className='m-2'>
                    <div><label><strong>FileName:</strong></label></div>
                    <input type='text'  className='form-control' placeholder='FileName' name='fileName' value={fileName} onChange={handelchange}/>
                </div>
                <div className='m-2'>
                   <div> <label><strong>FilePath:</strong></label></div>
                    <input type='text' className='form-control' placeholder='FilePath' name='filePath' value={filePath} onChange={handelchange}/>
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