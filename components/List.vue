<template>
  <div class="col-lg-10 blurb">
    <div class="service-details-content">
      <div class="content">
        <h2 v-for="(item, index) in list" :key="item.id" class="title">
          {{list[index].title}}
        </h2>
        <p v-for="(item, index) in list" :key="item.id">
          {{list[index].prelisttext}}
          <b>{{list[index].prelistbold}}</b>
          <i>{{list[index].prelistitalic}}</i>
        </p>
        <p v-for="(item, index) in list" :key="item.id">
          {{list[index].prelisttext2}}
          <b>{{list[index].prelistbold2}}</b>
        </p>
        <ul>
          <li v-for="(item, index) in list" :key="item.id">
            {{list[index].listItem}}
            <b>{{list[index].listBold}}</b>
            <i>{{list[index].listItalic}}</i>
          </li>
        </ul>
        <p v-for="(item, index) in list" :key="item.id">
          {{list[index].text}}
          <b>{{list[index].bold}}</b>
          <i>{{list[index].italic}}</i>
          {{list[index].text2}}
        </p>
      </div>
    </div>
</div>
</template>

<script>
export default {
  props: ['list'],
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

.service-details-content .content ul li
  margin-left 2rem
  padding-left 1rem
  line-height 30px
  list-style-type circle

.medicare-title .title
  color #223645
  font-weight 700
  margin-bottom 0
</style>