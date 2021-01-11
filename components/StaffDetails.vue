<template>
  <!-- doctor details area start -->
  <section class="doctor-details-area pt-130 pb-130">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="doctor-details-sidebar">
            <div class="dr-profile">
              <div class="thumb" :style="{ backgroundImage: `url(/img/staff/${staffImage})` }">
              </div>
              <div class="content">
                <h4 class="title">{{staffName}}</h4>
                <span class="designation">{{staffTitle}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 dr-details-page-content">
          <div class="intro-text">
            <div class="section-heading">
              <h2 class="title">About Me</h2>
              </div>
              <p v-for="(item, index) in aboutMe" :key="item.id">
                {{aboutMe[index].text}}
              </p>
              <slot></slot>
          </div>
          <div class="education-content mt-40">
            <div class="section-heading">
              <!-- <h2 v-for="item in items" :key="item.message" class="title">
                {{ item.message }}
              </h2> -->
              <h2 v-for="(fact, index) in funFacts" :key="fact.id" class="title">
                {{funFacts[index].title}}
              </h2>
            </div>
            <div class="qualifications-list">
              <ul>
                <li v-for="(fact, index) in funFacts" :key="fact.id">
                  <b>{{funFacts[index].fact}}</b><span>{{funFacts[index].text}}</span>
                </li>
              </ul>
            </div>
            <div class="certificate mt-70">
              <div class="section-heading" >
                <h2 class="title">Other images</h2>
                <!-- <h2 v-for="(staffFun) in staffFun" :key="staffFun.id" class="title">Other images</h2> -->
              </div>
              <div class="certificate-img">
                <div class="row">
                  <div class="single-certificate col-lg-6 col-md-6 col-sm-6" v-for="(image, index) in staffFun" :key="image.id">
                      <img :src="`/img/staff/${staffFun[index].image}`" />
                      <!-- <img :src="`/img/staff/${staffFun[index].image2}`" />
                      <img :src="`/img/staff/${staffFun[index].image3}`" /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- doctor details area end -->
</template>

<script>
export default {
  props: ['staffName', 'staffTitle', 'staffImage', 'aboutMe', 'items', 'funFacts', 'staffFun'],
}
</script>

<style lang="stylus" scoped>
/* 25. Dr details css */
.doctor-details-area .section-heading .sub-title {
  margin-bottom: 12px;
}

.single-certificate {
  display: flex; 
  flex-direction: row; 
  align-items: flex-start;
  width: 100%;
}

// .single-certificate img {
//   max-width: 22.5rem; 
// }

.single-certificate:nth-child(3) 
  +media('md')
    margin-top 2rem

.doctor-details-area .section-heading {
  margin-bottom: 22px;
}

.doctor-details-area .section-heading .title {
  margin-bottom: 0;
  font-family 'Playfair Display', serif;
  font-weight bold
  font-size 42px
  line-height 56px
  color $title-color
}

.qualifications-list i {
  color: #BE9B64;
  margin-right: 10px;
}

.qualifications-list li:not(:last-child) {
  margin-bottom: 5px;
}

.gallery-widget .section-heading {
  margin-bottom: 30px;
}

.dr-details-page-content 
  padding-left: 16px;
  +media('md')
    padding-left: 40px;

.intro-text p {
  margin-bottom: 20px;
}

.intro-text p {
  font-weight: 500;
}

.thumb
  background-position center

.dr-profile .thumb img
  width 16.875rem
  height 20rem
  background-size cover
  border-radius 0.5rem
  overflow hidden
  +media('mdDown')
    width 18rem
    height 24rem
  +media('smDown')
    width 100%
    height 32rem

.dr-profile .content .title {
  font-weight: 700;
  color: #6c675c;
  margin-bottom: 6px;
}

.dr-profile .content .designation {
  color: #BE9B64;
  font-weight: 600;
}

.dr-profile .content {
  margin-top: 30px;
}

.dr-profile .social-links {
  margin-top: 20px;
}

.doctor-details-sidebar .contact-info {
  margin-right: 0;
  margin-top: 45px;
  border-bottom: 1px solid #E2E2E2;
}

.doctor-details-sidebar .contact-info li {
  font-size: 24px;
}

.doctor-details-sidebar .contact-info li i {
  font-size: 24px;
}

.doctor-details-sidebar .contact-info li:not(:last-child) {
  margin-bottom: 15px;
}

.dr-testimonial .single-testimonial .content .title {
  font-family 'Playfair Display', serif;
  font-weight bold
  font-size 42px
  line-height 56px
  color $title-color
}

.dr-testimonial .single-testimonial .content .designation {
  color: #BE9B64;
}

.dr-testimonial .single-testimonial .thumb
  width 16.875rem
  height 20rem
  background-size cover
  border-radius 0.5rem
  overflow hidden
  +media('mdDown')
    width 18rem
    height 24rem
  +media('smDown')
    width 100%
    height 32rem

.dr-testimonial .single-testimonial .authore {
  border: none;
  margin-bottom: 0;
  padding-bottom: 45px;
}

.dr-testimonial .testimonial-text {
  color: #7A8A9E;
  font-weight: 600;
}

.thumb 
  width 16.875rem
  height 20rem
  background-size cover
  border-radius 0.5rem
  overflow hidden
  +media('mdDown')
    width 18rem
    height 24rem
  +media('smDown')
    width 100%
    height 32rem

.dr-testimonial .single-testimonial .rating {
  margin-top: 25px;
}

.dr-testimonial .testimonial-text span {
  margin-top: 20px;
  font-weight: 500;
}

.dr-testimonial-section .section-heading {
  margin-bottom: 50px;
}

.dr-testimonial .owl-nav div {
  height: 40px;
  width: 40px;
  color: #8A8A8A;
  line-height: 38px;
  border-width: 2px;
}

.dr-testimonial .owl-nav div:hover {
  background: #BE9B64;
  color: #fff;
  border-color: transparent;
}

.dr-testimonial .owl-nav div.owl-prev {
  margin-right: 10px;
}

.dr-testimonial .owl-nav {
  margin-top: 35px;
}
</style>