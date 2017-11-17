<template>
  <div class="process-container">
    <h2>7 day process goal</h2>
    <app-line :content="content"></app-line>
    <p>{{content.data.goalsMet.TPD_Pct}} %</p>
  </div>
</template>
<script>
import Line from './Line.js'
export default {
  props: ['content'],
  components: {
    'app-line': Line
  },
}
</script>

<style lang="scss" scoped>
  .process-container{
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    background: #fff;
    font-family: 'Oswald', sans-serif;
    align-items: center;
    h2{
      margin-bottom: 20px;
      font-family: 'Open Sans', sans-serif;
      font-size: 40px;
      letter-spacing: 3px;
    } 
    p{
      font-size: 40px;
    }
  }
</style>
