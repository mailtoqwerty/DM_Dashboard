import React from 'react';
import { Outlet,Link } from "react-router-dom";
import SideNavbar from './SideNavbar';
import Techoptima from '../tech2.png';

const TopNavbar = () => {
  return (
    <div>
        <nav className="top-navbar">
          
            <div className="logo"><img src={Techoptima} alt='Techoptima Logo' width="50px" height="40px"/><Link to={'/'} className='link'>Dashboard</Link> </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
                
            </div>
           
        </nav>
        {/* <SideNavbar/> */}
        <Outlet/>
    </div>    
  );
};
export default TopNavbar;
