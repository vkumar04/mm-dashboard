<template>
  <div class="sidebar-container">
    <img id="avatar" src="http://www.fillmurray.com/100/100" alt="fill murray">
    <h3>Bill Murray</h3>
    <h4>loan officier</h4>
    <div class="link-container">
      <a class="active" href="#">charlotte ops</a>
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
    font-family: 'Oswald', sans-serif;
    background: #B82B35;
    color: #fff;

    #avatar{
      height: 100px;
      width: 100px;
      border-radius: 50%;
      margin: 40px 0 20px 0;
    }

    h3{
      margin: 10px 0;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 24px;
    }

    h4{
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 12px;
    }

    .link-container{
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 80px;
      font-family: 'Open Sans', sans-serif;
      letter-spacing: 2px;

      a{
        padding: 20px 0;
        padding-left: 40px;
        text-transform: uppercase;
        text-decoration: none;
        color: #fff;
        transition: 0.3s ease all;

        &:hover{
          background-color: darken(#B82B35, 10%);
          padding-left: 60px;
        }

        &.active{
          background-color: #fff;
          color: #B82B35;
          border-left: 16px solid darken(#B82B35, 10%);
        }
      }
    }
  }
</style>
