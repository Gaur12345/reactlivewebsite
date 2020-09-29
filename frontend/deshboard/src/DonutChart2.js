import React from 'react';

import {Doughnut} from 'react-chartjs-2';


function DonutChart2(){
    
    const data = {
        
        labels : ['Mobile','Laptop','Tabletes','Iport','Ram'],
        datasets : [{
            
            label : "Sales for 2020 (M)",
            data: [31,12,26,16,55],
            
            backgroundColor : [
                'rgba(255,99,132,1)',
                'rgba(255,205,86,1)',
                'rgba(54,162,235,1)',
                'rgba(255,159,64,1)',
                'rgba(153,102,255,1)'
            ]
        }                    
    ]
    }
    
    const options = {
        
        title: {
            
            display: true,
            text: "Profit share of 5 different products"
        },
        
    }
    
    return(
    
    <Doughnut data={data} options={options} />
    
    
    
    )
    
}


export default DonutChart2;