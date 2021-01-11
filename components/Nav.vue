<template>
  <nav>
  <header>
  <div class="header-top-area">
    <div class="container">
    <div class="row">
      <div class="col-lg-6">
      <div class="header-top-menu">
        <ul>
        <li><a href="#google_map">Accepting Patients During Covid-19 Lockdown</a></li>
        </ul>
      </div>
      </div>
      <div class="col-lg-6">
      <div class="header-top-right">
        <div class="contact-info">
        <img src="~/assets/img/icons/envelope.svg" />
        <a href="mailto=:newpatients@DentistryonDundas.com">newpatients@DentistryonDundas.com</a>
        </div>
        <div class="social-links">
        <a href="https://www.facebook.com/dentistryondundas/"><img src="~assets/img/icons/facebook.svg" /></a>
        <a href="https://twitter.com/DentistryDundas"><img src="~assets/img/icons/twitter.svg" /></a>
        <a href="https://www.youtube.com/user/DentistryonDundas"><img src="~assets/img/icons/youtube.svg" /></a>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>
  <div class="header-info-area">
    <div class="container">
    <div class="row">
      <div class="col-12">
      <div class="header-border">
        <div class="row">
        <div class="col-lg-3 col-6">
          <nuxt-link to="/" class="site-logo">
            <img src="~assets/img/dod-logo-horizontal.svg" alt="Logo">
          </nuxt-link>
        </div>
        <div class="col-lg-9 col-6 mobile-hide">
          <div class="header-infos">
            <div class="header-info d-flex f-left">
              <a href="https://goo.gl/maps/wYBGsgqA53TdiUnK6" target="_blank">
              <div class="icon">
              <img src="~/assets/img/icons/map-marker.svg" />
              </div>
              </a>
              <a href="https://goo.gl/maps/wYBGsgqA53TdiUnK6" target="_blank">
              <div class="content">
              <span>Office Address</span>
              <h4>107 Dundas St. E</h4>
              </div>
              </a>
            </div>
            <div class="header-info d-flex f-left mobile-hide">
              <a href="tel:905-666-1555">
              <div class="icon">
              <img src="~/assets/img/icons/telephone.svg" />
              </div>
              </a>
              <a href="tel:905-666-1555">
              <div class="content">
              <span>Office Phone</span>
              <h4>(905) 666-1555</h4>
              </div>
              </a>
            </div>
            <a href="#google_map" class="site-btn">Book Appointment</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>
  <!-- menu-area appears on desktop -->
  <div class="menu-area d-none d-lg-block">
    <div class="container">
    <div class="row">
      <div class="col-xl-8 col-lg-10">
        <div class="mainmenu">
          <nav>
            <ul>
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/services">Services</nuxt-link>
                <ul class="submenu">
                  <li><nuxt-link to="/services/checkup">Checkup</nuxt-link></li>
                  <li><nuxt-link to="/services/procedures">Procedures</nuxt-link></li>
                  <li><nuxt-link to="/services/cosmetic">Cosmetic</nuxt-link></li>
                </ul>
              </li>
              <li>
                <a href="/gallery">Before & After</a>
              </li>
              <li>
                <nuxt-link to="/about-us">About Us</nuxt-link>
                <ul class="submenu">
                  <li><nuxt-link to="/about-us">Our Mission</nuxt-link></li>
                  <li><nuxt-link to="/about-us/staff">Staff</nuxt-link></li>
                </ul>
              </li>
              <li>
                <nuxt-link to="/office-news">Office News</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#google_map">Contact</nuxt-link>
                <ul class="submenu">
                  <li><nuxt-link to="/new-patients">New Patients</nuxt-link></li>
                  <li><nuxt-link to="/financing">Financing</nuxt-link></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </div>
  </div>
  <!-- mobile menu-area appears on mobile -->
  <div class="mobile-menu-area">
    <div id="menuToggle">

      <div class="toggle">
        <span type="checkbox"></span>
      </div>
      <nav id="mobileNav">
        <ul>
          <li class="menuTitle">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <div class="dropdown">
          <!-- <button class="dropbtn">
            Dropdown 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div> -->
        </div> 
          <li class="arrow menuTitle">
            <nuxt-link to="/services">Services</nuxt-link>
            <ul class="submenu">
              <li><nuxt-link to="/services/checkup">Checkup</nuxt-link></li>
              <li><nuxt-link to="/services/procedures">Procedures</nuxt-link></li>
              <li><nuxt-link to="/services/cosmetic">Cosmetic</nuxt-link></li>
            </ul>
          </li>
          <li class="menuTitle">
            <nuxt-link to="/gallery">Before & After</nuxt-link>
          </li>
          <li class="arrow menuTitle">
            <nuxt-link to="/about-us">About Us</nuxt-link>
            <ul class="submenu">
              <li><nuxt-link to="/about-us">Our Mission</nuxt-link></li>
              <li><nuxt-link to="/about-us/staff">Staff</nuxt-link></li>
            </ul>
          </li>
          <li class="menuTitle">
            <nuxt-link to="/office-news">Office News</nuxt-link>
          </li>
          <li class="arrow menuTitle">
            <nuxt-link to="#google_map">Contact</nuxt-link>
            <ul class="submenu">
              <li><nuxt-link to="/new-patients">New Patients</nuxt-link></li>
              <li><nuxt-link to="/financing">Financing</nuxt-link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  </header>
  </nav>
</template>

<script>
export default {
  mounted: function() {
    var toggle = document.getElementById("menuToggle");
    var menu = document.getElementById('mobileNav');
    var body = document.getElementsByTagName('body')[0];

    toggle.addEventListener("click", function() {
      this.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('no-scroll');

    });
  }
}
</script>

<style lang="stylus" scoped>

#menuToggle 
  display flex 
  flex-direction column 
  position relative
  height 100%
  z-index 1
  user-select none
  -webkit-user-select none
  &.active
  #mobileNav
    display none
    position absolute
    background white 
    z-index 1
    width 100%
    height 88%
    top 104px
    left 0 
    right 0 
    bottom 0 
    overflow-y scroll
    &.active
      display block
    .menuTitle
      font-weight 600
    .arrow
      padding 0 auto
      .submenu
        margin-top 0.5rem
      li
        display block
        padding 0 1.6rem
        font-weight 500
        background-image url('~assets/img/icons/forward.svg')
        background-repeat no-repeat
        background-position left center
        background-size 1rem

  .toggle
    padding 1.2rem
    background #bc8452
    span
      display block
      width 2.4rem
      height 2.4rem
      background-image url('~assets/img/icons/menu.svg')
      background-repeat no-repeat
      background-position left center
  &.active
    .toggle
      span
        background-image url('~assets/img/icons/back.svg')
      
    input 
      display flex 
      width 4rem 
      height 3.2rem 
      position absolute 
      cursor pointer 
      opacity 0
      z-index 2  

.mobile-menu-area 
  display block
  +media('md')
    display none
  nav 
    ul 
      li
        padding 0 1.6rem 1rem 1.6rem

.mobile-hide
  display none
  +media('md')
    display block

a:not(.site-btn) 
  color inherit	
/* header-top */
.header-top-area
  background #F4F9FC
  padding 10px 0
  +media('smDown')
    display none

.header-top-menu
  a
    color #6C675C
    font-weight 500
    font-size 14px
    &:hover
      color $accent-color
  ul
    display -webkit-box
    display -ms-flexbox
    display flex
    li
      &:not(:first-child)
        margin-left 25px
      &:last-child
        position relative
        a
          color $accent-color
        &::after
          border-bottom 1px solid $accent-color
          content ""
          position absolute
          left 0
          bottom 0
          width 100%

.header-top-right
  display -webkit-box
  display -ms-flexbox
  display flex
  -webkit-box-pack end
  -ms-flex-pack end
  justify-content flex-end
  -webkit-box-align center
  -ms-flex-align center
  align-items center

.contact-info
  margin-right 30px
  i
    color $accent-color
    font-size 14px
    margin-right 8px
  a
    color #6C675C
    font-weight 500

.social-links
  display -webkit-box
  display -ms-flexbox
  display flex
  -webkit-box-align center
  -ms-flex-align center
  align-items center
  a
    display inline-block
    height 30px
    width 30px
    text-align center
    font-size 12px
    -webkit-box-shadow 0px 0px 10px 0 #70707069
    box-shadow 0px 0px 10px 0 #70707069
    line-height 30px
    background $accent-color
    border-radius: 50%
    color #6C675C
    &:not(:last-child)
      margin-right 7px
    &:hover
      background $accent-color
      color #fff

.header-info-area
  padding-top 32px
  .content
    padding-top 0.25rem

.header-border
  padding-bottom 32px
  +media('md')
    border-bottom 1px solid $accent-color

.header-infos
  display -webkit-box
  display -ms-flexbox
  display flex
  -webkit-box-align center
  -ms-flex-align center
  align-items center
  -webkit-box-pack end
  -ms-flex-pack end
  justify-content flex-end
  .site-btn
    margin-left 45px
    padding 13px 27px
  .header-info
    &:first-child
      margin-right 45px

.header-info
  .icon
    width 55px
    height 55px
    font-size 22px
    text-align center
    line-height 55px
    border-radius 50%
    color $accent-color
    background $accent-highlight
    margin-right 20px
  span
    color #6C675C
    font-weight 500
    font-size 16px
  h4
    color #223645
    font-size 16px
    font-weight 600
    margin-top 5px

.mainmenu
  a
    font-size 16px
    font-weight 600
    color #223645
    display block
    padding 28px 0
  ul
    display inline-block
    li
      position relative
      display inline-block
      &:not(:first-child)
        margin-left 20px
      &:hover
        .submenu
          top 100%
          opacity 1
          visibility visible
    .submenu
      position absolute
      min-width 240px
      top 110%
      left 0
      z-index 99
      padding 25px 0
      border-top 5px solid $accent-color
      background #fff
      opacity 0
      visibility hidden
      -webkit-transition .3s
      -o-transition .3s
      transition .3s
      -webkit-box-shadow 0px 0px 10px 0 #70707012
      box-shadow 0px 0px 10px 0 #70707012
      li
        display block
        margin 0
        a
          padding 11px 30px
          display block
          color #223645
      a
        &:hover
          color $accent-color
    & > li
      &:hover
        > a
            color $accent-color
</style>