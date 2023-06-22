import React, { useState } from 'react'

const NormalizationHeaderForm = () => {
    const[data,setData]=useState({
      fileId:'',
      tablename:'',
      sequence:'',
      dependency:''

       
    });
    const{fileid,tablename,sequence,dpendency}=data

    const handelChange=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handelSubmit=e=>{
       e.preventDefault();

       const data={fileid,tablename,sequence,dpendency}
 }
    

  return (
    <div className='row '>
        <center><strong className='heading'>NormalizationConfigurationHeader</strong></center>    
        <div  className="mt-2">

        <form className='  formtext' onSubmit={handelSubmit}>
          <div>
           <div> <strong className='tableheadcolor'><label>FileId</label></strong></div>
            <input className='form-control' type='text' placeholder='fileId' onChange={handelChange}/>
          </div>
          <div>
            <div><strong className='tableheadcolor'><label>Table Name</label></strong></div>
            <input className='form-control' type='text' placeholder='tablename' onChange={handelChange} />
          </div>
          <div>
            <div><label><strong className='tableheadcolor'>Sequence</strong></label></div>
            <input className='form-control' type='text' placeholder='sequence' onChange={handelChange} />
          </div>
          <div>
            <div><label><strong className='tableheadcolor'>Dependency</strong></label></div>
            <input className='form-control' type='text' placeholder='dependency' onChange={handelChange} />
          </div>
          <div className='row  justify-content-center'>    
           <div className=' mt-2 col-5 ' >
              <button className='btn btn-primary form-control mt-3' >Submit</button>

            </div>      
          </div>
        </form> 
    </div>
    </div>
  )
}

export default NormalizationHeaderForm