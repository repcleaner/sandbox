<template>
  <!-- get quote area start -->
  <section class="get-quote-area get-quote-area-3 pt-130 pb-130 bg_img" data-overlay="23">
    <iframe id="google_map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD0ZCM9OAP8NwYerXKGw6i5XJuBqZEFYwE&q=Dentistry+On+Dundas+107+Dundas+St+E%2C+Whitby%2C+ON+L1N+2H6&center=43.879883,-78.939455&zoom=18" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen aria-hidden="false" tabindex="0"></iframe>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-5 offset-6 get-quote-content get-quote-content-3">
          <div class="section-heading">
            <h2 class="title">Contact Us</h2>
          </div>
          <div class="get-quote-form">
            <form action="#" v-on:submit.prevent="submitToAPI($event)" method="post">
              <div class="from-groups">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" id="name" placeholder="Sokila DJ Maxien" v-model="form.name">
                  <span><i class="fal fa-user"></i></span>
                </div>
                <div class="form-group">
                  <label for="mail">Email Address</label>
                  <input type="email" id="mail" placeholder="sokilainfo@gmail.com" v-model="form.email">
                  <span><img src="~/assets/img/icons/envelope.svg" /></span>
                </div>
                <div class="form-group">
                  <label for="tel">Phone Number</label>
                  <input type="tel" id="tel" placeholder="416-567-1234" v-model="form.phone">
                  <span><i class="fal fa-phone"></i></span>
                </div>
                <div class="form-group">
                  <label for="subject">How can we help?</label>
                  <select name="subject" id="subject" v-model="form.subject">
                    <option value="Regular Checkup">Regular Checkup</option>
                    <option value="New Patient Visit">New Patient Visit</option>
                    <option value="Ongoing Treatment">Ongoing Treatment</option>
                    <option value="Cosmetic Procedure">Cosmetic Procedure</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                </div>
              </div>
              <button class="site-btn" type="submit">Book Appointment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- get quote area end -->
</template>

<script>
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  import axios from 'axios'

  export default {
    data() {
      return {
        form: {
          name: '',
          email: '', 
          phone: '',
          subject: 'Regular Checkup'
        }
      } 
    },
    methods: {
      submitToAPI() {
        event.preventDefault();
        axios.post('https://kibozytvxk.execute-api.us-west-2.amazonaws.com/production/request-booking', this.form) 
          .then((res) => {
            // success action 
            window.location = '/booking-confirmed'
          })
          .catch((error) => {
            // error.response.status CHeck status code 
          }).finally(() => {

          });
      }
    }
  }


</script>

<style lang="stylus" scoped>
/* 17. Get qoute css */

.get-quote-area
  background-position left
  background-size 60%
  background-repeat no-repeat
  #google_map 
    position absolute 
    top 0
  .get-quote-area
    margin-top -80px
    position relative
    z-index 2
  .col-md-5
    padding-right 0
  .section-heading
    margin-bottom 30px
    .sub-title
      margin-bottom 13px

.get-quote-content
  background #fff
  padding-left 50px
  padding-top 65px
  padding-bottom 65px
  -webkit-box-shadow 0px 15px 30px #F5F5F5
  box-shadow 0px 15px 30px #F5F5F5
  border-radius 12px

.from-groups
  display -webkit-box
  display -ms-flexbox
  display flex
  -ms-flex-wrap wrap
  flex-wrap wrap
  .form-group
    position relative
    -ms-flex-preferred-size 50%
    flex-basis 50%
    padding 10px
    margin-bottom 5px
    padding-left 0
    +media('md')
      padding-left 10px
    span
      font-size 14px
      position absolute
      right 30px
      -webkit-transform translateY(19px)
      -ms-transform translateY(19px)
      transform translateY(19px)
      color $accent-color
      &.current
        position inherit
        -webkit-transform translateY(0)
        -ms-transform translateY(0)
        transform translateY(0)
        right 0
        line-height 60px
        color #8A8A8A
        font-size 14px
    input,
    #subject
      padding 17px 20px
      border 2px solid transparent
      font-size 14px
      color #8A8A8A
      width 100%
      margin-bottom 0
      -webkit-transition .3s
      -o-transition .3s
      transition .3s
      background #E8F0F5
      &::-webkit-input-placeholder
        color #8A8A8A
      &::-moz-placeholder
        color #8A8A8A
      &:-ms-input-placeholder
        color #8A8A8A
      &::-ms-input-placeholder
        color #8A8A8A
      &::placeholder
        color #8A8A8A
    .nice-select
      width 100%
      text-align left
      height 60px
      background #E8F0F5
      border-color transparent
      padding-left 20px
      border 2px solid transparent
      &:hover
        border-color $accent-color
        color #8A8A8A
        background #fff
      &:after
        content "\f107"
        font-family "Font Awesome 5 Pro"
        border 0
        -webkit-transform translate(-10px, -14px)
        -ms-transform translate(-10px, -14px)
        transform translate(-10px, -14px)
        top 50%
        position absolute
        color $accent-color
  .nice-select
    .option
      &.selected
        font-weight 600

.get-quote-form
  .site-btn
    border transparent
    margin-left 10px
    padding 18px 47px
    margin-top 6px
    margin-top 15px
  .form-group
    label
      display block
      color #223645
      font-weight 600
      font-size 18px
      margin-bottom 12px

.from-groups .form-group input:focus,
.from-groups .form-group input:hover
  border-color $accent-color
  color #8A8A8A
  background #fff

.form-group
  .nice-select
    &.open
      .list
        width 100%

.get-quote-area-3
  z-index 1
  margin 0
  &:hover 
    &::before 
      z-index -1
  &::before
    z-index -1


.get-quote-content-3
  z-index 10
  .get-quote-form
    padding-right 25px
    .from-groups
      margin-left -10px
    .site-btn
      margin-left 0

.best-dr-content
  padding-top 100px
  padding-left 20px
  .section-heading
    .content
      line-height 30px
      span
        color #223645
        font-size 16px
        font-weight 500
        margin-bottom 15px
        display inline-block
    .inline-btn
      margin-top 20px
      display inline-block
    .title
      margin-bottom 49px
      color $title-color
      font-family 'Playfair Display', serif
      font-weight: bold
      font-size 42px
      line-height 56px

.welcome-bg-2
  position relative
  margin-top 90px
  img
    max-width inherit
    border-radius 0px 0px 60px 0px
  &::after
    position absolute
    right -90px
    bottom -30px
    content ""
    background $accent-color
    height 100px
    width 100px
    border-radius 50%
    z-index -1

.service-prvide-area
  .single-service-box
    padding 0
    padding 0 30px
    &:hover
      .icon
        background transparent
        -webkit-box-shadow none
        box-shadow none
    .icon
      background transparent
      -webkit-box-shadow none
      box-shadow none
    .inline-btn
      color #6C675C

.single-service-box
  .thumb
    overflow hidden
    img
      -webkit-transition .3s
      -o-transition .3s
      transition .3s
  &:hover
    .thumb
      img
        -webkit-transform scale(1.1)
        -ms-transform scale(1.1)
        transform scale(1.1)

.find-doctor-area
  padding-bottom 130px

@media (max-width: 590px) {
  .get-quote-content-3 .get-quote-form .from-groups .form-group {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .offset-6 {
    margin-left: 0;
  }
}

@media (max-width: 575px) {
.get-quote-content {
    padding-left: 15px;
  }

  .get-quote-form .site-btn {
    margin-left: 0;
  }

  .get-quote-content-3 .get-quote-form .from-groups {
    margin-left: 30px;
  }

  .get-quote-area-3 .section-heading {
    padding-left: 30px;
  }

  .get-quote-content-3 .get-quote-form .site-btn {
    margin-left: 30px;
  }
}
</style>