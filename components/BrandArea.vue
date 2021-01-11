<template>
  <div class="brand-area bg-2 pt-130 pb-130">
    <div class="container">
      <div class="row">
        <h2 class="title"><span class="mobile-hide">&nbsp;&nbsp;&nbsp;</span>Most insurance plans&nbsp;accepted<span class="mobile-hide">&nbsp;&nbsp;&nbsp;</span></h2>
        <h3 class="subtitle">here are a few popular choices</h3>
        <div class="col-lg-12 insurance-logos">
          <a href="https://gwl.greatwestlife.com/MyLogin" target="_blank">
          <div class="single-brand-item">
            <img src="~assets/img/insurance-logos/canadalife.svg" />
          </div>
          </a>
          <a href="https://www.claimsecure.com/secure/eprofile/external_login.aspx?wcid=17212" target="_blank">
          <div class="single-brand-item">
            <img src="~assets/img/insurance-logos/claimsecure.svg" />
          </div>
          </a>
          <a href="https://onlineservices.greenshield.ca/PlanMember/AccessMgmt/Public/SignOn.aspx" target="_blank">
          <div class="single-brand-item logo-3">
            <img src="~assets/img/insurance-logos/gsc.png" />
          </div>
          </a>
          <a href="https://groupnet.greatwestlife.com/public/signin/login.public" target="_blank">
          <div class="single-brand-item">
            <img src="~assets/img/insurance-logos/gwl.svg" />
          </div>
          </a>
          <a href="https://www.manulife.ca/personal/insurance/health-insurance/health-and-dental.html" target="_blank">
          <div class="single-brand-item">
            <img src="~assets/img/insurance-logos/manulife.svg" />
          </div>
          </a>
          <a href="https://www.sunlife.ca/en/support/sign-in-help/my-sun-life/" target="_blank">
          <div class="single-brand-item">
            <img src="~assets/img/insurance-logos/sunlife.svg" />
          </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="stylus" scoped>
.mobile-hide
  +media('mdDown')
    display none
.title
  position relative
  width 100%
  margin-bottom 1rem
  font-family 'Playfair Display', serif
  font-weight: bold
  font-size 42px
  text-align center
  color $title-color
  line-height 56px
  +media('mdDown')
    font-size 2rem
    line-height 2.5rem
  &:before,
  &:after
    position absolute
    overflow hidden
    width 17rem
    height 1px
    top 50%
    content '\a0'
    background-color #bc8452
    +media('mdDown')
      display none
  &:before
    margin-left -17rem
    text-align right
    +media('mdDown')
      display none
.subtitle
  width 100%
  margin-bottom 3rem
  font-size 16px
  text-align center

/* 13. Brand css */
.insurance-logos
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  width 100%
  +media('md')
    a
      transition all 0.3s ease 
      will-change transform
      moz-backface-visibility hidden 
      -webkit-backface-visibility hidden
      &:hover 
        transform translate3d(0,-0.5rem, 0)
  +media('mdDown')
    flex-wrap wrap
    justify-content space-evenly

.single-brand-item
  display -webkit-box
  display -ms-flexbox
  display flex
  -webkit-box-pack center
  -ms-flex-pack center
  justify-content center
  -webkit-box-align center
  -ms-flex-align center
  align-items center
  max-height 80px
  width 10rem
  &.logo-3
    width 6.5rem
  +media('mdDown')
    margin-bottom 2rem

.brand-carousel
  margin-top 100px
</style>