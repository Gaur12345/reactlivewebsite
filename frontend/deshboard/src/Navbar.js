import React, {Component} from 'react';
import {Link, Router} from 'react-router-dom';
import userimage from './image/userimage.jpg';
import './Navbar.css';
import doughnut from './image/doughnut.svg';
import bar from './image/bar-graph.svg';
import line from './image/growth.svg';
import home from './image/house.svg';
import pie from './image/pie-chart.svg';


const Navbar = () => {


    return (
        
        <div>
        <div className = "navBarstyle" >
        <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 navbarMenu">
                        
                            <img src={userimage} alt="userimage" className="userImage"/>
                            <h4 style={{color:"white"}}>Gaurav Kumar</h4>
                        
            
                    </div>
        
                </div>
        
        
        
            </div>
        
        
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 navbarMenu">
                        
                    <li><Link to="/" style={{ textDecoration: 'none' ,color:'white'}} ><img src={home} alt="home" className="logonav" />&nbsp;&nbsp;&nbsp;Home Page</Link></li>
                           
                        
            
                    </div>
        
                </div>
        
        
        
            </div>
        
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 navbarMenu">
                        
                    <li><Link to="DonutChart" style={{ textDecoration: 'none' ,color:'white'}} ><img src={doughnut} alt="doughnut" className="logonav" />&nbsp;&nbsp;&nbsp; Doughnut</Link></li>
                        
            
                    </div>
        
                </div>
        
        
        
            </div>
        
        
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 navbarMenu">
                        
                            <li><Link to="BarChart" style={{ textDecoration: 'none',color:'white' }} ><img src={bar} alt="doughnut" className="logonav" />&nbsp;&nbsp;&nbsp;Bar Chart</Link></li>
                       
                    </div>
        
                </div>
        
        
        
            </div>
        
        
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 navbarMenu">
                        
                            <li><Link to="LineChart" style={{ textDecoration: 'none' ,color:'white'}} ><img src={line} alt="doughnut" className="logonav" />&nbsp;&nbsp;&nbsp;Line Chart</Link></li>
                        
            
                    </div>
        
                </div>
            </div>
        
        
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 navbarMenu">
                        
                            <li><Link to="PieChart" style={{ textDecoration: 'none' ,color:'white'}} ><img src={pie} alt="PieChart" className="logonav" />&nbsp;&nbsp;&nbsp;Pie Chart</Link></li>
                        
            
                    </div>
        
                </div>
            </div>
        
        
            
        </div>
        </div>        
        
    )

}




export default Navbar;