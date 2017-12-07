/*
 * @Author: zhen chen
 * @Date: 2017-10-17 13:50:08
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-10-17 13:50:08
 * @description vuex状态管理的入口
 */

import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
require('es6-promise').polyfill()

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
