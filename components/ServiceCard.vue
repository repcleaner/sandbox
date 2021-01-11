<template>
  <div class="mt-30 service-card">
    <div class="single-service-box">
      <div class="thumbnail-wrapper">
        <nuxt-link :to="slug">
        <div class="thumb" :style="{ backgroundImage: `url(/img/services/${serviceImage})` }">
          &nbsp;
        </div>
        </nuxt-link>
      </div>
      <div class="content">
        <nuxt-link :to="slug">
        <div class="icon">
          <!-- <i class="flaticon-teeth"></i> -->
          <img :src="`/img/icons/${serviceIcon}`" />
        </div>
        </nuxt-link>
        <h3 class="title">
          {{title}}
        </h3>
        <p class="paragraph">{{blurb}}</p>
        <!-- <nuxt-link :to="`services` + slug" class="inline-btn"><span>Learn More</span> <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 37.058594 12.980469 C 36.246094 12.949219 35.492188 13.414063 35.160156 14.15625 C 34.824219 14.898438 34.96875 15.765625 35.53125 16.359375 L 41.675781 23 L 3 23 C 2.277344 22.988281 1.609375 23.367188 1.246094 23.992188 C 0.878906 24.613281 0.878906 25.386719 1.246094 26.007813 C 1.609375 26.632813 2.277344 27.011719 3 27 L 41.675781 27 L 35.53125 33.640625 C 35.03125 34.164063 34.855469 34.914063 35.066406 35.605469 C 35.277344 36.296875 35.84375 36.820313 36.546875 36.976563 C 37.253906 37.132813 37.988281 36.894531 38.46875 36.359375 L 48.972656 25 L 38.46875 13.640625 C 38.109375 13.242188 37.597656 13 37.058594 12.980469 Z"/></svg></nuxt-link> -->
        <nuxt-link :to="slug" class="inline-btn"><span>Learn More</span> <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 37.058594 12.980469 C 36.246094 12.949219 35.492188 13.414063 35.160156 14.15625 C 34.824219 14.898438 34.96875 15.765625 35.53125 16.359375 L 41.675781 23 L 3 23 C 2.277344 22.988281 1.609375 23.367188 1.246094 23.992188 C 0.878906 24.613281 0.878906 25.386719 1.246094 26.007813 C 1.609375 26.632813 2.277344 27.011719 3 27 L 41.675781 27 L 35.53125 33.640625 C 35.03125 34.164063 34.855469 34.914063 35.066406 35.605469 C 35.277344 36.296875 35.84375 36.820313 36.546875 36.976563 C 37.253906 37.132813 37.988281 36.894531 38.46875 36.359375 L 48.972656 25 L 38.46875 13.640625 C 38.109375 13.242188 37.597656 13 37.058594 12.980469 Z"/></svg></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'blurb', 'serviceImage', 'serviceIcon', 'slug'],
}
</script>

<style lang="stylus" scoped>
/* 6.Services  css*/
.service-card
  width 22rem
  border-radius 0.5rem
  box-shadow 0 0 10px #eef1f2
  +media('mdDown')
    width 100%
  &:nth-child(odd)
    margin-right 1rem
    +media('mdDown')
      margin 0 auto
      margin-top 2rem
  &:nth-child(even)
    +media('mdDown')
      margin 0 auto
      margin-top 2rem
  +media('smDown')
    width 90%
    margin 0 auto
    margin-top 2rem

.service-area {
  background: #F4F9FC;
}

.service-area .section-heading {
  margin-bottom: 70px;
}

.service-prvide-area {
  border-top: 2px solid #EDEDED;
  margin-top: 50px;
  padding-top: 130px;
}

.single-service-box
  border-radius 0.5rem
  background: #fff
  overflow hidden
  .thumbnail-wrapper 
    overflow hidden
    .thumb
      transition all 0.75s ease

.single-service-box .thumb
  width 22rem
  height 15rem
  border-radius 0.5rem 0.5rem 0 0
  background-size cover
  +media('mdDown')
    width 100%

.single-service-box .title {
  font-family: $bodyFont;
  font-size: 26px;
  font-weight: 700;
  color: #223645;
  margin-bottom: 17px;
}

.single-service-box .title a { color: inherit; }

.single-service-box:hover .thumb {
  transform scale(1.05)
}

.single-service-box .title a {
  -webkit-transition: .2s ease;
  -o-transition: .2s ease;
  transition: .2s ease;
}

.single-service-box .icon {
  position: absolute;
  display: inline-block;
  height: 70px;
  width: 70px;
  background: #fff;
  text-align: center;
  line-height: 70px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 10px 20px 0 rgba(50, 50, 93, 0.2);
  box-shadow: 0px 10px 20px rgba(50, 50, 93, 0.2);
  top: -35px;
}

.single-service-box .icon i::before {
  font-size: 35px;
  margin: 0;
  color: $accent-color;
}

.single-service-box .content {
  position: relative;
  padding: 3.5rem 2rem 2.1875rem 2rem;
  font-weight: 500;
}

.single-service-box .service-meta {
  margin-top: 28px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 40px;
}

.single-service-box .service-meta .meta-thumb {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 20px;
}

.single-service-box .service-meta .meta-content h4 {
  font-size: 18px;
  font-weight: 700;
  color: #223645;
  margin-bottom: 5px;
}

.single-service-box .service-meta .meta-content span {
  color: $accent-color;
  font-weight: 500;
}

.single-service-box .inline-btn {
  display: block;
  width: 100%;
  color: #223645;
  text-align: right; 
}

.single-service-box .inline-btn svg {
  max-width: 1rem;
  margin-left: 1rem;
}

.single-service-box .inline-btn:hover span {
  color: $accent-color;
  cursor: pointer;
}

.single-service-box .inline-btn span::after {
  border-color: #223645;
  opacity: 0;
}

.single-service-box .inline-btn:hover span::after {
  border-color: $accent-color;
  opacity: 1;
}

.single-service-box .inline-btn:hover {
  color: $title-color;
  cursor: pointer;
}

.service-area .site-btn {
  margin-top: 80px;
}

@media (max-width: 575px) {
  .mt-30 {
    margin: 0;
  }
}

</style>