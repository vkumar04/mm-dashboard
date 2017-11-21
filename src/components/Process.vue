<template>
  <div class="process-container">
    <h2>7 day process goal</h2>
    <br>
    <div class="graph-container">
      <p>{{content.data.goalsMet.TPD_Pct}} %</p>
      <app-processGraph class="graph" :height="300" :content="content"></app-processGraph>
      <div class="stats">
        <h4>Funded Units: {{content.data.goalsMet.FundedUnitsMTD}}</h4>
        <h4>Funded Volume: {{content.data.goalsMet.FundedVolMTD}}</h4>
        <h4>Projected Units: {{content.data.goalsMet.Projected_Units}}</h4>
        <h4>Projected Volume: {{content.data.goalsMet.Projected_Volume}}</h4>
      </div>
    </div>
    
  </div>
</template>
<script>
import processGraph from '../charts/process_chart.js'
export default {
  props: ['content'],
  components: {
    'app-processGraph': processGraph
  },
}
</script>

<style lang="scss" scoped>
  .process-container{
    position: relative;
    height: 100vh;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    font-family: 'Oswald', sans-serif;
    padding: 0 10px;
    align-items: center;
    h2{
      margin-bottom: 20px;
      font-family: 'Open Sans', sans-serif;
      font-size: 20px;
      letter-spacing: 3px;
    } 
   .graph-container{
    p{
      font-size: 60px;
      position: absolute;
      top: 190px;
      left: 32%;
    }
   } 
   .stats{
     display: flex;
     padding: 0 20px;
     width: 100%;
     margin: 0 auto;
     flex-direction: column;
     margin-top: 60px;

     h4{
       margin: 10px 0;
       font-size: 22px;
      letter-spacing: 3px;
       font-family: 'Open Sans', sans-serif;
     }
   }
  }
</style>
