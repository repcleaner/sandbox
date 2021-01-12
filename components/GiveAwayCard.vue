<template>
	<div class="GiveAwayCard">
		<div class="content">
			<h2>Give-away</h2>
			<!-- make amount decrease by 1 after button is clicked -->
			<p>You have <span>03</span> turns left.</p>
		</div>
		
		<div class="prizes">
			<!-- Make button go to next gift after click -->
			<button class="shuffle">
				<img src="~assets/img/icons/shuffle.svg" alt="An image of a shuffle icon." />
			</button>

			<div class="prize">
				<h3>Starter Plant</h3>
				<div class="img-container">
					<img src="~assets/img/cannabis.png" alt="A weed plant" class="gift-img">
				</div>
				<h4>1/8oz</h4>
				<span>Supreme Pharmaceuticals – 1/8th</span>
			</div>

			<div class="prize">
				<h3>Starter Plant</h3>
				<div class="img-container">
					<img src="~assets/img/cannabis.png" alt="A weed plant" class="gift-img">
				</div>
				<h4>4 oz</h4>
				<span>Supreme Pharmaceuticals – 1/8th</span>
			</div>

			<div class="prize">
				<h3>Starter Plant</h3>
				<div class="img-container">
					<img src="~assets/img/cannabis.png" alt="A weed plant" class="gift-img">
				</div>
				<h4>4 oz</h4>
				<span>Supreme Pharmaceuticals – 1/8th</span>
			</div>

		</div>

		<!-- Make button Compoent to deacrease by 1 until it hits 0-->
		<button class="submit">I choose this</button>
	</div>
</template>


<style lang="stylus" scoped>

$highlight = rgb(54,222,185);

.GiveAwayCard 
	border-radius 2rem
	background: rgb(14,27,104);
	background linear-gradient(80deg, #0e1b68 0%, #1e307c 69%, #1e3bb4 100%)
	color white
	padding 5rem 2.6rem 7rem
	.content 
		padding-left 4.2rem
		h2 
			margin-top 3.2rem
			font-size 3.2rem
			line-height 3.6rem
		p 
			font-size 1.6rem
			font-family sans-serif
			color $highlight
			span 
				font-weight bold
	.prizes 
		position relative
		margin-top 7rem
		.prize 
			position relative
			z-index 10
			padding 4rem 4.2rem 3.6rem
			border-radius 1rem
			background rgb(237,222,223)
			color #000
			&:nth-child(n+3) 
				top -3.25rem
				position absolute 
				z-index 1
				transform scale(0.9)
				background rgb(108,119,163)
			&:nth-child(4)
				z-index 0
				top -6.25rem
				transform-origin center 
				background rgb(237,222,223)
				transform scale(0.8)
				opacity 0.2
			h3 
				margin-top 1.6rem
				font-family sans-serif 
				font-size 2.4rem
				line-height 3rem
				font-weight 600
				letter-spacing 0.05rem
			h4 
				position absolute 
				font-size 3.6rem 
				bottom 2.2rem
			.img-container 
				margin 2.8rem auto 2.8rem auto
				width 26rem
				img 
					display block
					margin 0 auto
					width 100%
					max-width 100% 
			span 
				font-family sans-serif
				position absolute 
				right -9rem
				bottom 14rem
				color #757575
				font-size 1.4rem 
				transform rotate(-90deg)

		.shuffle 
			z-index 100
			position absolute
			top -3.25rem
			left 50%
			transform translateX(-50%)
			display flex 
			align-items center 
			justify-content center
			border none
			background rgb(233,50,81)
			border-radius 100%
			margin 0 auto
			width 6.5rem 
			height 6.5rem
			transform-origin left
			// animation shuffle 2s infinite 
			&:hover 
				cursor pointer
			&:focus, 
			&:active
				outline none
			img 
				// animation pulse 2s infinite 
				max-width 100%
				width 2.25rem 
				display block

	.submit 
		padding 1.6rem 0
		margin-top 2.6rem
		font-family sans-serif
		background $highlight
		border none 
		width 100% 
		border-radius 1rem 
		color black
		font-weight 600
		text-transform uppercase
		letter-spacing 0.03rem
		transition all 0.2s ease
		backface-visibility hidden
		transform-style preserve-3d
		user-select none
		&:hover 
			background rgb(3,241,188)
			cursor pointer 
			transform translate3d(0, 0.0625rem, 0) perspective(1px) scale(0.99)
		&:focus, 
		&:active
			outline none


@keyframes pulse 
	from 
		transform scale(0.5)
	to 
		transform scale(1)


@keyframes shuffle 
	15% {
		transform rotate(10deg) translateX(-50%)
	}
	50% {
		transform rotate(-10deg) translateX(-50%)
	}
	85% {
		transform rotate(20deg) translateX(-50%)
	}

</style>