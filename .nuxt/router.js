import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _032f49e6 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _69026528 = () => interopDefault(import('../pages/services/index.vue' /* webpackChunkName: "pages/services/index" */))
const _5360da20 = () => interopDefault(import('../pages/services/cosmetic/invisalign.vue' /* webpackChunkName: "pages/services/cosmetic/invisalign" */))
const _9211934a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _032f49e6,
    name: "home"
  }, {
    path: "/services",
    component: _69026528,
    name: "services"
  }, {
    path: "/services/cosmetic/invisalign",
    component: _5360da20,
    name: "services-cosmetic-invisalign"
  }, {
    path: "/",
    component: _9211934a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
