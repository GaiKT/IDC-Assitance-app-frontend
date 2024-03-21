import React from 'react';
import "chart.js/auto";
import { Bar } from 'react-chartjs-2';

const ChartExample = () => {
  return (
    <div className='flex justify-center py-10'>
      <Bar
        datasetIdKey='id'
        data={{
          labels: ['Jun', 'Jul', 'Aug'],
          datasets: [
            {
              id: 1,
              label: 'Fdc 1',
              data: [5, 6, 7],
            },
            {
              id: 2,
              label: 'Fdc 2',
              data: [3, 2, 1],
            },
            {
              id: 3,
              label: 'Fdc 3',
              data: [7, 1, 8],
            },
          ],
        }}
      />
    </div>
  );
};

export default ChartExample;
