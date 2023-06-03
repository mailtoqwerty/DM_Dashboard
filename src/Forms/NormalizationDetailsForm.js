import React from 'react'

const NormalizationDetailsForm = () => {
  return (
    <div className='row'>
        <center><h4 className='heading'>Normalization Configuration Details</h4></center>    

       <div  className="mt-2">
       <form className='formtransparent form-control formtext'>
            <div>   
                <div> <label>FileName:</label></div>           
                <input className='form-control' type='text' placeholder='FileName'/>                
            </div>
            <div>
                <div><label>FieldName:</label></div>
                <input className='form-control' type='text' placeholder='FieldName'/>                
            </div>
            <div>
                <div><label>Table:</label></div>
                <input className='form-control' type='text' placeholder='Table'/>                
            </div>
            <div>
                <div><label>Column:</label></div>
                <input  className='form-control' type='text' placeholder='Column'/>                
            </div>
            <div  className='row mt-1 justify-content-center'>
              <div  className=' m-3 col-4 '>
                <button className='btn btn-primary form-control' >Submit</button>
              </div>              
            </div>
        </form>
       </div>
    </div>  
  )
}

export default NormalizationDetailsForm