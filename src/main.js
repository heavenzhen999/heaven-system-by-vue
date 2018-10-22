/*
 * @Author: chen zhen
 * @Date: 2018-06-17 11:09:45
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-20 13:25:58
 */

// 垫片
import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// polyfill
import 'es6-promise'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import _ from 'lodash'

import 'normalize.css'
import '@/assets/css/common.css'
import '@/assets/scss/index.scss'

import axios from '@/assets/js/install-axios'
import elementUI from '@/assets/js/install-element-ui.js'

// 使用mock
import '@/../mock'

/**
 * 对element-ui的样式引入 暂时使用CDN的
 */
// import 'element-ui/lib/theme-chalk/index.css'

// 引用全局变量
global._ = _

/**
 * 对Cesium css样式的引入，目前暂时使用在模版内进行引入，减少app.css的体积
 * <link rel="stylesheet" href="./Widgets/widgets.css">
 */
// import 'cesium/Widgets/widgets.css'

Vue.use(elementUI)
Vue.use(axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
