<template>
  <div class="process-container">
    <h2>7 day process goal</h2>
    <br>
    <div class="graph-container">
      <p>{{content.data.goalsMet.TPD_Pct}} %</p>
      <app-processGraph class="graph" :height="300" :content="content"></app-processGraph>
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
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    font-family: 'Oswald', sans-serif;
    padding: 10px;
    align-items: center;
    
    h2{
      font-family: 'Open Sans', sans-serif;
      font-size: 20px;
      letter-spacing: 3px;
    } 
   .graph-container{
    p{
      font-size: 60px;
      position: absolute;
      top: 160px;
      left: 32%;
    }
   } 
  }
</style>
