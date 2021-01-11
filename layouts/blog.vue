<template>
  <div class="main">
  <Nav/>
  <nuxt />
  <ContactForm/>
  <Footer/>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue';
import ContactForm from '~/components/ContactForm.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
  Nav,
  ContactForm,
  Footer
  },
}
</script>

<style lang="stylus">
body 
  background $bg-color

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  outline: 0;
}

a,
a:hover,
a:visited,
a:link {
  text-decoration: none;
}

a:focus,
input:focus,
textarea:focus,
button:focus {
  text-decoration: none;
  outline: none;
}

html,
body {
  font-family: 'Poppins', sans-serif;
  // font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #6C675C;
  background-color: #f9f9f6;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.1;
}

p {
  margin: 0;
  padding: 0;
  line-height: 28px;
}

ul,
li {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}

input[type="text"],
input[type="email"],
input[type="number"],
input[type="tel"],
input[type="url"],
select,
textarea {
  border: 1px solid #CACACA;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
}

a,
button,
input[type="submit"] {
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
}

img {
  max-width: 100%;
}

.pt-130 pb-130 {
  padding: 130px 0;
}

.site-btn {
  background: $accent-color;
  position: relative;
  color: #fff;
  font-weight: 600;
  display: inline-block;
  padding: 18px 36px;
  border-radius: 4px;
  text-align: center;
  -webkit-transition: .3s;
  -o-transition: .3s;
  transition: .3s;
}

.site-btn::after {
  content: "";
  height: 10px;
  width: 10px;
  background: $accent-highlight;
  right: 10px;
  bottom: 8px;
  position: absolute;
  border-radius: 50%;
  -webkit-transition: .2s;
  -o-transition: .2s;
  transition: .2s;
}

.site-btn:hover,
.single-career-box .site-btn.white-bg:hover {
  color: #fff;
  background: #0060a7;
}

.site-btn:hover::after,
.single-career-box .site-btn.white-bg:hover::after {
  background: #3ba441;
}

.site-btn.secondary:hover,
.site-btn.black:hover {
  background: $accent-color;
}

.site-btn.secondary:hover::after,
.site-btn.black:hover::after {
  background: $accent-highlight;
}

.site-btn.secondary {
  background: #0060a7;
}

.site-btn.black {
  background: #223645;
}

.site-btn.black::after {
  background: #334A5C;
}

.section-heading {
  margin-bottom: 40px;
}

.section-heading .sub-title {
  font-size: 14px;
  text-transform: uppercase;
  color: #6C675C;
  font-weight: 700;
  margin-bottom: 21px;
  letter-spacing: 2px;
}

.section-heading .title {
  font-size: 36px;
  font-weight: 700;
  color: #223645;
  margin-bottom: 30px;
  line-height: 45px;
}

.section-heading .title span {
  color: $accent-color;
}

.section-heading .inline-btn {
  color: #223645;
}

.section-heading .inline-btn {
  color: #223645;
}

.section-heading .inline-btn:hover {
  color: $accent-color;
}

.inline-btn {
  font-size: 15px;
  color: #6C675C;
  font-weight: 700;
}

.inline-btn span {
  position: relative;
  display: inline-block;
  -webkit-transition: .3s;
  -o-transition: .3s;
  transition: .3s;
}

.inline-btn span::after {
  content: "";
  border-bottom: 1px solid #A3AEBC;
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  -webkit-transition: .3s;
  -o-transition: .3s;
  transition: .3s;
}

.inline-btn i {
  padding-left: 10px;
  -webkit-transition: .3s;
  -o-transition: .3s;
  transition: .3s;
}

.inline-btn:hover span {
  color: $accent-color;
}

.inline-btn:hover i {
  -webkit-transform: translateX(5px);
  -ms-transform: translateX(5px);
  transform: translateX(5px);
  color: $accent-color;
}

.inline-btn:hover span::after {
  border-color: $accent-color;
}

.page-enter-active, .page-leave-active {
  transition: opacity .2s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
