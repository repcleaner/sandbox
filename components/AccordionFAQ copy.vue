<template>
   <div class="col-lg-10">
      <div class="faq-widget mt-70">
         <h2 class="title">Questions?</h2>
         <div class="faqs" id="accordionFaq">
          <badger-accordion>
            <badger-accordion-item>
              <div slot="header">First Accordion Header</div>
              <div slot="content">First Accordion Content</div>
            </badger-accordion-item>

            <badger-accordion-item>
              <div slot="header">Second Accordion Header</div>
              <div slot="content">Second Accordion Content</div>
            </badger-accordion-item>
          </badger-accordion>
            <!-- <div class="card">
               <div class="card-header" id="headingOne">
                  <h5 class="mb-0 subtitle">
                     <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                        data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     What is a dental emergency?
                     </button>
                  </h5>
               </div>
               <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                  data-parent="#accordionFaq">
                  <div class="card-body">
                     A dental emergency is anything that requires immediate treatment. Emergency dental treatment can alleviate pain, treat an infection, and/or save a tooth. Common dental emergencies include broken teeth, knocked out teeth, dental abscesses, and severe pain originating from a tooth. Please contact us if you are experiencing a dental emergency.
                  </div>
               </div>
               <div class="card-header" id="headingOne">
                  <h5 class="mb-0 subtitle">
                     <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                        data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     When should my child go to the dentist?
                     </button>
                  </h5>
               </div>
               <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                  data-parent="#accordionFaq">
                  <div class="card-body">
                     It is recommended that your child visit the dentist around 1 year old or about 6 months following their first tooth erupting into their mouths. Your dentist will evaluate your child's development and answer any questions you have regarding child oral healthcare. Following the first visit, your dentist will recommend recare visits to further ensure proper development and make sure your child's teeth are and remain healthy. 
                  </div>
               </div>
               <div class="card-header" id="headingOne">
                  <h5 class="mb-0 subtitle">
                     <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                        data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     What services do you offer?
                     </button>
                  </h5>
               </div>
               <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                  data-parent="#accordionFaq">
                  <div class="card-body">
                     At Dentistry on Dundas, we pride ourselves on offering all aspects of dental care. Our team consists of general dentists and specialists to treat all facets of dentistry within the same building. Treatments offered include, but are not limited to, general dentistry, extractions, implants, cosmetic dentistry, root canals, orthodontics, invisalign, etc. We provide practically every dental service available for your oral health. 
                  </div>
               </div>
            </div> -->
         </div>
         <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
            data-parent="#accordionFaq">
            <div class="card-body">
               Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
               totam rem ape
               riam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
               vitae dicta sunt explica
               bo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion';

export default {
  components: {
    BadgerAccordion,
    BadgerAccordionItem
  }
}
</script>

<style lang="stylus" scoped>
.title 
  font-family 'Playfair Display', serif;
  font-weight bold
  font-size 42px
  line-height 56px
  color $title-color
  +media('mdDown')
    font-size 2rem

.accordion 
  backgroundcolor: #eee
  color #444
  cursor pointer
  padding 18px
  width 100%
  border none
  text-align left
  outline none
  font-size 15px
  transition 0.4s

.active, .accordion:hover
  background-color #ccc

.panel
  padding 0 18px
  background-color white
  max-height 0
  overflow hidden
  transition max-height 0.2s ease-out

</style>