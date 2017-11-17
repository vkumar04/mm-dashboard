<template>
<div>
      <h1>charlotte ops</h1>
  <div class="content-container">
    <app-process :content="content"></app-process>
    <app-process :content="content"></app-process>
  </div>
</div>
</template>
<script>
import Process from './Process.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    'app-process': Process,
  },
  props: ['content'],
}
</script>
<style lang="scss" scoped>
 h1{
      color: #B82B35;
      text-align: center;
      font-family: 'Oswald', sans-serif;
      letter-spacing: 3px;
      font-size: 36px;
      text-transform: uppercase;
    }
  .content-container{
    height: 100vh;
    width: 84%;
    display: flex;
   
  }
</style>
