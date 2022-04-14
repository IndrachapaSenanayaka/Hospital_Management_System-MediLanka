import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../common.components/common_styles.css';
import Logo from "../../common.components/Logo";
import LogOut from "../../common.components/LogOut";
import SidebarProfile from "../../common.components/SidebarProfile";
import StockManagerSidebarNavigation from "./Stock_manager_sidebarNavigation";
import AddNewItem from "./Add_pharmacyItem";



export default function StockManager(){
    return(
        <Router>
            <div>
                <Switch>
                    <Route path="/staff/stock-manager">
                        <div className="main-container">
                            <div className="flex-box-container">
                                <div className="flex-box sidebar-container">
                                    <Logo/>
                                    <SidebarProfile/>
                                    <StockManagerSidebarNavigation/>
                                    <LogOut/>
                                </div>
                                <div className="flex-box content-container">                    
                                    <Route exact path="/staff/stock-manager/add-item" component={AddNewItem}/> 
                                </div>
                            </div>                
                        </div>
                    </Route>
                </Switch>
            </div>
    </Router>
    );
}