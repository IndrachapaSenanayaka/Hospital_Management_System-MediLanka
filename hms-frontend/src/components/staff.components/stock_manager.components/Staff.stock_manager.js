import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../staffStyles.css';



export default function StockManager(){
    return(
        <Router>
            <div>
                <Switch>
                    <Route path="/staff/stock-manager">
                        <div className="main-container">
                            <div className="flex-box-container">
                                <div className="flex-box sidebar-container">
                                    <StaffLogo/>
                                    <StaffSidebarProfile/>

                                    <StockManagerSidebarNavigation/>
                                    
                                    <StaffLogOut/>
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