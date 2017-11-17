<template>
  <div class="content-container">
    <app-process :content="content"></app-process>
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
  }
</style>
