import React, { Component} from 'react';
import MyHeader from './MyHeader';
import Navbar from './Navbar';
import BodyPart from './BodyPart';
import './home.css';
class Home extends Component{
    
    
    render(){
        
        return(
            <div>
            
                <MyHeader />
            
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 marhome">
                                <Navbar />
            
                        </div>
            
            
            
                        <div className="col-md-10">
                            <BodyPart />
                        
                        </div>
            
            
                    </div>
            
            
            
                </div>
            
            
            
            
            </div>
        
        
        
        
        )
        
    }

}


export default Home;