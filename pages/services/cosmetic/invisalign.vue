<template>
  <div class="sub-page">
    <HeroProduct 
      title="Invisalign" 
      root="Services"
      coverImage="/img/services/invisalign.jpg" 
    />
    <div class="container">
      <div class="row">
        <Blurb
          class="mt-70"
          :blurb="[
            {title: 'Invisalign'},
            {text: 'If you’re already self conscious about your smile, traditional braces that may attract more attention to your teeth may have held you back from improving your smile... That is until now!'},
            {text: 'Our office offers Invisalign as an alternative to traditional braces. Invisalign creates custom fitted removable trays which are changed about every two weeks, progressively straightening, aligning and improving your smile. The Invisalign Aligners are clear and virtually unnoticeable to those around you. Although they will notice that you smile more often!'},
            {text: 'Depending on your individual situation, the Invisalign procedure usually takes about a year but the results are undisputable.'}
          ]"
        />
        <List
          class="no-top-padding"
          :list="[
            {prelistbold: 'There are other advantages to Invisalign beyond that aesthetic nature of the treatment.', listItem: 'The removable trays allow for easier cleaning and oral hygiene practices.'},
            {listItem: 'Normal brushing and flossing regimens can be maintained.'},
            {listItem: 'Trays can be removed when eating.'},
            {listItem: 'Irritation from metal braces is avoided.'},
            {listItem: 'Properly aligned teeth aid in speech, chewing, gum and bone health.'},
          ]"
        />
        <Blurb
        >
          <img src="/img/services/images/patient-comfort-sedation.jpg" />
        </Blurb>
        <AccordionFAQ/>
        <FormDownload/>
      </div>    
      <div class="row">
        <SideNav/>
      </div>  
    </div>
  </div>
</template>

<script>
import HeroProduct from '~/components/HeroProduct.vue';
import SideNav from '~/components/SideNav.vue';
import Blurb from '~/components/Blurb.vue';
import List from '~/components/List.vue';
export default {
  components: {
    HeroProduct,
    SideNav,
    Blurb,
    List
  } 
}
</script>

<style lang="stylus" scoped>
$background = #FFFFFF
$inferno = #FF6B02
$cyan = #05AC84
$eggplant = #29294C
$main_theme = $eggplant
.no-top-padding
  padding-top 0
.sub-page 
  display flex
  flex-direction column
  .container 
    display flex 
    flex-direction row
    .SideNav
      display block
</style>