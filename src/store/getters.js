/*
 * @Author: Piscs.z
 * @Date: 2018-03-27 15:07:17
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-20 14:05:56
 * @description 状态管理 getters 部分
 *
 * // 示例
 * const getters = {
 *   testData: state => state.testData
 * }
 */
import _ from 'lodash'

const getters = {
  moduleType: state => state.moduleType,
  currentSubNav: state => _.isNull(state.currentSubNav) ? [] : state.currentSubNav,
  userInfo: state => state.userInfo
}

export default getters
