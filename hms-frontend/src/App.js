import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Doctor from './components/staff.components/doctor.components/Doctor';
import Customer from './components/customer.components/registration.components/Cusomer';


function App() {

  return (
    <Router>
      <Route path="/doctor/" component = {Doctor}/>
      <Route path="/customer/" component = {Customer}/>
    </Router>
      
  );
}

export default App;
