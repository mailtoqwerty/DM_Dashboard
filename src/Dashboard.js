import React,{useState,useEffect} from 'react'
import axios from 'axios'
import TotalRecords from './Records/TotalRecords';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [batch, setBatch] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5241/api/ExtractionConfiguration').then((response) => {
      setData(response.data);
    });    
  }, []);

  return (
    <div className='margin'>
      <div className="d-flex dashboard">
        <div className="card width m-2" >
          <div className="card-body">
            <h5 className="card-title"> Validation Exceptions</h5>
            <h6 className="card-subtitle mb-2 text-muted">BAT001</h6>
            <p className="card-text">Total Validations Exceptions Occured In{data.map((item,id)=><h5 key={id}>{item.batchId}</h5>)}</p>
            <a href=" " className="card-link">Validations</a>
            <a href="#" className="card-link"></a>
          </div>     
        </div> 

        <div class="card width m-2" >
          <div class="card-body">
            <h5 class="card-title"> Transformation Exceptions</h5>
            <h6 class="card-subtitle mb-2 text-muted">BAT001</h6>
            <p class="card-text">Total Transformations Exceptions Occured In</p>
            <a href="" class="card-link">Transformations</a>
            <a href="#" class="card-link"></a>
          </div>     
        </div>

        <div class="card width m-2" >
          <div class="card-body">
            <h5 class="card-title">Total Exceptions</h5>
            <h6 class="card-subtitle mb-2 text-muted">BAT001</h6>
            <p class="card-text">Total Exceptions Occured In Batch 1{}</p>
            <a href="totalexceptions" class="card-link">Exceptions</a>
            <a href="#" class="card-link"></a>
          </div>     
        </div>

        <div class="card width m-2" >
          <div class="card-body">
            <h5 class="card-title">Exceptions</h5>
            <h6 class="card-subtitle mb-2 text-muted">BAT001</h6>
            <p class="card-text">Total Exceptions Occured In Batch 1{}</p>
            <a href="exceptions" class="card-link">Exceptions</a>
            <a href="#" class="card-link"></a>
          </div>     
        </div>
      </div>
     
    </div>
  )
}

export default Dashboard;