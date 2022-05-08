import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StockManager from './components/staff.components/stock_manager.components/Staff.stock_manager.routes';
import PharmacyCashier from './components/staff.components/pharmacy_cashier.components/Pharmacy_cashier.routes';
import Login from './components/staff.components/admin.components/Login';
import Admin from './components/staff.components/admin.components/Admin';
import Doctor from './components/staff.components/doctor.components/Doctor';
import Customer from './components/customer.components/registration.components/Cusomer';
import Appointment from './components/customer.components/appointment.components/Customer.appointment.routes';


function App() {

  return (
    <Router>
      <Route path="/staff/stock-manager" component={StockManager}/>
      <Route path="/staff/pharmacy-cashier" component={PharmacyCashier}/>
      <Route path="/staff/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route path="/doctor/" component = {Doctor}/>
      <Route path="/customer/" component = {Customer}/>
      <Route path="/appointment" component={Appointment} />
    </Router>
  );
}

export default App;
