import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _69f9a5aa = () => interopDefault(import('..\\pages\\charts.vue' /* webpackChunkName: "pages_charts" */))
const _c5344fac = () => interopDefault(import('..\\pages\\widgets.vue' /* webpackChunkName: "pages_widgets" */))
const _8f2b884c = () => interopDefault(import('..\\pages\\base\\breadcrumbs.vue' /* webpackChunkName: "pages_base_breadcrumbs" */))
const _204e8e6d = () => interopDefault(import('..\\pages\\base\\cards.vue' /* webpackChunkName: "pages_base_cards" */))
const _35efd11d = () => interopDefault(import('..\\pages\\base\\carousels.vue' /* webpackChunkName: "pages_base_carousels" */))
const _531776f0 = () => interopDefault(import('..\\pages\\base\\collapses.vue' /* webpackChunkName: "pages_base_collapses" */))
const _ca70258e = () => interopDefault(import('..\\pages\\base\\forms.vue' /* webpackChunkName: "pages_base_forms" */))
const _5c1330ad = () => interopDefault(import('..\\pages\\base\\jumbotrons.vue' /* webpackChunkName: "pages_base_jumbotrons" */))
const _0b5bef6d = () => interopDefault(import('..\\pages\\base\\list-groups.vue' /* webpackChunkName: "pages_base_list-groups" */))
const _2cd24e26 = () => interopDefault(import('..\\pages\\base\\navbars.vue' /* webpackChunkName: "pages_base_navbars" */))
const _3b4e1bd4 = () => interopDefault(import('..\\pages\\base\\navs.vue' /* webpackChunkName: "pages_base_navs" */))
const _6de05aa3 = () => interopDefault(import('..\\pages\\base\\paginations.vue' /* webpackChunkName: "pages_base_paginations" */))
const _22a8c6d4 = () => interopDefault(import('..\\pages\\base\\popovers.vue' /* webpackChunkName: "pages_base_popovers" */))
const _21a6ee2c = () => interopDefault(import('..\\pages\\base\\progress-bars.vue' /* webpackChunkName: "pages_base_progress-bars" */))
const _29f68570 = () => interopDefault(import('..\\pages\\base\\switches.vue' /* webpackChunkName: "pages_base_switches" */))
const _91509550 = () => interopDefault(import('..\\pages\\base\\table.vue' /* webpackChunkName: "pages_base_table" */))
const _374a96cb = () => interopDefault(import('..\\pages\\base\\tables.vue' /* webpackChunkName: "pages_base_tables" */))
const _de74ff94 = () => interopDefault(import('..\\pages\\base\\tooltips.vue' /* webpackChunkName: "pages_base_tooltips" */))
const _43cce683 = () => interopDefault(import('..\\pages\\buttons\\button-groups.vue' /* webpackChunkName: "pages_buttons_button-groups" */))
const _6bdec0b6 = () => interopDefault(import('..\\pages\\buttons\\dropdowns.vue' /* webpackChunkName: "pages_buttons_dropdowns" */))
const _ed514fc6 = () => interopDefault(import('..\\pages\\buttons\\social-buttons.vue' /* webpackChunkName: "pages_buttons_social-buttons" */))
const _65a73e6d = () => interopDefault(import('..\\pages\\buttons\\standard-buttons.vue' /* webpackChunkName: "pages_buttons_standard-buttons" */))
const _6cdce242 = () => interopDefault(import('..\\pages\\icons\\flags.vue' /* webpackChunkName: "pages_icons_flags" */))
const _74947efa = () => interopDefault(import('..\\pages\\icons\\font-awesome.vue' /* webpackChunkName: "pages_icons_font-awesome" */))
const _855e8892 = () => interopDefault(import('..\\pages\\icons\\simple-line-icons.vue' /* webpackChunkName: "pages_icons_simple-line-icons" */))
const _3bdb133a = () => interopDefault(import('..\\pages\\notifications\\alerts.vue' /* webpackChunkName: "pages_notifications_alerts" */))
const _09d55553 = () => interopDefault(import('..\\pages\\notifications\\badges.vue' /* webpackChunkName: "pages_notifications_badges" */))
const _7347cc89 = () => interopDefault(import('..\\pages\\notifications\\modals.vue' /* webpackChunkName: "pages_notifications_modals" */))
const _84f2686e = () => interopDefault(import('..\\pages\\pages\\404.vue' /* webpackChunkName: "pages_pages_404" */))
const _1b96adf4 = () => interopDefault(import('..\\pages\\pages\\500.vue' /* webpackChunkName: "pages_pages_500" */))
const _6460573a = () => interopDefault(import('..\\pages\\pages\\login.vue' /* webpackChunkName: "pages_pages_login" */))
const _b4d0813c = () => interopDefault(import('..\\pages\\pages\\register.vue' /* webpackChunkName: "pages_pages_register" */))
const _c3dcf818 = () => interopDefault(import('..\\pages\\theme\\colors.vue' /* webpackChunkName: "pages_theme_colors" */))
const _2cb16e33 = () => interopDefault(import('..\\pages\\theme\\typography.vue' /* webpackChunkName: "pages_theme_typography" */))
const _1e6cf4e6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/charts",
    component: _69f9a5aa,
    name: "charts"
  }, {
    path: "/widgets",
    component: _c5344fac,
    name: "widgets"
  }, {
    path: "/base/breadcrumbs",
    component: _8f2b884c,
    name: "base-breadcrumbs"
  }, {
    path: "/base/cards",
    component: _204e8e6d,
    name: "base-cards"
  }, {
    path: "/base/carousels",
    component: _35efd11d,
    name: "base-carousels"
  }, {
    path: "/base/collapses",
    component: _531776f0,
    name: "base-collapses"
  }, {
    path: "/base/forms",
    component: _ca70258e,
    name: "base-forms"
  }, {
    path: "/base/jumbotrons",
    component: _5c1330ad,
    name: "base-jumbotrons"
  }, {
    path: "/base/list-groups",
    component: _0b5bef6d,
    name: "base-list-groups"
  }, {
    path: "/base/navbars",
    component: _2cd24e26,
    name: "base-navbars"
  }, {
    path: "/base/navs",
    component: _3b4e1bd4,
    name: "base-navs"
  }, {
    path: "/base/paginations",
    component: _6de05aa3,
    name: "base-paginations"
  }, {
    path: "/base/popovers",
    component: _22a8c6d4,
    name: "base-popovers"
  }, {
    path: "/base/progress-bars",
    component: _21a6ee2c,
    name: "base-progress-bars"
  }, {
    path: "/base/switches",
    component: _29f68570,
    name: "base-switches"
  }, {
    path: "/base/table",
    component: _91509550,
    name: "base-table"
  }, {
    path: "/base/tables",
    component: _374a96cb,
    name: "base-tables"
  }, {
    path: "/base/tooltips",
    component: _de74ff94,
    name: "base-tooltips"
  }, {
    path: "/buttons/button-groups",
    component: _43cce683,
    name: "buttons-button-groups"
  }, {
    path: "/buttons/dropdowns",
    component: _6bdec0b6,
    name: "buttons-dropdowns"
  }, {
    path: "/buttons/social-buttons",
    component: _ed514fc6,
    name: "buttons-social-buttons"
  }, {
    path: "/buttons/standard-buttons",
    component: _65a73e6d,
    name: "buttons-standard-buttons"
  }, {
    path: "/icons/flags",
    component: _6cdce242,
    name: "icons-flags"
  }, {
    path: "/icons/font-awesome",
    component: _74947efa,
    name: "icons-font-awesome"
  }, {
    path: "/icons/simple-line-icons",
    component: _855e8892,
    name: "icons-simple-line-icons"
  }, {
    path: "/notifications/alerts",
    component: _3bdb133a,
    name: "notifications-alerts"
  }, {
    path: "/notifications/badges",
    component: _09d55553,
    name: "notifications-badges"
  }, {
    path: "/notifications/modals",
    component: _7347cc89,
    name: "notifications-modals"
  }, {
    path: "/pages/404",
    component: _84f2686e,
    name: "pages-404"
  }, {
    path: "/pages/500",
    component: _1b96adf4,
    name: "pages-500"
  }, {
    path: "/pages/login",
    component: _6460573a,
    name: "pages-login"
  }, {
    path: "/pages/register",
    component: _b4d0813c,
    name: "pages-register"
  }, {
    path: "/theme/colors",
    component: _c3dcf818,
    name: "theme-colors"
  }, {
    path: "/theme/typography",
    component: _2cb16e33,
    name: "theme-typography"
  }, {
    path: "/",
    component: _1e6cf4e6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
