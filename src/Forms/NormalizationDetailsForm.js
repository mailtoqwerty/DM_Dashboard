import React from 'react'

const NormalizationDetailsForm = () => {
  return (
    <div className='row'>
        <center><strong className='heading'>Normalization Configuration Details</strong></center>    

       <div  className="mt-2">
       <form className='formtransparent  '>
            <div className='formtext'>
            <div>   
                <div> <label><strong className='tableheadcolor'>FileId:</strong></label></div>           
                <input className='form-control' type='text' placeholder='FileId'/>                
            </div>
            <div>
                <div><label><strong className='tableheadcolor'>FieldName:</strong></label></div>
                <input className='form-control' type='text' placeholder='FieldName'/>                
            </div>
            <div>
                <div><label><strong className='tableheadcolor'>TableName:</strong></label></div>
                <input className='form-control' type='text' placeholder='TableName'/>                
            </div>
            <div>
                <div><label><strong className='tableheadcolor'>ColumnName:</strong></label></div>
                <input  className='form-control' type='text' placeholder='ColumnName'/>                
            </div>
            <div  className='row mt-1 justify-content-center'>
              <div  className=' m-3 col-4 '>
                <button className='btn btn-primary form-control' >Submit</button>
              </div>              
            </div>
            </div>
        </form>
       </div>
    </div>  
  )
}

export default NormalizationDetailsForm