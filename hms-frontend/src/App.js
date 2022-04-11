import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {

  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/customer/appointment" component={CustomerAppointment}/>
          <Route exact path="/customer/registration" component={CustomerRegistration}/>
          <Route exact path="/staff/admin" component={Admin}/>
          <Route exact path="/staff/pharmacy-stock-manager" component={PharmacyStockManager}/> */}
        </Switch>
      </div>
    </Router>
      
  );
}

export default App;
