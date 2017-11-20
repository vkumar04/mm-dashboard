<template>
 <div class="underwriting-container">
   <h2>underwriting turntime <br>{{content.data.goalsMet.uw_lvl1_3}}/{{content.data.goalsMet.uw_lvl4}}</h2>
   <app-underWriting :height="300" :content="content"></app-underWriting>
  </div> 
</template>
<script>
import underWriting from '../charts/underWriting.js';
export default {
  props: ['content'],
  components: {
    'app-underWriting': underWriting,
  }  
}
</script>
<style lang="scss" scoped>
  .underwriting-container{
    display: flex;
    font-family: 'Oswald', sans-serif;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    text-transform: uppercase;
    h2{
      margin-bottom: 20px;
      font-family: 'Open Sans', sans-serif;
      text-align: center;
      font-size: 20px;
      letter-spacing: 3px; 
    }
  }
</style>


