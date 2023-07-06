import React from "react";
import { PieChart, Pie } from 'recharts';
import './piechart.css';

const PieCharts = () => {
  const data=[
    {name:"January", monthlyExpense:30},
    {name:"February", monthlyExpense:20},
    {name:"March", monthlyExpense:20},
    {name:"April", monthlyExpense:20},
    {name:"May", monthlyExpense:20},
    {name:"June", monthlyExpense:20},
    {name:"July", monthlyExpense:20},
    {name:"August", monthlyExpense:20},
    {name:"September", monthlyExpense:20},
    {name:"October", monthlyExpense:20},
    {name:"November", monthlyExpense:20},
    {name:"December", monthlyExpense:20},
  ]
  // const colour=generateJustOneColor();
  return (
    <PieChart className='piechart' width={250} height={250}>
    <Pie data={data} dataKey="monthlyExpense" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#3CBDC6" />
  <Pie data={data} dataKey="monthlyExpense" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#800080" label />
  </PieChart>
    )
};

export default PieCharts;
