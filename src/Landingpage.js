import React from 'react'
import { Outlet } from "react-router-dom";
import './App.css';
import { Navbar,Nav,NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import TopNavbar from './Navbar/TopNavbar';

// import { IoIosNotificationsOutline } from "react-icons/io";
// import { AiOutlineSetting ,AiOutlineUsergroupAdd,AiOutlineFileAdd,AiOutlineOrderedList,AiOutlineException} from "react-icons/ai";
// import { RxDashboard } from "react-icons/rx";
// import { FcSearch } from "react-icons/fc";
import Techoptima from './techoptima.png';
import notification from './notification.png'
import profile from "./profile.png"
import file from "./file.png"
import menu from "./menu.png"
import settings from "./setting.png"
import config from "./config.png"
import dashboard from "./dashboard.png"
import search from "./search.png"
import Data from "./data.png"

const Landingpage = () => {

  return (
    <div className=''>  
    <div className=''>
    <div className='fixed-top'>
           
            <Nav className="top-navbar">         
                <h6 className = "systemname d-flex mt-3">
                    <img src={Data} alt='data icon ' className='dataicon   '/><strong className='' >
                        <div className=''>
                        <span className='dmcolor' >DM</span>Workbench
                        </div>
                    </strong>
                </h6>

                <div className="search-icon">
                    <input type="text" placeholder="Search..." className=' searchbarwidth ' />
                    <button type="submit"  className="search-button">  <img src={search} alt='Techoptima Logo' width={"15px"}/> </button>                        
                </div>
                
                <div className="search-bar">                                          
                    <div  className='d-flex'>
                        <button type="button" className=" text-dark notification " >
                             <img src={notification} alt='Techoptima Logo'/> <div style={{"fontSize" : '10px' }} >Notifications</div> <span className="badge">2</span>
                        </button>
                        <button type="button" className=" text-dark " >
                            <img src={settings} alt='Techoptima Logo'/> <div style={{"fontSize" : '10px' }} >setting</div>
                        </button>
                        <button type="button" className=" text-dark " >
                            <img src={profile} alt='Techoptima Logo'/>  <div style={{"fontSize" : '10px' }} >profile</div>
                        </button>                                 
                    </div>
                </div>    
                
            </Nav>
        </div>
       
        
        {/* Side Nav Bar */}
        
        <div className=''>         
            <div className=''>
            <div className='side-navbar fixed-top col'>   
            <Navbar className=' p-1 ' variant="success">  
                  
                <Nav className='list-group-item list-group-item-action'> 
                <div className="logo p-1  pb-2">
                <Link to="https://www.techoptima.in/"  target="_blank" ><img className='ms-4  '  src={Techoptima} 
                 alt='Techoptima Logo'  width="auto" height="45px" /></Link>        
        
             </div> 
          
                  <div className='sidenavpadding'>
                    <div className=' '>
                    <Nav.Link as={Link} to="/" className='sidenavmargin' > <img className='sidenavicons' src={dashboard} alt='Techoptima Logo'  /><span className='sidenavtextcolor'>Dashboard</span></Nav.Link>        

                    </div>
                    <NavDropdown title={<><img className='sidenavicons' src={config} alt='Techoptima Logo' />Configurations</>}  className="dropdown custom-dropdown sidenavmargin "  id="extraction-dropdown"> 
                        <NavDropdown.Item as={Link} value="1" to="/extraction"className='ps-3' >Extraction</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/validation"className='ps-3'>Validation</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/transformation"className='ps-3'>Transformation</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/variable" className='ps-3'>Variable</NavDropdown.Item>  
                        <NavDropdown.Item as={Link} to="/normalizationheader"className='ps-3' >Normalization_config_Header</NavDropdown.Item>                     
                        <NavDropdown.Item as={Link} to="/normalizationdetails" className='ps-3' >Normalization_Config_Details</NavDropdown.Item>
                    </NavDropdown>                      
                    <Nav.Link  as={Link} to="/batchstatus" className='sidenavmargin'><img className='sidenavicons' src={menu} alt='Techoptima Logo' /><span className='sidenavtextcolor'>BatchStatusSummary</span></Nav.Link> 
                    
                    <NavDropdown  title={<><img className='sidenavicons' src={file} alt='Techoptima Logo' />Exceptions</>}  className="dropdown custom-dropdown sidenavmargin"  id="extraction-dropdown"> 
                         <NavDropdown.Item as={Link} value="1" to="/extractionExceptions" className='ps-4'>ExtractionExceptions</NavDropdown.Item>
                         <NavDropdown.Item as={Link} to="/validatrionExceptions" className='ps-4'> ValidationExceptions</NavDropdown.Item>
                         <NavDropdown.Item as={Link} to="/transformationExceptions" className='ps-4'>TransformationExceptions</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/normalizationexception" className='ps-4' >NormalizationExceptions</NavDropdown.Item>  

                    
                    </NavDropdown>
                    {/* <Nav.Link as={Link} to="/extractionExceptions" style={{ color: 'white' }}> ExtractionExceptions</Nav.Link>   
                    <Nav.Link as={Link} to="/validatrionExceptions"style={{ color: 'white' }}> ValidationExceptions</Nav.Link>
                    <Nav.Link as={Link} to="/transformationExceptions"style={{ color: 'white' }}>TransformationExceptions</Nav.Link>
                    <Nav.Link as={Link} to="/normalizationexception"style={{ color: 'white' }} >NormalizationExceptions</Nav.Link>   */}
                  </div>
                    
                </Nav>     
            </Navbar>           
            </div>
            </div>
            
        </div >
        <div  className=''>
        <div className='row mt-2'> 
           <div className='col-9'>
           <Outlet />
           </div>
        </div>

        </div>
       

       
    </div>
   
        
        {/* <div className=' col-9'> 
            <Outlet />
        </div> */}
    </div>
  )
}

export default Landingpage