import React,{useState} from 'react'
import axios from 'axios'
import {Bar,Line,Pie} from 'react-chartjs-2'

export default function ContainerGraph(props){
    // console.log(props.data);
    let unique = [...new Set(props.data.map(item => item.Service))]; 
    var result = props.data.reduce( (acc, o) => (acc[o.Service] = (acc[o.Service] || 0)+1, acc), {} );
    let frequency=[];
    for (var key in result) {
        if (result.hasOwnProperty(key)) {
          frequency.push(result[key]);
        }
      }

      console.log(unique);
      const [dataChart, setData] = useState([]);
    let charData= {
        labels: unique,
        datasets: [{
            label: 'Container Service',
            data: frequency,
            backgroundColor: [
                '#003f5c',
                '#374c80',
                '#7a5195',
                '#bc5090',
                '#ef5675',
                '#ff764a',
                '#ffa600'
                
            ]
            
         
        }]
    }
    let dataChar= {
        chartData:{
            labels: unique,
            datasets:[
                {
                    label:'Number',
                    data:result
                }
            ]

            
        }
    }
   

  
    
    return (<div><h1>Container Graph - Service</h1>
        <Pie
  data={charData}
  options={{maintainAspectRatio: false}}
/>
</div>);
}