<template>
  <div class="units-container">
    <h2>funded/unfunded urnits</h2>
    <br>
    <app-unitsGraph :content="content" :height="300"></app-unitsGraph>
    <p>{{this.content.data.goalsMet}}</p>
    </div>
  </div>
</template>
<script>
import unitsGraph from '../charts/units.js'
export default {
  props: ['content'],
  components: {
  'app-unitsGraph': unitsGraph 
  },
}
</script>
<style lang="scss" scoped>
  .units-container{
    display: flex;
    font-family: 'Oswald', sans-serif;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    text-transform: uppercase;
    p{
      display: none;
    }
    h2{
      margin-bottom: 20px;
      font-family: 'Open Sans', sans-serif;
      text-align: center;
      font-size: 20px;
      letter-spacing: 3px; 
    }
  }
</style>
