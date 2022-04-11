import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StockManager from './components/staff.components/stock_manager.components/Staff.stock_manager';



function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/staff/stock-manager" component={StockManager}/>
        </Switch>
      </div>
    </Router>
      
  );
}

export default App;
