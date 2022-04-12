import React from 'react';
import './staffStyles.css';
import Logo from '../../images/logo.png';

export default function StaffLogo(){

    return(
        <div className="sidebar-item logo-container">
              <img className="logoImg" alt="logo" src={Logo}/>
        </div>
    );
}