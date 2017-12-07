/*
 * @Author: zhen chen
 * @Date: 2017-10-17 13:50:41
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-10-17 13:50:41
 * @description 定义mutations
 */

import * as types from './mutation-types'

const mutations = {
  /**
   * 存储监控对象树
   * @param {Object} state VueX实体
   * @param {Array} monitorTree 监控对象树信息
   */
  [types.SAVE_MONITOR_TREE](state, monitorTree) {
    state.monitorTree = monitorTree
  },
  /**
   * 实时更新监控对象位置信息
   * @param {Object} state VueX实体
   * @param {Array} realTimeLocationInfo 监控对象新的信息
   */
  [types.CHANGE_MONITOR_REALTIME_INFO](state, realTimeLocationInfo) {
    state.realTimeLocationInfo = realTimeLocationInfo
  },
  /**
   * 存储字典信息
   * @param {Object} state VueX实体
   * @param {Array} monitorTree 监控对象树信息
   */
  [types.SAVE_DICTIONARY_INFO](state, dicInfo) {
    state.dicInfo = dicInfo
  }
}
export default mutations
