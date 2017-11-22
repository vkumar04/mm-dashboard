import { Doughnut } from 'vue-chartjs'
// import the component - chart you need

export default {
  extends: Doughnut,
  props: ['content'],
  data () {
    return {
      funded: this.content.data.goalsMet.FundedUnitsMTD,
      projected: this.content.data.goalsMet.Projected_Units, 
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Funded Units','Projceted Units'],
      datasets: [
        {
          backgroundColor: ['#B82B35', '#eee'],
          data: [this.funded, this.projected]
        }
      ],
    }, {legend: {position: 'right'}, cutoutPercentage: 80, responsive: true})
  }
}