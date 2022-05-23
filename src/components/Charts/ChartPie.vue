<template>
              <canvas id="pieChart" style="max-height: 400px; display: block; box-sizing: border-box; height: 400px; width: 496.8px;" width="621" height="500"></canvas>
            
</template>
  <script>
import Chart from 'chart.js/auto';
  export default {
      name: 'ChartPie',

       mounted(){
             document.addEventListener("DOMContentLoaded", () => {
                  new Chart(document.querySelector('#pieChart'), {
                    type: 'pie',
                    data: {
                      labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                      ],
                      datasets: [{
                        label: 'My First Dataset',
                        data: [300, 50, 100],
                        backgroundColor: [
                          'rgb(255, 99, 132)',
                          'rgb(54, 162, 235)',
                          'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 4
                      }]
                    }
                  });
                });
   },
 }
              </script>