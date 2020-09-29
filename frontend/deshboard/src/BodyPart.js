import React, { Component} from 'react';

import dountchart from './image/donutchart.png';
import piechart from './image/piechat.png';
import barchart from './image/barchart.png';
import histogram from './image/histogram.png';
import scatter from './image/scatterplot2.png';
import linechart from './image/linechart.png';
import './BodyPart.css';



class BodyPart extends Component{
    
    render(){
        
        return(
            <div className="bodypartfull">
                <div className="container-fluid">
                    <div className="row">
            
                        <div className="col-md-4 images">
                                <img src={dountchart} alt="donutchart" />
                        </div>
            
            
                        <div className="col-md-4 images">
                                <img src={piechart} alt="donutchart" />
                        </div>
            
            
                        <div className="col-md-4 images">
                                <img src={barchart} alt="donutchart" />
            
                        </div>
            
            
                    </div>
            
            
            
                </div>
            
            
               
            
            
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 images">
                                <img src={histogram} alt="donutchart" />
                        </div>
            
            
                        <div className="col-md-4 images">
                                <img src={scatter} alt="donutchart" />
                        </div>
            
            
                        <div className="col-md-4 images">
                                <img src={linechart} alt="donutchart" />
                            
                        </div>
            
            
                    </div>
            
            
            
                </div>
            
            
            
            </div>
   
        
        )
        
        
    }
    
    
}



export default BodyPart;
