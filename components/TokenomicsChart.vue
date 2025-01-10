<template>
    <div ref="chartContainer" class="chart-container">
      <canvas id="tokenomics-chart" class="mx-auto"></canvas>
    </div>
  </template>
  
  <script>
  import { defineComponent, onMounted, ref } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  export default defineComponent({
    name: 'TokenomicsChart',
    setup() {
      const chartContainer = ref(null);
  
      const renderChart = () => {
        const ctx = document.getElementById('tokenomics-chart').getContext('2d');
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Community Rewards', 'Liquidity Pool', 'Development Team', 'Marketing & Partnerships', 'Reserve'],
            datasets: [
              {
                label: 'Tokenomics Distribution',
                data: [50, 20, 15, 10, 5],
                backgroundColor: ['#FFD700', '#FFC300', '#FF5733', '#C70039', '#900C3F'],
                hoverOffset: 4,
              },
            ],
          },
          options: {
            responsive: true,
            animation: {
              duration: 2000,
              easing: 'easeOutBounce',
            },
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: '#333',
                },
              },
            },
          },
        });
      };
  
      onMounted(() => {
        Chart.register(...registerables);
  
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              renderChart();
              observer.disconnect(); // Déconnecte l'observateur après le rendu
            }
          },
          { threshold: 0.5 } // Le graphique est déclenché lorsque 50% est visible
        );
  
        observer.observe(chartContainer.value);
      });
  
      return {
        chartContainer,
      };
    },
  });
  </script>
  
  <style scoped>
.chart-container {
  width: 500px; /* Augmenter la largeur */
  height: 500px; /* Augmenter la hauteur */
  margin: 0 auto; /* Centrer le graphique */
}
canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
  