import React from 'react';

import {Bar} from 'react-chartjs-2';


function BarChart(){
    
    const data = {
        
        labels : ['Mobile','Laptop','Tabletes','Iport','Ram'],
        datasets : [{
            
            label : "Actual Revenue",
            data: [3,2,2,1,5],
            borderColor: ['rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)'],
            backgroundColor: ['rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)']
        },
        {              
            label : "Targeted Revenue",
            data: [1,3,2,2,3],
            borderColor: ['rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)'],
            backgroundColor: ['rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)']
            
        
        }
    
                   
                   
    ]
    }
    
    const options = {
        
        title: {
            
            display: true,
            text: "Line Chart"
        },
        scales:{
            yAxes: [{
                
                ticks:{
                    
                    min:0,
                    max:6,
                    stepSize:1
                }
            }]
            
            
        }
    }
    
    return(
    
    <Bar data={data} options={options} />
    
    
    
    )
    
}


export default BarChart;