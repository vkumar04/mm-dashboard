<template>
  <div id="app">
    <div class="container">
      <app-sidebar></app-sidebar>
      <app-content :content="data"></app-content>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'

export default {
  name: 'app',
  data () {
    return {
      data: {}
    }
  },
  components: {
    'app-sidebar': Sidebar,
    'app-content': Content,
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
}
</style>
