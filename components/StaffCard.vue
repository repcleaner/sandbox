<template>
  <nuxt-link :to="slug"  class="col-xl-3 col-lg-4 col-md-6 mt-40">
    <div class="single-team-box">
      <div class="thumb" :style="{ backgroundImage: `url(/img/staff/${staffImage})` }">
        
      </div>
      <div class="content">
        <h4 class="title">{{staffName}}</h4>
        <span class="designation">{{staffPosition}}</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['staffName', 'staffPosition', 'staffImage', 'slug'],
}
</script>

<style lang="stylus" scoped>
/* 7. Team css */
.hero-area .owl-nav div,
.dr-testimonial .owl-nav div,
#testimonial-3 .owl-nav div,
.team-caoursel .owl-nav div,
.service-carousel .owl-nav div,
.service-details-carousel .owl-nav div,
.news-carousel .owl-nav div {
    height: 55px;
    width: 55px;
    display: inline-block;
    border: 3px solid #DDDDDD;
    color: #8A8A8A;
    font-size: 16px;
    text-align: center;
    line-height: 54px;
    border-radius: 50%;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
}

.team-caoursel .owl-nav,
.news-carousel .owl-nav {
    position: absolute;
    right: 0;
    top: -115px;
}

.team-area .section-heading {
    margin-bottom: 50px;
}

.news-carousel .owl-nav div.owl-next,
.team-caoursel .owl-nav div.owl-next {
    margin-left: 10px;
}

.service-carousel .owl-nav div:hover,
.hero-area .owl-nav div:hover,
.news-carousel .owl-nav div:hover,
.team-caoursel .owl-nav div:hover {
    color: #fff;
    background: $accent-color;
    border-color: $accent-color;
}

.single-team-box .thumb
  width 17.25rem
  height 20rem
  background-size cover
  border-radius 0.5rem
  overflow hidden
  +media('mdDown')
    width 18rem
    height 24rem
    background-position center
  +media('smDown')
    width 100%
    height 32rem

.single-team-box .thumb img:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
}

.single-team-box .thumb img {
    width: 100%;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
}

.single-team-box .content {
    position: relative;
    margin: -45px 20px 0 20px;
    padding: 22px 0;
    border-radius: 0.5rem;
    text-align: center;
    background: #fff;
    box-shadow: 0 0 20px #acacac54;
    -webkit-box-shadow: 0 0 20px #acacac54;
    z-index: 1;
}

.single-team-box .content .social-links {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    top: -30px;
    visibility: hidden;
    background: #fff;
    padding-top: 25px;
    padding-bottom: 5px;
    opacity: 0;
    visibility: hidden;
    width: 0%;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    width: 100%;
}

.single-team-box .content .title {
    font-size: 18px;
    font-weight: 700;
    color: #223645;
    margin-bottom: 4px;
}

.single-team-box .content .designation {
    color: $accent-color;
    font-weight: 500;
    font-size: 14px;
}

.single-team-box {
  transition: all 0.5s ease;  
}

.single-team-box:hover {
   transform: translateY(-0.25rem);
}
</style>