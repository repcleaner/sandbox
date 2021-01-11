<template>
  <div class="masthead single-hero-item d-flex align-items-center bg_img">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-10">
          <div class="slide-content">
            <h1 class="title" data-animation="fadeInUp" data-delay=".3s" data-duration=".5s">
              Creating great smiles,
              <br>
              for a great community
            </h1>
            <div class="content" data-animation="fadeInUp" data-delay=".5s" data-duration=".7s">
              <p>
                Dentistry on Dundas has been proudly serving the Whitby community for over 30 years!
                <br><br><br>
              </p>
              <!-- <span>Whitby's number one rated dental&nbsp;clinic</span> -->
            </div>
            <div class="slide-btns">
              <nuxt-link to="new-patients" class="site-btn" data-animation="fadeInUp" data-delay=".9s" data-duration=".7s">
                New Patients
              </nuxt-link>
              <nuxt-link to="financing" class="site-btn secondary" data-animation="fadeInUp" data-delay="1.1s" data-duration=".9s">
                Financing
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
if (process.client) { require('v-owl-carousel') }
export default {

}
</script>

<script>

  // const carousel = () => window && window !== undefined ? import("vue-owl-carousel") : null;
  export default {
    // if wanting to enable carousel 
  // components: { carousel },
  // data() {
  //   return {
  //     isNuxtReady: false,
  //  }
  // },
  // mounted() {
  //   const vm = this;
  //   if (process.browser) {
  //     window.onNuxtReady(app => {
    // 			console.log("Nuxt ready!");
    // 			$(document).ready(function(){
    // 				$(".owl-carousel").owlCarousel();
    // 			});
  //       vm.isNuxtReady = true;
  //     });
  //   }
  // },
  }
</script>


<style lang="stylus" scoped>

.masthead 
  background: url('~assets/img/teamwork.jpg')	
  background-repeat no-repeat 
  background-size cover
  color white
  .slide-content
    h1 
      font-family 'Playfair Display', serif
    h1, p
      color white 

/* 3. Slider area */
.slide-content
  &::before
    content ''
    position absolute
    width 300px
    height 300px
    background url('~assets/img/dod-logo-tree-white.svg')	
    background-size 100%
    background-repeat no-repeat
    background-position center
    opacity 1
    top 50%
    right 0
    transform translateY(-50%)
    +media('mdDown')
      display none
  img
    width auto !important
  .title
    font-size 80px
    color #223645
    font-weight 700
    margin 18px 0
    margin-bottom 12px
    +media('mdDown')
      font-size 50px
  .content
    color #5C6C80
    font-size 18px
    font-weight 600
    line-height 28px
    span
      display block
      font-style italic
      color $title-color
      text-transform uppercase
      letter-spacing 2px
      font-weight 700
      margin-top 30px
      margin-bottom 42px

.single-hero-item
  min-height 750px

.slide-btns
  display -webkit-box
  display -ms-flexbox
  display flex
  a
    padding 18px 43px
    &:first-child
      margin-right 10px
  .site-btn
    &::after
      background $accent-highlight
    &:hover
      &::after
        background #3ba441
    &.secondary
      &:hover
        &::after
          background $accent-highlight

.site-btn
  &.secondary
    &::after
      background #3ba441

.hero-area .owl-nav div,
.service-details-carousel .owl-nav div
  position absolute
  top 50%
  left 100px
  -webkit-transform translateY(-50%)
  -ms-transform translateY(-50%)
  transform translateY(-50%)
  opacity 0
  visibility hidden
  -webkit-transition .3s
  -o-transition .3s
  transition .3s
  color #223645

.hero-area
  .owl-nav
    div
      &.owl-next
        left auto
        right 100px
        opacity 0
        visibility hidden
        -webkit-transition .3s
        -o-transition .3s
        transition .3s
  &:hover
    .owl-nav
      div
        &.owl-prev
          left 70px
          opacity 1
          visibility visible
        &.owl-next
          right 70px
          opacity 1
          visibility visible

.hero-area-2
  .single-hero-item
    z-index 1
    &::before
      z-index -1
    .sub-title
      color #fff
      font-size 18px
      text-transform uppercase
      font-style italic
      font-weight 700
    .title
      color #fff
      margin-bottom 25px
    .content
      color #fff
    .slide-btns
      -webkit-box-pack center
      -ms-flex-pack center
      justify-content center
      margin-top 45px
      -webkit-box-align center
      -ms-flex-align center
      align-items center
      .inline-btn
        color #fff
  .owl-nav
    div
      border-color transparent
      background #fff
      color #0060a7
      z-index 9
      border-color transparent
      &:hover
        background #0060a7
        color #fff
        border-color transparent
        background $accent-color

.heaheroder-area-2
  .single-hero-item
    .slide-btns
      .inline-btn
        &::after
          border-color #fff
</style>
