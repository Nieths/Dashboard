import React,{useState} from 'react'
import axios from 'axios'
import {Bar,Line,Pie} from 'react-chartjs-2'


export default function ShipmentGraph(props){
    let unique = [...new Set(props.data.map(item => item.Status))]; 
    var result = props.data.reduce( (acc, o) => (acc[o.Status] = (acc[o.Status] || 0)+1, acc), {} );
    let frequency=[];
    for (var key in result) {
        if (result.hasOwnProperty(key)) {
          frequency.push(result[key]);
        }
      }
    
    const [dataChart, setData] = useState([]);
    let charData= {
        labels: unique,
        datasets: [{
            label: 'Shipments Status',
            data: frequency,
            backgroundColor: [
                '#00876c',
'#519975',
'#7daa83',
'#a2bc95',
'#c4cead',
'#e2e2c8',
'#fbf6e7',
'#f0ddbf',
'#eac39b',
'#e6a67c',
'#e18765',
'#dc6557',
'#d43d51'
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
   
  
    return (<div><h1>Shipment Graph - Status</h1>
        <Pie
  data={charData}
  
  options={{maintainAspectRatio: false}}

  
/>
</div>);
}