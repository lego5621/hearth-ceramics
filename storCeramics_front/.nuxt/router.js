import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _25194b94 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _46718ae7 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _0f528f93 = () => interopDefault(import('../pages/shop/card/index.vue' /* webpackChunkName: "pages/shop/card/index" */))
const _17548804 = () => interopDefault(import('../pages/shop/category.vue' /* webpackChunkName: "pages/shop/category" */))
const _38bd94dc = () => interopDefault(import('../pages/shop/category/_category/series/_series/page/_page.vue' /* webpackChunkName: "pages/shop/category/_category/series/_series/page/_page" */))
const _5f180315 = () => interopDefault(import('../pages/shop/card/checkout.vue' /* webpackChunkName: "pages/shop/card/checkout" */))
const _a720327c = () => interopDefault(import('../pages/blog/page/_page.vue' /* webpackChunkName: "pages/blog/page/_page" */))
const _80b22734 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _730898f1 = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _44d12659 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _25194b94,
    name: "about"
  }, {
    path: "/contact",
    component: _46718ae7,
    name: "contact"
  }, {
    path: "/shop/card",
    component: _0f528f93,
    name: "shop-card"
  }, {
    path: "/shop/category",
    component: _17548804,
    name: "shop-category",
    children: [{
      path: ":category?/series/:series?/page/:page?",
      component: _38bd94dc,
      name: "shop-category-category-series-series-page-page"
    }]
  }, {
    path: "/shop/card/checkout",
    component: _5f180315,
    name: "shop-card-checkout"
  }, {
    path: "/blog/page/:page?",
    component: _a720327c,
    name: "blog-page-page"
  }, {
    path: "/blog/:slug?",
    component: _80b22734,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _730898f1,
    name: "product-slug"
  }, {
    path: "/",
    component: _44d12659,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
