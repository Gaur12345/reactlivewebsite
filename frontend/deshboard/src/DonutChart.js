import React, { Component} from 'react';
import MyHeader from './MyHeader';
import Navbar from './Navbar';
import BodyPart from './BodyPart';
import Chart from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import LineChart from './LineChart';
import BarChart from './BarChart';
import DonutChart2 from './DonutChart2';
import './Chart.css';

class DonutChart extends Component{
    
    render(){
        
       
        return(
            <div>
                <MyHeader />
            
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                                <Navbar />
            
                        </div>
            
            
            
                        <div className="col-md-10  DonutChart">
                        
                            
                          <DonutChart2 />

                        
                        </div>
            
            
                    </div>
                
                </div>

            </div>
        )   
    }
}


export default DonutChart;