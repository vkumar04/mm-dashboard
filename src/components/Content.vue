<template>
  <div class="content-container">
   <app-sidebar></app-sidebar> 
    <div class="graphs">
      <app-process :content="content"></app-process>
      <app-underwriting :content="content"></app-underwriting>
      <app-submitted :content="content"></app-submitted>
      <app-units :content="content"></app-units>
    </div>
  </div>
</template>
<script>
import Sidebar from './Sidebar'
import Process from './Process.vue'
import Submitted from './Submitted.vue'
import Underwriting from './Underwriting'
import Units from './Units.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    'app-sidebar': Sidebar,
    'app-process': Process,
    'app-submitted': Submitted,
    'app-underwriting': Underwriting,
    'app-units': Units,
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
