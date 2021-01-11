<template>
<!-- breadcrumb area start -->
<section class="breadcrumb-area bg_img masthead" :style="{ backgroundImage: `url(${coverImage})` }">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="breadcrumb-content">
                    <h1 class="title">{{title}}</h1>
                    <ul class="justify-content-start">
                        <li class="slug-root"><nuxt-link :to="`/`">{{root}}</nuxt-link></li>
                        <li><img src="~assets/img/icons/right-arrow.svg"/></li>
                        <li>{{title}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- breadcrumb area end -->
</template>

<script>
export default {
	props: ['title', 'coverImage', 'service', 'root']
}
</script>

<style lang="stylus" scoped>

.masthead
  position relative
	.container
		.breadcrumb-content
			.title
				color white
				font-family 'Playfair Display', serif;
				font-style: normal
				font-weight: bold
				font-size: 68px
				line-height: 91px
			.slug-root
				a
					color white


/* 20. About css */
.breadcrumb-area {
    padding: 265px 0;
    z-index: 0;
}

.breadcrumb-area::after
    content ""
    position absolute
    top 0
    left 0
    height 100%
    width 100%
    background rgba(0,0,0,.6)
    transition all .25s ease
    opacity 1
    z-index -1

.breadcrumb-black::before {
    background: #223645;
}

.breadcrumb-content .title {
    font-size: 80px;
    font-weight: 700;
    color: #223645;
    margin-top: 28px;
    margin-bottom: 10px;
}

.breadcrumb-content ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #223645;
    font-weight: 500;
}

.breadcrumb-content ul li {
    font-size: 24px;
}

.breadcrumb-content ul a {
    color: #223645;
}

.breadcrumb-content ul li:last-child {
    color: $title-color;
}

.breadcrumb-content ul li:nth-child(2) {
    padding-left: 15px;
    padding-right: 15px;
}

.breadcrumb-content ul i {
    -webkit-transform: translateY(2px);
    -ms-transform: translateY(2px);
    transform: translateY(2px);
}
</style>