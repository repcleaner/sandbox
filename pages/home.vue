<template>
<div class="app">
  <div class="nav">
    <!-- create a drop down menu here -->
    <img src="https://img.icons8.com/carbon-copy/2x/menu.png" alt="Nav Logo">
  </div>

  <div class="main">
    <h1>Give-away</h1>
     <!-- make amount decrease by 1 after button is clicked -->
    <h2>Amount of spins left 03</h2>
  </div>

  <!-- Make button go to next gift after click -->
  <button class="shuffle-button"> Shuffle</button>
  <!--<img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-shuffle-512.png" alt="">-->
  <div class="gift">
     <h1>Description of reward goes here</h1>
    <img src="https://www.420magazine.com/wp-content/uploads/2017/06/Grandaddy-Purple-@andrewlery.jpg" alt="Beutiful Nug">
     <h2>weight of weed 3.5g</h2>
  </div>
  <!-- Make button Compoent to deacres by 1 until it hits 0-->
  <button class="button">Send your friends free weed</button>
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
  border 0
  margin 0px
  width 150px /* you can use % */
  height: auto;

.app 
  width 900px
  height 1200px
  border 15px color #000000
  padding 50px
  margin 40px
  background dodgerblue
  border-radius 15px
  
.main 
  width 900px
  border 0
  padding 50px
  margin 20px

.gift
  width 700px
  border 15px solid green
  padding 30px
  flex-direction center

.button 
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  .shuffle
    width 900px
    padding-left 300px
    border-radius 50%
    
  .button-hover {background-color #3e8e41}
  .button-active 
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);


  
  

  

</style>