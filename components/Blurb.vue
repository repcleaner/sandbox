<template>
  <div class="col-lg-10 blurb">
    <div class="service-details-content">
      <div class="content">
        <h2 v-for="(item, index) in blurb" :key="item.id" class="title">
          {{blurb[index].title}}
        </h2>
        <p v-for="(item, index) in blurb" :key="item.id">
          {{blurb[index].text}}
          <b>{{blurb[index].bold}}</b>
          <i>{{blurb[index].italic}}</i>
          {{blurb[index].text2}}
        </p>
        <!-- <p v-for="(item, index) in blurb" :key="item.id">
          {{blurb[index].text2}} <a :href="link">{{blurb[index].linktext}}</a>
          {{blurb[index].bold}}
          <b>{{blurb[index].bold}}</b>
        </p> -->
        <p v-for="(item, index) in blurb" :key="item.id">
          <b>{{blurb[index].textInlineTitle}} </b>{{blurb[index].text3}}
        </p>
        <!-- <img v-if="blurbImage.length > 1" src="{{blurbImage}}"> -->
        <slot></slot>
      </div>
    </div>
</div>
</template>

<script>
export default {
  props: ['blurb'],
}
</script>

<style lang="stylus" scoped>
/* 21. Service detais css */
.service-details-content .title,
.chart-box-wrap .title,
.faq-widget .title,
.explore-widget .title,
.download-info-wrap .title {
  color $title-color
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 25px;
}

.blurb 
	padding-top 30px
	.title 
		font-family 'Playfair Display', serif;
		font-weight bold
		font-size 42px
		line-height 56px
		color $title-color
    +media('mdDown')
      font-size 2rem

.service-details-content .thumb {
  margin-bottom: 45px;
}

.service-details-content .content p
  line-height 30px
  margin-bottom 20px

.medicare-title .title
  color #223645
  font-weight 700
  margin-bottom 0
</style>