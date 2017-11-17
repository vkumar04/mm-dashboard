<template>
  <div class="content-container">
    <h1>CLT OPS</h1>
    <div class="box1">
      <h3>7 day process goal met</h3>
      <p>{{content.data.goalsMet.TPD_Pct}} %</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: ['content'],
}
</script>
<style lang="scss" scoped>
  .content-container{
    width: 100%;
    height: 100vh;
    h1{
      color: #B82B35;
      text-align: center;
      font-family: 'Oswald', sans-serif;
      letter-spacing: 3px;
      font-size: 36px;
    }
    .box1{
      display: flex;
      flex-direction: column;
      height: 300px;
      width: 400px;
      background: pink;
      justify-content: center;
      h3{
        text-align: center;
        font-family: 'Oswald', sans-serif;
      }
      p{
        font-size: 80px;
        font-family: 'Oswald', sans-serif;
        align-self: center;
      }
    }
  }
</style>
