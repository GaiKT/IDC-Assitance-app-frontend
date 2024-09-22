import React from 'react'
import Chart from "react-apexcharts";

export default function UtilsChart({topic , typeChart , xAxis , yAxis}) {

const state = {
        options: {
          xaxis: {
            categories: xAxis
          }
        },
        series: yAxis
};

  return (
    <div className='p-5'>
        <h1>{topic}</h1>
        <Chart
            options={state.options}
            series={state.series}
            type={typeChart}
        />
    </div>
  )
}
