<template>
  <div class="submitted-container">
    <h2>submitted files through <br>{{content.data.goalsMet.BusinessDayCount}} business days</h2>
      <div class="info">
        <app-submittedGraph :height="300" :content="content"></app-submittedGraph>
        <p></p>
      </div>
  </div>
</template>
<script>
import submittedGraph from '../charts/submitted.js'
export default {
  props: ['content'],
  components: {
    'app-submittedGraph': submittedGraph,
  },
}
</script>
<style lang="scss" scoped>
  .submitted-container{
    display: flex;
    font-family: 'Oswald', sans-serif;
    flex-direction: column;
    text-transform: uppercase;
    padding: 10px;
    align-items: center;
    h2{
      margin-bottom: 20px;
      font-family: 'Open Sans', sans-serif;
      text-align: center;
      font-size: 20px;
      letter-spacing: 3px; 
    }
    .info{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
