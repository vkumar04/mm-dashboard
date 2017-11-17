import { Doughnut } from 'vue-chartjs'
// import the component - chart you need

export default {
  extends: Doughnut,
  props: ['content'],
  data () {
    return {
      remain: 100 - this.content.data.goalsMet.TPD_Pct
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      datasets: [
        {
          backgroundColor: ['#B82B35', '#eee'],
          data: [this.content.data.goalsMet.TPD_Pct, this.remain]
        }
      ],
    }, {tooltips: false, cutoutPercentage: 80})
  }
}