import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StaffLogo from "../Staff_logo";
import './pharmacyCashierStyles.css';
import './gridItemStyles.css';
import './qrCodeScanner.css';
import './shoppingCart.css';
import './gridContainerStyles.css';
import QRcodeScanner from "./QR_code_scanner";
import ShoppingCart from "./Shopping_cart";

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
                      <Route path="/staff/pharmacy-cashier" component={QRcodeScanner}/>
                    </div>
                    <div className="flex-box content-container">                    
                      <Route exact path="/staff/pharmacy-cashier/shopping-cart" component={ShoppingCart}/>
                    </div>
                  </div>                
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
          
    );
}