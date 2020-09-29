import React, { Component} from 'react';
import Sales from './image/sales.jpg';
import './home.css';


class MyHeader extends Component{

    render(){
    
    
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
            
                        <div className="col-md-2 logo">
                                    
                            
                                <img src={Sales}  className="logoSales" />
                            
            
                        </div>
            
            
                        <div className="col-md-10 dashboardtop">
                            
                            
                            <h2>Dashboard Of Sales </h2>
            
                            
                        </div>
            
                        
            
                    </div>
                </div>
            </div>
        )
    
    }



}

export default MyHeader;


