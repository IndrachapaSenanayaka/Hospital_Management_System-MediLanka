import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StockManager from './components/staff.components/stock_manager.components/Staff.stock_manager.routes';
import PharmacyCashier from './components/staff.components/pharmacy_cashier.components/Pharmacy_cashier.routes';



function App() {

  return (
    <Router>
      <Route path="/staff/stock-manager" component={StockManager}/>
      <Route path="/staff/pharmacy-cashier" component={PharmacyCashier}/>
    </Router>
      
  );
}

export default App;
