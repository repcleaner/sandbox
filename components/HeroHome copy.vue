<template>
  <!-- slider area start -->
  <section class="hero-area owl-carousel">
    <div class="single-hero-item d-flex align-items-center bg_img" data-background="assets/images/slide-1.jpg">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-10">
            <div class="slide-content">
              <h1 class="title" data-animation="fadeInUp" data-delay=".3s" data-duration=".5s">
                {props.title}
              </h1>
              <div class="content" data-animation="fadeInUp" data-delay=".5s" data-duration=".7s">
                <p>
                    Dentistry on Dunsas has been proudly serving the Whitby community for over 30 years!
                </p>
                <span>Trusted Medical & Health Care </span>
              </div>
              <div class="slide-btns">
                <a href="services-1.html" class="site-btn" data-animation="fadeInUp" data-delay=".9s" data-duration=".7s">
                  Appointment
                </a>
                <a href="#google_map" class="site-btn secondary" data-animation="fadeInUp" data-delay="1.1s" data-duration=".9s">
                  Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="single-hero-item d-flex align-items-center bg_img" data-background="assets/images/slide-2.jpg">
      <div class="container">
          <div class="row">
              <div class="col-xl-8 col-lg-10">
                  <div class="slide-content">
                      <h1 class="title" data-animation="fadeInUp" data-delay=".3s" data-duration=".5s">Accepting Emergency Patients during Covid-19</h1>
                      <div class="content" data-animation="fadeInUp" data-delay=".5s" data-duration=".7s">
                          <p>We are a professional health & medical care services provider institutions. 25 years
                              serve every kinds of people very carefully & Patient happy</p>
                          <span>Trusted Medical & Health Care </span>
                      </div>
                      <div class="slide-btns">
                          <a href="services-1.html" class="site-btn" data-animation="fadeInUp" data-delay=".9s"
                              data-duration=".7s">Financing</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <div class="single-hero-item d-flex align-items-center bg_img" data-background="assets/images/slide-2.jpg">
      <div class="container">
          <div class="row">
              <div class="col-xl-8 col-lg-10">
                  <div class="slide-content">
                      <h1 class="title" data-animation="fadeInUp" data-delay=".3s" data-duration=".5s">Need help with financing?</h1>
                      <div class="content" data-animation="fadeInUp" data-delay=".5s" data-duration=".7s">
                          <p>We are a professional health & medical care services provider institutions. 25 years
                              serve every kinds of people very carefully & Patient happy</p>
                          <span>Trusted Medical & Health Care </span>
                      </div>
                      <div class="slide-btns">
                          <a href="services-1.html" class="site-btn" data-animation="fadeInUp" data-delay=".9s"
                              data-duration=".7s">Financing</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </section>
  <!-- Slider area end -->
  
</template>

<script>
export default {
}
</script>


<style lang="stylus" scoped>
/* 3. Slider area */
.slide-content img {
    width: auto !important;
}

.slide-content .title {
    font-size: 80px;
    color: #223645;
    font-weight: 700;
    margin: 18px 0;
    margin-bottom: 12px;
}

.slide-content .content {
    color: #5C6C80;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
}

.slide-content .content span {
    display: block;
    font-style: italic;
    color: #E12454;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 42px;
}

.single-hero-item {
    min-height: 825px;
}

.slide-btns a {
    padding: 18px 43px;
}

.slide-btns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.slide-btns a:first-child {
    margin-right: 10px;
}

.slide-btns .site-btn::after {
    background: #CA1744;
}

.slide-btns .site-btn:hover::after {
    background: #649336;
}

.site-btn.secondary::after {
    background: #649336;
}

.slide-btns .site-btn.secondary:hover::after {
    background: #CA1744;
}

.hero-area .owl-nav div,
.service-details-carousel .owl-nav div {
    position: absolute;
    top: 50%;
    left: 100px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: 0;
    visibility: hidden;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
}

.hero-area .owl-nav div,
.service-details-carousel .owl-nav div {
    color: #223645;
}

.hero-area .owl-nav div.owl-next {
    left: auto;
    right: 100px;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
}

.hero-area:hover .owl-nav div.owl-prev {
    left: 70px;
    opacity: 1;
    visibility: visible;
}

.hero-area:hover .owl-nav div.owl-next {
    right: 70px;
    opacity: 1;
    visibility: visible;
}

/* homepage-2 hero-area css */
.hero-area-2 .single-hero-item::before {
    z-index: -1;
}

.hero-area-2 .single-hero-item {
    z-index: 1;
}

.hero-area-2 .owl-nav div {
    border-color: transparent;
}

.hero-area-2 .single-hero-item .sub-title {
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
}

.hero-area-2 .single-hero-item .title {
    color: #fff;
}

.hero-area-2 .single-hero-item .content {
    color: #fff;
}

.hero-area-2 .single-hero-item .slide-btns {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 45px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.hero-area-2 .single-hero-item .slide-btns .inline-btn {
    color: #fff;
}

.heaheroder-area-2 .single-hero-item .slide-btns .inline-btn::after {
    border-color: #fff;
}

.hero-area-2 .owl-nav div {
    background: #fff;
    color: #72A243;
    z-index: 9;
    border-color: transparent;
}

.hero-area-2 .owl-nav div:hover {
    background: #72A243;
    color: #fff;
    border-color: transparent;
}

.hero-area-2 .single-hero-item .title {
    margin-bottom: 25px;
}

.hero-area-2 .owl-nav div:hover {
    background: #E12454;
}
</style>

