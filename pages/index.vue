<template>
  <div class="homepage">
    <HeroHome
      coverImage="/img/hero/dod-office.jpg"
    />
    <div class="container">
      <div class="row">
        <Blurb
          class="mt-70"
          :blurb="[
            {title: 'Proudly serving the Whitby community for over 30 years!'},
            {text: 'Dentistry on Dundas is conveniently located in beautiful Whitby, Ontario, where we take pride in our community. Our team is focused on our patients’ comfort as well as staying on the leading edge of dentistry. From your child’s first dental visit to a complete smile makeover, it is a privilege to care for your family’s dental needs.'},
            {text: 'Our mission is to promote the highest ideals of dental practice, to meet and exceed our patient’s needs and expectations and to do so in an environment that nurtures its staff to be fulfilled, appreciated, creative, motivated and successful.'},
            {text: 'If you need us, we’re here.'}
          ]"
        />
        <Blurb
          class="mt-40"
          id="covid"
          :blurb="[
            {title: 'Accepting Patients during province-wide shutdown'},
            {text: 'As Essential health care professionals we are open during any provincial covid shutdown. We have enforced strict protocols and safety measures to ensure the utmost safety of our patients and staff.'}
          ]"
        />
        <div class="category-widget book">
          <a href="#google_map" class="site-btn" data-v-738fae98="">Book Appointment</a>
        </div>
        <AccordionFAQ/>
        <!-- <FormDownload/> -->
      </div>    
      <div class="row">
        <SideNav/>
      </div>  
    </div>
    <BrandArea/>
  </div>
</template>

<script>
import HeroHome from '~/components/HeroHome.vue';
import SideNav from '~/components/SideNav.vue';
import Blurb from '~/components/Blurb.vue';
import BrandArea from '~/components/BrandArea.vue';
import FormDownload from '~/components/FormDownload.vue';
import AccordionFAQ from '~/components/AccordionFAQ.vue';

export default {
  components: {
    HeroHome,
    SideNav,
    Blurb,
    BrandArea,
    FormDownload,
    AccordionFAQ
  }
}

</script>

<style lang="stylus" scoped>

$background = #FFFFFF
$inferno = #FF6B02
$cyan = #05AC84

$eggplant = #29294C

$main_theme = $eggplant

.homepage
  +media('mdDown')
    width 100%
    overflow-x hidden
    position relative

.container 
  display flex 
  flex-direction row
  +media('mdDown')
    flex-direction column
    width 100%
  .SideNav
    display block


</style>
