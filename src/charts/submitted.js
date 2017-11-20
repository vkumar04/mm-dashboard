import { Pie } from 'vue-chartjs'
// import the component - chart you need

export default {
  extends: Pie,
  props: ['content'],
  data () {
    return {
      lastMonth: this.content.data.goalsMet.LastMonth,
      lastMTD:  this.content.data.goalsMet.Submissions_NumOfLoans_LastMTD,
      thisMonth: this.content.data.goalsMet.ThisMonth,
      thisMTD: this.content.data.goalsMet.Submissions_NumOfLoans_MTD,
    }
  },
  mounted () {
    this.renderChart({
      labels: [this.lastMonth, this.thisMonth],
      datasets: [
        {
          label: [this.lastMonth, this.thisMonth],
          backgroundColor: ['#B82B35', '#eee'],
          data: [this.lastMTD, this.thisMTD]
        }
      ],
    }, {legend: {position: 'right'}, })
  }
}