import { Doughnut } from 'vue-chartjs'
// import the component - chart you need

export default {
  extends: Doughnut,
  props: ['content'],
  data () {
    return {
      l1: this.content.data.goalsMet.UW_Lvl1_3_MTD_turntime,
      l4: this.content.data.goalsMet.UW_Lvl4_MTD_turntime, 
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['L1 - L3 Hours','Speciality Hours'],
      datasets: [
        {
          backgroundColor: ['#B82B35', '#eee'],
          data: [this.l1, this.l4]
        }
      ],
    }, {legend: {position: 'right'}, cutoutPercentage: 80, responsive: true})
  }
}