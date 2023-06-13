import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Landingpage from './Landingpage';
import ExtractionConfiguration from './Configurations/ExtractionConfiguration';
import ValidationConfiguration from './Configurations/ValidationConfiguration';
import TransformationConfiguration from './Configurations/TransformationConfiguration';
import VariableConfiguration from './Configurations/VariableConfiguration';
import NormalizationConfigurationHeader from './Configurations/NormalizationConfigurationHeader';
import NormalizationConfigurationDetails from './Configurations/NormalizationConfigurationDetails';
import BatchStatusSummary from './BatchStatusSummary';
import Exceptions from './Exceptions/Exceptions';
import Dashboard from './Dashboard';
import TotalRecords from './Records/TotalRecords';
// import TotalExceptions from './Exceptions/TotalExceptions';
import Extractionform from './Forms/Extractionform';
import SuccesfullRecords from './Records/SuccesfullRecords';
import ValidationExceptions from './Exceptions/ValidationExceptions';
import TransformationException from './Exceptions/TransformationExceptions';
import NormalizationException from './Exceptions/NormalizationException';
import ExtractionExceptions from './Exceptions/ExtractionExceptions';

const App = () => {
  return (
    <div className='container-fluid' > 
    
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Landingpage/>}>     
          <Route path='extraction' element={<ExtractionConfiguration/>}/>
          <Route path='validation' element={<ValidationConfiguration/>}/>
          <Route path='transformation' element={<TransformationConfiguration/>}/>
          <Route path='variable' element={<VariableConfiguration/>}/>
          <Route path='normalizationheader' element={<NormalizationConfigurationHeader/>}/>
          <Route path='normalizationdetails' element={<NormalizationConfigurationDetails/>}/>
          <Route path='batchstatus' element={<BatchStatusSummary/>}/>
          <Route path={'exceptions/:fileId/:procesStage/:runId'} element={<Exceptions/>}/>
          <Route path='/' element={<Dashboard/>}/>         
          <Route path="/totalrecords/:fileId/:procesStage"  element={<TotalRecords />} />
          {/* <Route path='totalexceptions' element={<TotalExceptions/>}/> */}
          <Route path='exceptionform' element={<Extractionform/>}/>
          <Route path='succefullrecords/:fileId/:procesStage' element={<SuccesfullRecords/>}/>
          <Route path='validatrionExceptions' element={<ValidationExceptions/>}/>
          <Route path='transformationExceptions' element={<TransformationException/>}/>
          <Route path='normalizationexception' element={<NormalizationException/>}/>
          <Route path='extractionExceptions' element={<ExtractionExceptions/>}/>
        </Route>       
      </Routes>
    </BrowserRouter >     
  </div>
  );
};

export default App;
