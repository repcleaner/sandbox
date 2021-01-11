<template>
   <div class="col-lg-10">
    <div class="faq-widget mt-70">
     <h2 class="title">Questions?</h2>
     <div class="faqs" id="accordionFaq">
      <button class="accordion">What services do you offer?</button>
      <div class="panel">
      <p>
         At Dentistry on Dundas, we pride ourselves on offering all aspects of dental care. Our team consists of general dentists and specialists to treat all facets of dentistry within the same building. Treatments offered include, but are not limited to, general dentistry, extractions, implants, cosmetic dentistry, root canals, orthodontics, invisalign, etc. We provide practically every dental service available for your oral health.
      </p>
      </div>
      
      <button class="accordion">How often should I do a checkup?</button>
      <div class="panel">
      <p>
         On average a patient should see a dentist every 6 months.  However, the scheduled maintenance of your oral health is tailored to your individuals needs.  A patient who has no history of decay, very little tartar buildup and no gum issues may need to see us yearly, whilst someone with extensive dental work and a history of gum disease will require a dental visit every three months.  A comprehensive initial dental exam will layout your customized map to oral health.
      </p>
      </div>

      <button class="accordion">When should my child go to the dentist?</button>
      <div class="panel">
      <p>
         It is recommended that your child visit the dentist around 1 year old or about 6 months following their first tooth erupting into their mouths. Your dentist will evaluate your child's development and answer any questions you have regarding child oral healthcare. Following the first visit, your dentist will recommend recare visits to further ensure proper development and make sure your child's teeth are and remain healthy. 
      </p>
      </div>

      <button class="accordion">What is a dental emergency?</button>
      <div class="panel">
      <p>
         A dental emergency is anything that requires immediate treatment. Emergency dental treatment can alleviate pain, treat an infection, and/or save a tooth. Common dental emergencies include broken teeth, knocked out teeth, dental abscesses, and severe pain originating from a tooth. Please contact us if you are experiencing a dental emergency.
      </p>
      </div>

      <button class="accordion">I'm intersted in changing my teeth. What options are available?</button>
      <div class="panel">
      <p>
         There is a range of options here.  Firstly, minor changes to the shape of a tooth or several teeth can be done using dental rotary instruments.  In most cases this can be completed without local anaesthetic at a short appointment. Option two is a veneer process, which may include either porcelain or composite (a plastic material). The porcelain requires local anaesthetic , temporary restorations, dental laboratory assistance and a second appointment.  The composite veneer may or may not require local anaethetic and usually is completed chairside.  In both cases, a thin layer of material is laminated to the outside of the tooth. Usually, porcelain veneers are considered the best option because of their longevity and stability in colour. Porcelain never changes in colour, whilst composite restorations can stain and darken over time.   Finally, Crowns are also an option when the need to change the shape or position of a tooth is more dramatic or when the tooth is severely discoloured.  Procedurally, crowns are very similar to veneers except the restoration wraps around the entire tooth.  In many cases we will use a combination of veneers and crowns to achieve an optimal cosmetic and functional result. 
      </p>
      </div>
     </div>
     <!-- <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
      data-parent="#accordionFaq">
      <div class="card-body">
         Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
         totam rem ape
         riam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
         vitae dicta sunt explica
         bo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
      </div>
     </div> -->
    </div>
   </div>
</template>

<script>
export default {
  mounted: function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
      });
    }
  }
}
</script>

<style lang="stylus" scoped>
.title 
  margin-bottom 2rem
  font-family 'Playfair Display', serif
  font-weight bold
  font-size 42px
  line-height 56px
  color $title-color
  +media('mdDown')
    font-size 2rem

.accordion 
  background-color #0068b5
  color #FFFFFF
  cursor pointer
  padding 18px
  width 100%
  border none
  text-align left
  outline none
  font-size 15px
  transition 0.4s
  &:nth-child(1)
    border-top-right-radius 0.5rem 
    border-top-left-radius 0.5rem
  &:last-of-type
    border-bottom-right-radius 0.5rem 
    border-bottom-left-radius 0.5rem
  &:after 
    content '\002B'
    color white
    font-weight bold
    float right
    margin-left 5px
  &.active
    &:last-of-type
      border-bottom-right-radius 0rem 
      border-bottom-left-radius 0rem
      + .panel
        border-bottom-right-radius 0.5rem 
        border-bottom-left-radius 0.5rem
    &:after 
      content '\2212'
      color white

.active, .accordion:hover
  background-color #007bff

.panel
  padding 0rem 1.8rem
  background-color white
  max-height 0
  overflow hidden
  transition max-height 0.2s ease-out
  p 
    padding 1.8rem 0 

</style>