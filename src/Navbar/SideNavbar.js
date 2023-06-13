import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown } from "react-bootstrap";
import { Link ,Outlet} from 'react-router-dom';

const SideNavbar = () => {
  return (
    <div>
      <div className='side-navbar'>   
        <Navbar className=' p-1 flex  list-group-item list-group-item-action  ' variant="success">  
        <Nav className='list-group-item list-group-item-action'>      
          <NavDropdown  title="Configurations"  className="dropdown" id="extraction-dropdown">
              <NavDropdown.Item as={Link} to="/extraction">Extraction Configuration</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fieldlevel">Validation Configuration</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transformation">Transformation Configuration</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/path" >Variable Configuration</NavDropdown.Item>  
              <NavDropdown.Item as={Link} to="/normalizationheader" >Normalization_config_Header</NavDropdown.Item>                     
              <NavDropdown.Item as={Link} to="/normalizationdetails"  >Normalization_Config_Details</NavDropdown.Item>
            </NavDropdown>  
           
                <Nav.Link as={Link} to="/totalexceptions" >Total Exceptions</Nav.Link>      
                <div>
                <Nav.Link as={Link} to="/exceptions"  >EXC_BAT001</Nav.Link> 
                    </div>          
            </Nav>
        
          
         

        </Navbar>
            
   
       
     
    </div>
    </div>
  );
};

export default SideNavbar;
