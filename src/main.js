/*
 * @Author: zhen chen
 * @Date: 2017-07-16 14:04:44
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-27 16:02:47
 * @description 入口文件
 */

import Vue from 'vue'

import '@/assets/css/basic.css'
import 'element-ui/lib/theme-default/index.css'                         // 引入element-ui组件CSS样式
import '@/assets/scss/font-awesome.scss'

import 'babel-polyfill'
import router from './router'                                           // vue-router
import store from './store'                                             // vuex
import axios from '@/assets/js/vueAxios'
import ElementUI from 'element-ui'                                      // 引入element-ui组件
import ol from 'openlayers'                                             // 引入openlayers
import page from './App'
import '@/assets/plugins/jQuery/js/jquery-vendor'                       // 引入jquery
import '@/assets/plugins/jsColor/jscolor.js'                            // 安装jsColor颜色选择器
import '../mock/index.js'                                               // 引入mock
import '@/assets/plugins/ZeroClipboard/ZeroClipboard.min.js'
ZeroClipboard.config({
  swfPath: './static/ZeroClipboard.swf'
})
Vue.use(ElementUI)                                                      // 安装组件
Vue.use(axios)
Vue.prototype.$ol = ol

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#page',
  router,
  store,
  template: '<page/>',
  components: { page }
})
