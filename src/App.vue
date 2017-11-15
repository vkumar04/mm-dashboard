<template>
  <div id="app">
    <div class="container">
      <app-sidebar></app-sidebar>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'app',
  data () {
    return {
      data: {}
    }
  },
  components: {
    'app-sidebar': Sidebar,
  },
  methods: {
    async getData() {
      this.data = await axios.get('../config/data.json')
    }
  },
  created() {
    this.getData();
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.container{
  display: flex;
  height: 100vh;
  width: 100%;
}
</style>
