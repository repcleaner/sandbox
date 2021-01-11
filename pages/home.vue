<template>
<div class=app>
  <div class=nav>
    <!-- create a drop down menu here -->
    <img src="" alt="Nav Logo">
  </div>
  <div class=''>
    <!-- Make button go to next gift after click -->
    <button> Shuffle</button>
    <img src="" alt="">
  </div>
  <div class='main'>
    <h1>Give-away</h1>
     <!-- make amount decrease by 1 after button is clicked -->
    <h2>Amount of spins left 03</h2>
    <p>Description of reward goes here</p>
    <img src="https://www.420magazine.com/wp-content/uploads/2017/06/Grandaddy-Purple-@andrewlery.jpg" alt="Beutiful Nug">
  </div>
  <!-- Make button Compoent to deacres by 1 until it hits 0-->
  <div class='button'>
    <button>Send your friends free weed</button>d
  </div>
</div>
</template>

<script>
export default {
  layout: 'sandbox'
}
</script>

<style lang="stylus" scoped>

.nav 
  width 900px
  border 15px solid #008000
  margin 20px
  

.app 
  width 900px
  height 1200px
  border 15px black
  padding 50px
  margin 0px
  
.main 
  width 900px
  border 15px solid green
  padding 50px
  margin 20px


.button 
  width 900px
  border 15px solid green
  padding-left 300px
  margin 20px
  flex-direction center
  .shuffle
    width 900px
    padding-left 300px

</style>