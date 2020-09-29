import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from './Home';
import DonutChart from './DonutChart';
import BarChartApp from './BarCharApp';
import LineChartApp from './LineChartApp';
import PieChartApp from './PieChartApp';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/DonutChart" exact component={DonutChart} />
      <Route path="/PieChart" exact component={PieChartApp} />
      <Route path="/BarChart" exact component={BarChartApp} />
      <Route path="/LineChart" exact component={LineChartApp} />
      
      

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
