import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StockManager from './components/staff.components/stock_manager.components/Staff.stock_manager.routes';



function App() {

  return (
    <Router>
      <Route path="/staff/stock-manager" component={StockManager}/>
    </Router>
      
  );
}

export default App;
