import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const Chart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Ensure canvasRef.current is available
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    
    return () => {
      if (ctx && ctx.chart) {
        ctx.chart.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} id="myChart"></canvas>
    </div>
  );
};

export default Chart;