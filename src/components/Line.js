import { Doughnut } from 'vue-chartjs'
// import the component - chart you need

export default {
  extends: Doughnut,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['current 7 day process goal', 'remaining goal'],
      datasets: [
        {
          label: ['Current Goal', 'Remaining Goal'],
          backgroundColor: ['#B82B35', '#fff'],
          data: [79.6, 21.4]
        }
      ]
    })
  }
}