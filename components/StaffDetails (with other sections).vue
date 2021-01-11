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
                <!-- <div class="social-links">
                  <a href="https://www.facebook.com/dentistryondundas/"><i class="fab fa-facebook-f"></i></a>
                  <a href="https://twitter.com/DentistryDundas"><i class="fab fa-twitter"></i></a>
                  <a href="#0"><i class="fab fa-google-plus-g"></i></a>
                </div> -->
              </div>
              <!-- <div class="contact-info pb-70 mb-80">
                <ul>
                  <li>
                    <a href="telto:01234567899">
                      <i class="fal fa-phone"></i> (416) 123-1234</a>
                  </li>
                  <li>
                    <a href="mailto:support@gmail.com">
                      <i class="fal fa-envelope-open"></i> support@gmail.com</a>
                  </li>
                  <li>
                    <a href="#0">
                      <i class="fab fa-twitter"></i>steve.millman</a>
                  </li>
                </ul>
              </div> -->
            </div>
            <!-- <div class="dr-testimonial-section">
              <div class="section-heading">
                <h2 class="title">Client’s Say </h2>
              </div>
              <div class="dr-testimonial owl-carousel">
                <div class="single-testimonial">
                  <div class="authore">
                    <div class="thumb">
                      <img src="assets/images/testimonial-authore-1.png" alt="">
                    </div>
                    <div class="content">
                      <h5 class="title">Brian A. Shipley</h5>
                      <span class="designation"></span>
                    </div>
                  </div>
                  <div class="testimonial-text">
                    <span>This is a really positive review about Dr. Steve Millman.</span>
                  </div>
                  <div class="rating">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                </div>
                <div class="single-testimonial">
                  <div class="authore">
                    <div class="thumb">
                      <img src="assets/images/testimonial-authore-1.png" alt="">
                    </div>
                    <div class="content">
                      <h5 class="title">Brian A. Shipley</h5>
                      <span class="designation">CEO & Founder</span>
                    </div>
                  </div>
                  <div class="testimonial-text">
                    <p>All this mistaken idea of noun
                      cing pleasure and praising pain was born give complete. </p>
                    <span>Those who do not know how to pur psure rationally encounter
                      conseque</span>
                  </div>
                  <div class="rating">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div class="col-lg-8 dr-details-page-content">
          <div class="intro-text">
            <div class="section-heading">
              <h2 class="title">About Me</h2>
              </div>
              <p>
                {{p1}}
                <br><br>
                {{p2}}
                <br><br>
                {{p3}}
                <br><br>
                {{p4}}
                <span><br><br></span>
                {{p5}}
              </p>
          </div>
          <div class="education-content mt-70">
            <div class="section-heading">
              <h2 class="title">Fun Facts</h2>
            </div>
            <div class="qualifications-list">
              <ul>
                <li v-if="fun-quote.length > 1">
                    {{fun-quote}}
                </li>
              </ul>
            </div>
          </div>
          <!-- <div class="education-content mt-70">
            <div class="section-heading">
              <h2 class="title">Education</h2>
            </div>
            <div class="qualifications-list">
              <ul>
                <li> 
                  <svg fill="#0068b5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26px" height="26px"><path d="M 13 4.5 C 12.945313 4.5 12.894531 4.515625 12.84375 4.53125 L 0.84375 8.53125 C 0.640625 8.597656 0.5 8.785156 0.5 9 C 0.5 9.214844 0.640625 9.402344 0.84375 9.46875 L 3.59375 10.40625 C 3.566406 10.441406 3.527344 10.464844 3.5 10.5 C 2.902344 11.257813 2.59375 12.300781 2.46875 13.8125 C 2.019531 14.011719 1.71875 14.476563 1.71875 15 C 1.71875 15.523438 2.019531 15.988281 2.46875 16.1875 C 2.070313 19.574219 0.0625 20.710938 0.0625 21 C 0.0625 21.148438 1.625 22 2 22 C 2.578125 22 3.96875 21.03125 3.96875 18.90625 C 3.96875 17.636719 3.839844 16.703125 3.71875 16.03125 C 4.050781 15.800781 4.28125 15.4375 4.28125 15 C 4.28125 14.539063 4.019531 14.164063 3.65625 13.9375 C 3.769531 12.5625 4.03125 11.765625 4.4375 11.25 C 4.90625 10.652344 5.667969 10.289063 6.8125 9.8125 C 6.867188 9.789063 6.953125 9.75 7.03125 9.71875 C 7.046875 9.714844 7.046875 9.691406 7.0625 9.6875 C 7.261719 9.609375 7.46875 9.53125 7.625 9.46875 C 8.375 9.160156 8.992188 8.941406 9.5625 8.71875 C 9.734375 8.652344 9.839844 8.59375 10 8.53125 C 10.515625 8.332031 10.886719 8.195313 11.25 8.0625 C 11.386719 8.011719 11.472656 7.980469 11.59375 7.9375 C 12.417969 7.640625 12.769531 7.535156 12.78125 7.53125 C 13.089844 7.425781 13.425781 7.589844 13.53125 7.90625 C 13.636719 8.21875 13.472656 8.550781 13.15625 8.65625 C 13.132813 8.664063 11.746094 9.082031 8.09375 10.59375 C 7.859375 10.691406 7.621094 10.757813 7.40625 10.84375 C 6.972656 11.015625 6.613281 11.175781 6.3125 11.3125 L 12.84375 13.46875 C 12.894531 13.484375 12.945313 13.5 13 13.5 C 13.054688 13.5 13.105469 13.484375 13.15625 13.46875 L 25.15625 9.46875 C 25.359375 9.402344 25.5 9.214844 25.5 9 C 25.5 8.785156 25.359375 8.597656 25.15625 8.53125 L 13.15625 4.53125 C 13.105469 4.515625 13.054688 4.5 13 4.5 Z M 21 12.25 L 13.46875 14.75 C 13.3125 14.800781 13.160156 14.8125 13 14.8125 C 12.839844 14.8125 12.6875 14.800781 12.53125 14.75 L 5.25 12.3125 C 5.117188 12.65625 5.0625 13.105469 5.0625 13.75 C 5.539063 14.023438 6 14.578125 6 15.53125 C 6 16.117188 5.6875 16.535156 5.4375 16.8125 C 6.515625 18.066406 9.492188 18.96875 13 18.96875 C 17.417969 18.96875 21 17.542969 21 15.78125 Z"/></svg>&nbsp;
                    {{education}}
                </li>
              </ul>
            </div>
          </div> -->


          <!-- <div class="certificate mt-70">
            <div class="section-heading">
              <h2 class="title">Other images</h2>
            </div>
            <div class="certificate-img">
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="single-certificate">
                    <img src="assets/images/achivment-1.png" alt="">
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="single-certificate">
                    <img src="assets/images/achivment-2.png" alt="">
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="single-certificate">
                    <img src="assets/images/achivment-3.png" alt="">
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="single-certificate">
                    <img src="assets/images/achivment-4.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="gallery-widget mt-70">
            <div class="section-heading">
              <h2 class="title">Recent Patients</h2>
            </div>
            <div class="row mt-none-30">
              <div class="col-md-6 mt-30">
                <div class="single-gallery bg_img" data-overlay="65"
                  data-background="assets/images/gallery-item-1.jpg">
                  <a href="assets/images/gallery-item-1.jpg" data-rel="lightcase:myCollection"><i
                      class="far fa-plus"></i></a>
                </div>
              </div>
              <div class="col-md-6 mt-30">
                <div class="single-gallery bg_img" data-overlay="65"
                  data-background="assets/images/gallery-item-2.jpg">
                  <a href="assets/images/gallery-item-2.jpg" data-rel="lightcase:myCollection"><i
                      class="far fa-plus"></i></a>
                </div>
              </div>
              <div class="col-md-6 mt-30">
                <div class="single-gallery bg_img" data-overlay="65"
                  data-background="assets/images/gallery-item-3.jpg">
                  <a href="assets/images/gallery-item-3.jpg" data-rel="lightcase:myCollection"><i
                      class="far fa-plus"></i></a>
                </div>
              </div>
              <div class="col-md-6 mt-30">
                <div class="single-gallery bg_img" data-overlay="65"
                  data-background="assets/images/gallery-item-4.jpg">
                  <a href="assets/images/gallery-item-4.jpg" data-rel="lightcase:myCollection"><i
                      class="far fa-plus"></i></a>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
  <!-- doctor details area end -->
</template>

<script>
export default {
  props: ['staffName', 'staffTitle', 'staffImage', 'p1', 'p2', 'p3', 'p4', 'p5', 'education'],
}
</script>

<style lang="stylus" scoped>
/* 25. Dr details css */
.doctor-details-area .section-heading .sub-title {
  margin-bottom: 12px;
}

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

.dr-details-page-content {
  padding-left: 40px;
}

.intro-text p:last-child {
  font-weight: 400;
  margin-top: 20px;
}

.intro-text p {
  font-weight: 500;
}

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