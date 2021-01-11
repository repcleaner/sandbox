<template>
  <div class="sub-page">
    <HeroProduct 
      title="All Services" 
      root="Services"
      coverImage="/img/hero/services-hero.jpg"
    />
    <div class="container">
      <div class="row service-wrapper mt-100 mb-100">
        <ServiceCard
          title="Anesthesia"
          slug="/services/procedures/anesthesia"
          blurb="Sleep while we work"
          serviceImage="anesthesia.jpeg"
          serviceIcon="anesthesia.svg"
        />
        <ServiceCard
          title="Children's Dentistry"
          slug="/services/checkup/childrens-dentistry"
          blurb="Checkup and care for children"
          serviceImage="childrens-dentistry.jpg"
          serviceIcon="childrens-dentistry.svg"
        />
        <ServiceCard
          title="Dental Bonding"
          slug="/services/procedures/dental-bonding"
          blurb="Cosmetic bonding to repair discoloured or chipped teeth"
          serviceImage="dental-bonding.jpg"
          serviceIcon="dental-bonding.svg"
        />
        <ServiceCard
          title="Dental Bridges"
          slug="/services/procedures/dental-bridges" 
          blurb="Cosmetic tooth replacement or increase chewing function"
          serviceImage="dental-bridge.jpeg"
          serviceIcon="drill.svg"
        />
        <ServiceCard
          title="Dental Crowns"
          slug="/services/procedures/dental-crowns"
          blurb="Strengthen broken down teeth or improve esthetics"
          serviceImage="dental-crown.jpg"
          serviceIcon="dental-crown.svg"
        />
        <ServiceCard
          title="Dental Implants"
          slug="/services/procedures/dental-implants"
          blurb="Replace single or multiple teeth almost like your own"
          serviceImage="dental-implant.jpeg"
          serviceIcon="dental-implants.svg"
        />
        <ServiceCard
          title="Dentures"
          slug="/services/procedures/dentures"
          blurb="Partial or complete dentures"
          serviceImage="dentures.jpg"
          serviceIcon="dentures.svg"
        />
        <ServiceCard
          title="Digital Dentistry"
          slug="/services/procedures/digital-dentistry"
          blurb="Streamline steps in all aspects of dental care"
          serviceImage="digital-dentistry.jpeg"
          serviceIcon="digital-dentistry.svg"
        />
        <ServiceCard
          title="Digital X-Rays"
          slug="/services/procedures/digital-xrays"
          blurb="We specialize in advanced digital radiography"
          serviceImage="x-ray.jpg"
          serviceIcon="x-ray.svg"
        />
        <ServiceCard
          title="Invisalign"
          slug="/services/cosmetic/invisalign"
          blurb="Esthetic process for straightening your teeth"
          serviceImage="invisalign.jpg"
          serviceIcon="invisalign.svg"
        />
        <ServiceCard
          title="Orthodontics"
          slug="/services/procedures/orthodontics"
          blurb="Esthetic and Functional correction of your teeth"
          serviceImage="orthodontics.jpg"
          serviceIcon="orthodontics.svg"
        />
        <ServiceCard
          title="Patient Comfort"
          slug="/services/checkup/patient-comfort"
          blurb="Come for a comfortable checkup at your pace"
          serviceImage="patient-comfort.jpg"
          serviceIcon="patient-comfort.svg"
        />
        <ServiceCard
          title="Porcelain Veneers"
          slug="/services/cosmetic/porcelain-veneers"
          blurb="Cosmetic teeth covering to correct spacing, chips or discolouration"
          serviceImage="veneers.jpg"
          serviceIcon="veneers.svg"
        />
        <ServiceCard
          title="White Fillings"
          slug="/services/cosmetic/white-fillings"
          blurb="Tooth coloured resin to fill cavities"
          serviceImage="white-fillings.jpg"
          serviceIcon="white-fillings.svg"
        />
        <ServiceCard
          title="Periodontal Treatment"
          slug="/services/cosmetic/periodontal-treatment"
          blurb="Gum Disease Treatment"
          serviceImage="periodontal.jpg"
          serviceIcon="drill.svg"
        />
        <ServiceCard
          title="Surgery After Care"
          slug="/services/checkup/surgery-after-care"
          blurb="Visit us for checkups after surgery"
          serviceImage="after-care.jpg"
          serviceIcon="after-care.svg"
        />
        <ServiceCard
          title="Root Canal Therapy"
          slug="/services/procedures/root-canal-therapy"
          blurb="Esthetic and Functional correction of your teeth"
          serviceImage="root-canal-therapy.jpg"
          serviceIcon="root-canal-therapy.svg"
        />
        <ServiceCard
          title="Sensitive Teeth"
          slug="/services/procedures/sensitive-teeth"
          blurb="Treatment from changing toothpaste to more extensive procedures"
          serviceImage="sensitive-teeth.jpg"
          serviceIcon="sensitive-teeth.svg"
        />
        <ServiceCard
          title="Wisdom Teeth Extraction"
          slug="/services/procedures/wisdom-teeth"
          blurb="Remove wisdom teeth that do not have room to grow"
          serviceImage="wisdom-teeth.jpg"
          serviceIcon="root-canal-therapy.svg"
        />
      </div>    
      <div class="row">
        <SideNav/>
      </div>  
    </div>
  </div>
</template>

<script>
import HeroProduct from '~/components/HeroProduct.vue';
import Blurb from '~/components/Blurb.vue';
import SideNav from '~/components/SideNav.vue';
import ServiceCard from '~/components/ServiceCard.vue';

export default {
  components: {
    HeroProduct,
    Blurb,
    SideNav,
    ServiceCard
  } 
}
</script>

<style lang="stylus" scoped>

$background = #FFFFFF
$inferno = #FF6B02
$cyan = #05AC84

$eggplant = #29294C

$main_theme = $eggplant

.container 
  display flex 
  flex-direction row
  +media('mdDown')
    flex-direction column
  .row
    +media('mdDown')
      margin 0
  .SideNav
    display block

.category-title 
  font-family 'Playfair Display', serif
  color $title-color
  margin-bottom 49px
  +media('lg')
    margin-bottom 49px
    /* Awards */
    font-weight: bold
    font-size 42px
    line-height 56px

.sub-page 
  display flex
  flex-direction column
  width 100%
  .container 
    display flex 
    flex-direction row
    width 100%
    +media('mdDown')
      flex-direction column
      width 100%
      h2
        width 100%

    .SideNav
      display block


</style>
