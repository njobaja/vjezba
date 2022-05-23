<template>
              <canvas id="lineChart" style="max-height: 400px; display: block; box-sizing: border-box; height: 248px; width: 496.8px;" width="621" height="310"></canvas>
                          
</template>
  <script>
import Chart from 'chart.js/auto';
  export default {
      name: 'ChartLine',

       mounted(){
            document.addEventListener("DOMContentLoaded", () => {
                  new Chart(document.querySelector('#lineChart'), {
                    type: 'line',
                    data: {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [{
                        label: 'Line Chart',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
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
         });
       }
  }
              </script>