/*
 * @Author: Piscs.z
 * @Date: 2018-03-27 15:06:26
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-18 13:59:48
 * @description 状态管理   actions
 *
 *
 * // 示例
 * import * as actionTypes from './actions-types'
 * import * as mutationTypes from './mutation-types'
 *
 * const actions = {
 *   [actionTypes.SAVE_TESTDATA]({ commit }, params) {
 *     // 保存用户信息
 *     commit(mutationTypes.SET_TESTDATA, params)
 *   },
 * }
 *
 * export default actions
 */

import * as actionTypes from './actions-types'
import * as mutationTypes from './mutation-types'
import router from '@/router'

const actions = {
  [actionTypes.CHANGE_MODULE_TYPE]({ commit }, params) {
    commit(mutationTypes.CHANGE_MODULE_TYPE, params)

    // 修改对应的显示menu数据
    setTimeout(() => {
      // 如果未将rooter的整理到,则将路由数据进行整理成Map,并发送
      // 在此处进行传入信息
      for (let i of router.options.routes) {
        if (i.name === `${params.toLowerCase()}`) {
          commit(mutationTypes.CHANGE_CURRENT_SUBNAV, i.children.map((i, index) => {
            return {
              index, // index属性未起到作用，menu内使用的为name属性
              label: i.label || i.name,
              name: i.name
            }
          }))
          break
        }
      }
    }, 0)
  }
}

export default actions
