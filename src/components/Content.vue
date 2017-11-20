<template>
  <div class="content-container">
    <app-process :content="content"></app-process>
    <app-submitted :content="content"></app-submitted>
  </div>
</template>
<script>
import Process from './Process.vue'
import Submitted from './Submitted.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    'app-process': Process,
    'app-submitted': Submitted,
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
    display: flex;
    flex-wrap: wrap;
  }
</style>
