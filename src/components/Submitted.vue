<template>
  <div>
    <h2>submitted files</h2>
    <app-submittedGraph :height="300" :content="content"></app-submittedGraph>
    <p>{{content.data.goalsMet.LastMonth}}</p>
    <p>{{content.data.goalsMet.ThisMonth}}</p>
    <p>{{content.data.goalsMet}}</p>
  </div>
</template>
<script>
import submittedGraph from '../charts/submitted.js'
export default {
  props: ['content'],
  components: {
    'app-submittedGraph': submittedGraph,
  },
}
</script>
<style lang="scss" scoped>

</style>
