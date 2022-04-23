import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StaffLogo from "../Staff_logo";
import './pharmacyCashierStyles.css';
import './gridItemStyles.css';
import './qrCodeScanner.css';
import './shoppingCart.css';
import './gridContainerStyles.css';

export default function PharmacyCashier(){

    return (
        <Router>
          <div>
            <Switch>
              <Route path="/staff/pharmacy-cashier">
                <div className="main-container">
                  <div className="flex-box-container">
                    <div className="flex-box sidebar-container">
                      <StaffLogo/>
                      
                    </div>
                    <div className="flex-box content-container">                    

                    </div>
                  </div>                
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
          
    );
}