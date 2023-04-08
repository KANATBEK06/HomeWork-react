import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'
import { styled } from 'styled-components';

const Chart = (props) => {
  const months =[ 
    {
      label:'Январь',
      currentPrice:0,
      maxmumPrice:2000,
    },
    {
      label:'Февраль',
      currentPrice:0,
      maxmumPrice:2000,
    },
    {
      label:'Март',
      currentPrice:0,
      maxmumPrice:2000,
    },
    {
      label:'Апрель',
      currentPrice:0,
      maxmumPrice:2000,
    },
    {
      label:'Май',
      currentPrice:0,
      maxmumPrice:2000,
    },
     {
      label:'Июнь',
      currentPrice:0,
      maxmumPrice:2000,
    },
     {
      label:'Июль',
      currentPrice:0,
      maxmumPrice:2000,
    },
     {
      label:'Август',
      currentPrice:0,
      maxmumPrice:2000,
    },
     {
      label:'Сентябрь',
      currentPrice:0,
      maxmumPrice:2000,
    },
    {
      label:'Октябрь',
      currentPrice:0,
      maxmumPrice:2000,
    },
    {
      label:'Ноябрь',
      currentPrice:0,
      maxmumPrice:2000,
    }
  ]
 props.items.forEach((item) => {
  console.log(item);
const month = item.date.getMonth()
months[month].currentPrice += item.price
 })
  return (
    <div className="chart">
      {months.map((item)=>{
        return    <ChartBar 
        currentPrice={item.currentPrice}
        label={item.label}
        maxmumPrice={item.maxmumPrice}
         />
        
      })}
    </div>
  );
};

export default Chart;
