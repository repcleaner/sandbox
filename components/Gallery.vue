<template>
  <div class="col-xl-8 col-lg-10 mt-70">
    <!-- Live Stories Start -->
    <div class="row stories">
      <div class="container">
        <div class="row stories_title">
          <h4>Smile Gallery</h4>
          <div class="stories_desk">
            Take a look at some before and after photos for procedures we perform in our office. Click and drag on the images to see the before and after!
          </div> 
        </div>
        
        <div class="row stories_item">
          <div class="after_before_row overflow_hidden">
            <h4>Results</h4>
            <div class="radius_mini">
              <div class="twentytwenty-container">
                
                <img src="~assets/img/before-after/before1.png" />
                
                <img src="~assets/img/before-after/after1.png" />
              </div>
              <div class="stories_desk">
                <br>
                Tracey had 10 anterior porcelain crowns by Dr. Mark Librach
              </div> 
            </div>
          </div>
        </div>
        
        <div class="row stories_item">
          <div class="after_before_row overflow_hidden">
            <h4>Results</h4>
            <div class="radius_mini">
              <div class="twentytwenty-container">
                
                <img src="~assets/img/before-after/before2.png" />
                
                <img src="~assets/img/before-after/after2.png" />
              </div>
              <div class="stories_desk">
                <br>
                Derrick presented to us after sustaining an accident where he unfortunately lost two of his front teeth. After thorough examination and in consultation with our Periodontist,  Dr. Levy, Dr. Librach presented a treatment plan for dental implants to restore these missing teeth. 
              </div> 
            </div>
          </div>

        </div>
      </div>
    </div>
    
  </div>
</template>



<style scoped>
 :root {
--theme_color:#1783D3;
--theme_color_two:#6D849B;
--theme_color_three:#F5F6F5;
--theme_color_four:#77B3D0;
--box_shadow_color: rgba(19,108,174,0.5);
} 
    .twentytwenty-handle { background: blue!important;}
    .stories_item:nth-child(n+3) {margin-top: 45px;}
    .twentytwenty-container::before {
      content: 'Before';
      font-family: 'Playfair Display', serif; 
      font-size: 1.4rem; 
      font-weight: 500;
      color: #0068b5;
      line-height: 1;
      width: 8rem; 
      background: white; 
      height: 4rem; 
      position: absolute; 
      left: 0;
      bottom: 0;
      z-index: 100; 
      display: flex; 
      align-items: center; 
      justify-content: center;
    }
    .twentytwenty-container::after {
      content: 'After';
      font-family: 'Playfair Display', serif; 
      font-size: 1.4rem; 
      font-weight: 500;
      color: white;
      line-height: 1;
      width: 8rem; 
      background: #0068b5; 
      height: 4rem; 
      position: absolute; 
      top: 0;
      right: 0;
      z-index: 100; 
      display: flex; 
      align-items: center; 
      justify-content: center;
    }
    /* 12 After Before */  
    .twentytwenty-horizontal .twentytwenty-handle:before, .twentytwenty-horizontal .twentytwenty-handle:after, .twentytwenty-vertical .twentytwenty-handle:before, .twentytwenty-vertical .twentytwenty-handle:after{content:" ";display:block;background:white;position:absolute;z-index:30;-webkit-box-shadow:0px 0px 12px rgba(51, 51, 51, 0.5);-moz-box-shadow:0px 0px 12px rgba(51, 51, 51, 0.5);box-shadow:0px 0px 12px rgba(51, 51, 51, 0.5);}
    .twentytwenty-horizontal .twentytwenty-handle:before, .twentytwenty-horizontal .twentytwenty-handle:after{width:3px;height:9999px;left:50%;margin-left:-1.5px;}
    .twentytwenty-vertical .twentytwenty-handle:before, .twentytwenty-vertical .twentytwenty-handle:after{width:9999px;height:3px;top:50%;margin-top:-1.5px;}
    .twentytwenty-before-label, .twentytwenty-after-label, .twentytwenty-overlay{position:absolute;bottom:0;width:100%;height:125px;}
    .twentytwenty-before-label, .twentytwenty-after-label, .twentytwenty-overlay{-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;transition-duration:0.5s;}
    .twentytwenty-before-label, .twentytwenty-after-label{-webkit-transition-property:opacity;-moz-transition-property:opacity;transition-property:opacity;}
    .twentytwenty-before-label:before, .twentytwenty-after-label:before{position:absolute;background:var(--theme_color);padding:0;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;text-align:left;height:187px;width:104px;line-height:100px;color:white;font-size:14px;letter-spacing:0.5px;text-transform:uppercase;padding-left:85px;}
    .twentytwenty-horizontal .twentytwenty-before-label:before, .twentytwenty-horizontal .twentytwenty-after-label:before{bottom:-65px;}
    .twentytwenty-vertical .twentytwenty-before-label:before, .twentytwenty-vertical .twentytwenty-after-label:before{left:50%;margin-left:-45px;text-align:center;width:90px;}
    .twentytwenty-left-arrow, .twentytwenty-right-arrow, .twentytwenty-up-arrow, .twentytwenty-down-arrow{width:0;height:0;border:6px inset transparent;position:absolute;}
    .twentytwenty-left-arrow, .twentytwenty-right-arrow{top:50%;margin-top:-6px;}
    .twentytwenty-up-arrow, .twentytwenty-down-arrow{left:50%;margin-left:-6px;}
    .twentytwenty-container{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;z-index:0;overflow:hidden;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;}
    .twentytwenty-container img{max-width:100%;position:absolute;top:0;display:block;}
    .twentytwenty-container.active .twentytwenty-overlay, .twentytwenty-container.active:hover.twentytwenty-overlay{background:rgba(0, 0, 0, 0);}
    
    .twentytwenty-container *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;}
    .twentytwenty-before-label:before{content:attr(data-content);}
    .twentytwenty-after-label:before{content:attr(data-content);}
    .twentytwenty-horizontal .twentytwenty-before-label:before{left:-50px;}
    .twentytwenty-horizontal .twentytwenty-after-label:before{right:-50px;padding-right:85px;padding-left:0;text-align:right;}
    .twentytwenty-vertical .twentytwenty-before-label:before{bottom:10px;}
    .twentytwenty-vertical .twentytwenty-after-label:before{bottom:10px;}
    .twentytwenty-overlay{-webkit-transition-property:background;-moz-transition-property:background;transition-property:background;background:rgba(0, 0, 0, 0);z-index:25;}

    .twentytwenty-overlay:hover .twentytwenty-before-label{opacity:1;}
    .twentytwenty-before{z-index:20;}
    .twentytwenty-after{z-index:10;}
    .twentytwenty-handle{height:38px;width:38px;position:absolute;left:50%;top:50%;margin-left:-22px;margin-top:-22px;border:3px solid white;-webkit-border-radius:1000px;-moz-border-radius:1000px;border-radius:1000px;-webkit-box-shadow:0px 0px 12px rgba(51, 51, 51, 0.5);-moz-box-shadow:0px 0px 12px rgba(51, 51, 51, 0.5);box-shadow:0px 0px 12px rgba(51, 51, 51, 0.5);z-index:22;cursor:pointer;background:var(--theme_color);}
    .twentytwenty-horizontal .twentytwenty-handle:before{bottom:50%;margin-bottom:22px;-webkit-box-shadow:0 3px 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);-moz-box-shadow:0 3px 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);box-shadow:0 3px 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);}
    .twentytwenty-horizontal .twentytwenty-handle:after{top:50%;margin-top:22px;-webkit-box-shadow:0 -3px 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);-moz-box-shadow:0 -3px 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);box-shadow:0 -3px 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);}
    .twentytwenty-vertical .twentytwenty-handle:before{left:50%;margin-left:22px;-webkit-box-shadow:3px 0 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);-moz-box-shadow:3px 0 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);box-shadow:3px 0 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);}
    .twentytwenty-vertical .twentytwenty-handle:after{right:50%;margin-right:22px;-webkit-box-shadow:-3px 0 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);-moz-box-shadow:-3px 0 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);box-shadow:-3px 0 0 white, 0px 0px 12px rgba(51, 51, 51, 0.5);}
    .twentytwenty-left-arrow{border-right:6px solid white;left:50%;margin-left:-17px;}
    .twentytwenty-right-arrow{border-left:6px solid white;right:50%;margin-right:-17px;}
    .twentytwenty-up-arrow{border-bottom:6px solid white;top:50%;margin-top:-17px;}
    .twentytwenty-down-arrow{border-top:6px solid white;bottom:50%;margin-bottom:-17px;} 

    /* 2.5 Dental Grid System*/
    .container {max-width: 1140px;margin: 0 auto;position: relative;}
    .container_1336  {max-width: 1336px;margin: 0 auto;}
    .row:before, .row:after {content: " ";display: table; clear: both;}    
    .row-15 {margin: 0 -15px;}
    .col {width: 100%;}
	.col-1-60 {width: 60%;float: left;}
	.col-1-40 {width: 40%;float: left;}
    .col-2 {width: 50%;float: left;}
    .col-3 {width: 33%;float: left;}
    .col-4 {width: 25%; float: left;}
    .col-5 {width: 20%; float: left;}
    .col-6 {width: 16.66%; float: left;}

  .row { display: block; margin: 0; }
  .stories {padding: 30px 0 0 0;}
  .stories_title { margin-bottom: 45px;padding: 0 10%;text-align: center;}
  .stories_title h4 {font-family: 'Playfair Display', serif; text-align: center;margin-bottom: 32px; color: #bc8452; font-weight: bold; font-size: 42px; line-height: 56px; }
  .stories_desk {line-height: 2;}
  .stories_item {text-align: center;position: relative;}
  .stories_item_number {border-radius: 100%;background-color: var(--theme_color_three);text-align: center;height: 40px;width: 40px;padding: 4px;margin: 0 auto 30px auto;display: inline-block;}
  .stories_item_number span {border-radius: 100%;border: 1px solid #CCCBCB;font-family: 'Playfair Display', serif;font-size: 20px;color: #201E20;display: inline-block;height: 100%;width: 100%;line-height: 1.2;}
  .stories_item_details {position: relative;z-index: 2}
  .stories_avatar {margin-bottom: 17px;}
  .stories_name {font-family: 'Playfair Display', serif; color: #201E20;font-size: 34px;margin-bottom: 9px;}
  .stories_date {font-size: 14px;text-transform: uppercase;letter-spacing: 0.5px;line-height: 1;}
  .stories_deck_row_item {position: relative; padding: 0;}
  .stories_list_row {margin-top: 37px;position: relative;}
  .stories_list_title {font-family: 'Playfair Display', serif; position: relative;font-size: 20px;}
  .stories_list_title h5 {font-family: 'Playfair Display', serif; margin-bottom: 0;position: absolute;z-index: 2; background: #f9f9f6; display: inline-block;font-size: 20px;font-weight: 400;padding: 0 20px;left: 50%;-webkit-transform: translateX(-50%);transform: translateX(-50%);}
  .stories_deck_row_item > i {display: inline-block!important;border-radius:50%;padding-top: 28px;height: 100px;width: 100px;text-align: center;border: 1px solid #CCCBCB;font-size: 46px;color: #CCCBCB;display: block;}
  .stories_list_title::before {content: '';position: absolute;z-index: 1;top: 11px;left: 0;width: 100%;height: 1px;background: #CCCBCB;}
  .stories_item_desk {position: relative;}
  .stories_deck_row_item_desk{padding: 84px 40px 65px 40px;line-height: 2;}
  .radius_line {position: absolute;left: 0;top: 117px;width: 100%;overflow: hidden;height: 150px;z-index: 1;}
  .radius_line_vn {border: 1px solid #CCCBCB;border-radius: 100%;width: 61%;margin: 0 auto;height: 695px;}
  .line_arrow_bottom {position: absolute;right: -13px;width: 25px;top: 11px;height: 100%;text-align: center;}
  .lihe_heading {width: 1px;height: 100%;background: #CCCBCB;display: inline-block;}
  .line_arrow_bottom i {color: #CCCBCB;font-size: 14px;position: absolute;bottom: 0px;left: -0.5px;line-height: 7px;}
  .after_before_row {margin: 10px 0 0px 0;}
  .after_before_row h4 {font-family: 'Playfair Display', serif; color: #201E20;font-size: 34px;margin-bottom: 55px;text-align: center;font-weight: 400;}

  /* Service Page */
  .title_service p {max-width: 100%;text-align: center;margin-bottom: 30px;}
  .title_service, .title_service h1 , .exeptional_sub_title, .exeptional_title {text-align: center;}
  .absolute_img {opacity: 0.4 ;right: 0; width: 100%; text-align: center;}
  .exeptional_title {margin-bottom: 30px;line-height: 1.2;}
  .exeptional_l {width: 100%;}
  .exeptional_img img:last-child {position: relative;top: auto;right: auto;margin: 0;} 
  .see_testimonials_row { padding: 0px 0 60px 0;}  
  .exeptional_img img {width: 50%;margin: 0!important;padding: 10px;}
  .exeptional_img  {margin-top: 30px;}
  .posts_item_img, .posts_item_desk {width: 100%; padding: 0!important;} 
  .posts_item {padding:60px 0;}
  .posts_item_title {text-align: center; margin-top: 20px; margin-bottom: 20px;}
  .posts_item .more {float: right;}
  .strong_team_text {padding: 0;} 


  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {font-family: 'Source Sans Pro', sans-serif;font-weight: 300;display:block;margin-bottom: 20px;padding: 0; line-height: 1;color: #201E20;}
  h1, .h1{font-size:72px;}
  h2, .h2{font-size:64px;}
  h3, .h3{font-size:58px;}
  h4, .h4{font-size:48px;}
  h5, .h5{font-size:38px;}
  h6, .h6{font-size:28px;} 


  /* 2.9 Other Styles */
  .align-items-center {-ms-flex-align: center!important;align-items: center!important;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;}
  .center {text-align: center;}
  .jarallax {height: auto; background-attachment: fixed;background-position: center center;background-repeat: no-repeat;background-size: cover;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;position: relative;} 
  .more {display: inline-block;position: relative;padding-right: 15px;}
  .more::before {-webkit-transform: translateX(0) translateZ(0);transform: translateX(0) translateZ(0);transition: -webkit-transform 0.3s ease;transition: transform 0.3s ease;transition: transform 0.3s ease, -webkit-transform 0.3s ease;content: "\f105";display: inline-block;font: normal normal normal 14px/1 FontAwesome;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;font-size: 12px;color: var(--theme_color);position: absolute;right: 0;top: 6px;}
  .more:hover::before{-webkit-transform: translateX(5px) translateZ(0);transform: translateX(5px) translateZ(0);}
  .home main {padding-top: 0;}
  main {padding-top: 115px;}
  .home main {padding-top: 0;}
  .video {margin-top: -199px;padding-bottom: 74px;}
  .video .container {text-align: center;position: relative;z-index: 2;max-width: 945px; }
  .video .container iframe {border-radius: 5px;} 
	.t_b_line {position: relative;}
	.t_b_line::before {content: '';position: absolute;width:100%;height: 50px;right: 0px;top: 0;}
	.t_b_line::after {content: '';position: absolute;width:100%;height: 50px;right: 0px;bottom: 0;}
  .ourstaff .get_service {margin-top: 100px;margin-bottom: 20px;}
	iframe {width: 100%;}
  .show {display: block!important;} 
  .col-2 {display: block; max-width: none;}

  .row:before, .row:after {content: " ";display: table; clear: both;}    

  .row.stores_list_row {
    margin-top: 37px !important;
    position: relative;
  }
 

</style>


<script>
export default {
  beforeMount: function () {
    console.log('mounted');
  }

}
</script>