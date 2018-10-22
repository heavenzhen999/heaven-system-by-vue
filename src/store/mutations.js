/*
 * @Author: Piscs.z
 * @Date: 2018-03-27 15:08:19
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-20 14:05:26
 * @description 状态管理 mutations 部分
 *              用于修改状态
 *
 * // 示例
 * import * as types from './mutation-types'
 *
 * const mutations = {
 *  [types.SET_TESTDATA](state, o) {
 *    state.testData = o
 *  }
 * }
 *
 * export default mutations
 *
 */
import {
  MODULE_TYEPS
} from '@/assets/const'

import * as types from './mutation-types'

const mutations = {
  [types.CHANGE_MODULE_TYPE](state, o) {
    // 模块类型只有三种 HOME EXAMPLE TOOL
    if (MODULE_TYEPS.includes(o)) {
      state.moduleType = o
    }
  },
  [types.CHANGE_CURRENT_SUBNAV](state, o) {
    state.currentSubNav = o
  },
  [types.CHANGE_USER_INFO](state, o) {
    state.userInfo = o
  }
}

export default mutations
