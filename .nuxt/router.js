import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _00c055be = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _173662a3 = () => interopDefault(import('../pages/services/index.vue' /* webpackChunkName: "pages/services/index" */))
const _9e7bb74a = () => interopDefault(import('../pages/services/cosmetic/invisalign.vue' /* webpackChunkName: "pages/services/cosmetic/invisalign" */))
const _48981280 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _00c055be,
    name: "home"
  }, {
    path: "/services",
    component: _173662a3,
    name: "services"
  }, {
    path: "/services/cosmetic/invisalign",
    component: _9e7bb74a,
    name: "services-cosmetic-invisalign"
  }, {
    path: "/",
    component: _48981280,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
