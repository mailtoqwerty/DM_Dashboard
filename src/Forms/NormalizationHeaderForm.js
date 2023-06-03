import React, { useState } from 'react'

const NormalizationHeaderForm = () => {
    const[data,setData]=useState();

    const handelChange=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handelSubmit=e=>{
       e.preventDefault();
    }

  return (
    <div className='row'>
        <center><h4 className='heading'>NormalizationConfigurationHeader</h4></center>    
        <div  className="mt-2">

        <form className='formtransparent form-control formtext' onSubmit={handelSubmit}>
          <div>
           <div> <label>FileName</label></div>
            <input className='form-control' type='text' placeholder='fileName' onChange={handelChange}/>
          </div>
          <div>
            <div><label>Table</label></div>
            <input className='form-control' type='text' placeholder='table' onChange={handelChange} />
          </div>
          <div>
            <div><label>Sequence</label></div>
            <input className='form-control' type='text' placeholder='table' onChange={handelChange} />
          </div>
          <div className='row mt-1 justify-content-center'>    
           <div className=' mt-5 col-4 ' >
              <button className='btn btn-primary form-control' >Submit</button>

            </div>      
          </div>
        </form> 
    </div>
    </div>
  )
}

export default NormalizationHeaderForm