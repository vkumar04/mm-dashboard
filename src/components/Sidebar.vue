<template>
  <div class="sidebar-container">
    <img id="avatar" src="http://www.fillmurray.com/100/100" alt="fill murray">
    <h3>Bill Murray</h3>
    <h4>loan officier</h4>
    <div class="link-container">
      <a href="#">charlotte ops</a>
      <a href="#">virgina ops</a>
      <a href="#">pheonix ops</a>
      <a href="#">richmond ops</a>
      <a href="#">company wide</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .sidebar-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 250px;

    #avatar{
      height: 100px;
      width: 100px;
      border-radius: 50%;
      margin: 40px 0;
    }

    h3,h4{
      margin: 10px 0;
      text-transform: uppercase;
      font-family: 'Oswald', sans-serif;
      letter-spacing: 2px;
    }

    h3{
      font-weight: 500;
    }

    .link-container{
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 80px;
      font-family: 'Open Sans', sans-serif;

      a{
        text-align: center;
        padding: 15px 0;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;

        &:hover{
          color: red;
        }
      }
    }
  }
</style>
