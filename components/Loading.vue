<template lang="html">
  <div class="loading-page" v-if="loading">
		<div class="loader">
			<span class="dot"></span>
			<span class="dot"></span>
			<span class="dot"></span>
			<span class="dot"></span>
			<span class="dot"></span>
		</div>
  </div>
</template>

<script>
export default {
	mounted: function() {
	},
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped lang="stylus">
.loading-page 
  position: fixed;
  z-index: 10;
  display: flex; 
  align-items: center; 
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;

$red = #EE2556
$yellow = #FBA900
$blue = #0054B0
$purple = #9D49DF
$teal = #00C0A5
.loader 
  position relative
  width 3rem
  height 3rem
  animation spin 5s ease infinite
  transform-origin 50%
  transform scale(0) rotate(0deg)
  transition all 0.1s cubic-bezier(.35,.7,.24,1.2)
  &.active 
    transform scale(1)
  .dot
    position absolute
    display block
    width 0.625rem
    height 0.625rem 
    border-radius 100%
    &:nth-child(1)
      left 50%
      transform translate(-50%, 0)
      background $yellow
    &:nth-child(2)
      right 0 
      top 43% 
      transform translate(0%, -50%)
      background $blue
    &:nth-child(3)
      bottom 0 
      left 75%
      transform translate(-50%, 0)
      background $teal
    &:nth-child(4)
      bottom 0 
      left 25% 
      transform translate(-50%, 0)
      background $purple
    &:nth-child(5)
      left 0
      top 43%
      transform translate(0, -50%)
      background $red
      

@keyframes spin
  20% 
    transform scale(1) rotate(360deg)
  40% 
    transform scale(1) rotate(0deg)
  90%
    transform scale(1) rotate(0deg)
  100%
    transform scale(0) rotate(0deg)
</style>