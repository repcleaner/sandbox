<template>
  <div class="sandbox">
    <GiveAwayCard />
  </div>
</template>

<script>
import GiveAwayCard from '~/components/GiveAwayCard';

export default {
  layout: 'sandbox', 
  components: {
    GiveAwayCard,
  }
}
</script>

<style lang="stylus" scoped>

.sandbox 
  height 100vh 
  width 100% 
  display flex
  flex-direction column 
  justify-content center 
  align-items center

</style>