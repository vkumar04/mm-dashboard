<template>
  <div class="content-container">
    <app-process :content="content"></app-process>
    <div class="graphs">
      <app-underwriting :content="content"></app-underwriting>
      <app-submitted :content="content"></app-submitted>
    </div>
  </div>
</template>
<script>
import Process from './Process.vue'
import Submitted from './Submitted.vue'
import Underwriting from './Underwriting'
export default {
  data() {
    return {

    }
  },
  components: {
    'app-process': Process,
    'app-submitted': Submitted,
    'app-underwriting': Underwriting
  },
  props: ['content'],
}
</script>
<style lang="scss" scoped>
  .content-container{
    display: flex;
    width: 100%;
    align-items: flex-start;
    h1{
      color: #B82B35;
      text-align: center;
      font-family: 'Oswald', sans-serif;
      letter-spacing: 3px;
      font-size: 36px;
      text-transform: uppercase;
    }
    .graphs{
      flex-wrap: wrap;
      justify-content: space-evenly;
      display: flex;
      width: 100%;
      align-items: center;
    }
  }
</style>
