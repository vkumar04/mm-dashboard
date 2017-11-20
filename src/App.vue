<template>
  <div id="app">
    <div class="container">
      <!-- <transition name="slide-fade">
        <app-sidebar v-if="show"></app-sidebar>
      </transition> -->
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
      data: {},
      show: false,
    }
  },
  components: {
    'app-sidebar': Sidebar,
    'app-content': Content,
  },
  methods: {
    async getData() {
      this.data = await axios.get('../config/data.json')
      this.show = true;
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
  width:100%;
  height: 100vh;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
