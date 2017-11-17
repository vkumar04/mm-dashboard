<template>
  <div class="content-container">
    <h1>CLT OPS</h1>
    <div class="box1">
      <div class="stat">
        <h3>7 day process goal met</h3>
        <p>{{content.data.goalsMet.TPD_Pct}} %</p>
      </div>
      <app-line></app-line> 
    </div>
   
  </div>
</template>
<script>
import Line from './Line.js' 
export default {
  data() {
    return {

    }
  },
  components: {
   'app-line': Line 
  },
  props: ['content'],
}
</script>
<style lang="scss" scoped>
  .content-container{
    height: 100vh;
    width: 75%;
    h1{
      color: #B82B35;
      text-align: center;
      font-family: 'Oswald', sans-serif;
      letter-spacing: 3px;
      font-size: 36px;
    }
    .box1{
      display: flex;
      width: 100%;
      padding: 20px;
      background: lightblue;
      h3{
        text-align: center;
        font-family: 'Oswald', sans-serif;
      }
      p{
        font-size: 80px;
        font-family: 'Oswald', sans-serif;
        align-self: center;
      }
    }
  }
</style>
