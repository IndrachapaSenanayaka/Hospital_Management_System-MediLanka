import React from 'react';
import './common_styles.css';
import LogoImg from '../../images/logo.png';

export default function Logo(){

    return(
        <div className="sidebar-item logo-container">
              <img className="logoImg" alt="logo" src={LogoImg}/>
        </div>
    );
}