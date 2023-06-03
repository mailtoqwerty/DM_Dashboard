import React from 'react'
import { Outlet } from "react-router-dom";
import './App.css';
import { Navbar,Nav,NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import TopNavbar from './Navbar/TopNavbar';
import Techoptima from './image.png';
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting ,AiOutlineUsergroupAdd} from "react-icons/ai";
import { FcSearch } from "react-icons/fc";

const Landingpage = () => {

  return (
    <div className=''>  
        <div className='fixed-top'>
            <Nav className="top-navbar   ">   
                <h4 > <Link as={Link} to="/" className='link'>Dashboard</Link></h4> 
                
                <div className="search-icon  ">
                        <input type="text" placeholder="Search..." className='searchbarwidth' />
                        <button type="submit"  class="search-button"><i class="fa fa-search"> <FcSearch/></i> </button>                        
                    </div>
                
                <div className="search-bar">                                          
                    <div  className='d-flex  '>
                        <button type="button" className="btn btn-secondary text-dark " >
                            <AiOutlineSetting /> 
                        </button>
                        <button type="button" className="btn btn-secondary text-dark " >
                            <AiOutlineUsergroupAdd /> 
                        </button>   
                        <button type="button" className="btn btn-secondary text-dark  " >
                            <IoIosNotificationsOutline /> <span className="badge bg-danger">2</span>
                        </button>       
                    </div>
                </div>    
                <div className="logo"><Link to="https://www.techoptima.in/" target="_blank" ><img src={Techoptima}  alt='Techoptima Logo' width="40px" height="40px"/></Link>  </div> 

            </Nav>
        </div>
       
        
        {/* Side Nav Bar */}
        
   

        <div className='side-navbar fixed-top'>   
            <Navbar className=' p-1' variant="success">        
                <Nav className='list-group-item list-group-item-action'> 
                    <NavDropdown  title="Configurations"  className="dropdown" id="extraction-dropdown">           
                        <NavDropdown.Item as={Link} value="1" to="/extraction">Extraction Configuration</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/validation">Validation Configuration</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/transformation">Transformation Configuration</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/variable" >Variable Configuration</NavDropdown.Item>  
                        <NavDropdown.Item as={Link} to="/normalizationheader" >Normalization_config_Header</NavDropdown.Item>                     
                        <NavDropdown.Item as={Link} to="/normalizationdetails"  >Normalization_Config_Details</NavDropdown.Item>
                    </NavDropdown>                      
                    <Nav.Link as={Link} to="/batchstatus"  >BatchStatusSummary</Nav.Link> 
                    {/* <Nav.Link as={Link} to="/totalexceptions" > TotalExceptions</Nav.Link>    */}
                    <Nav.Link as={Link} to="/extractionExceptions" > ExtractionExceptions</Nav.Link>   
                    <Nav.Link as={Link} to="/validatrionExceptions"> ValidationExceptions</Nav.Link>
                    <Nav.Link as={Link} to="/transformationExceptions">TransformationExceptions</Nav.Link>
                    <Nav.Link as={Link} to="/normalizationexception" >NormalizationExceptions</Nav.Link>   
                </Nav>     
            </Navbar>
           
        </div>
        <Outlet />
        </div>
        
        
       
   
  )
}

export default Landingpage