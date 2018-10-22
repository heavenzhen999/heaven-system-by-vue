/*
 * @Author: chen zhen
 * @Date: 2018-06-12 16:15:18
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-20 14:05:42
 * @Description: 用来数据共享数据存储
 *               所有属性在初始值的时候都为null,
 *               如果为Array/Object的时候 在Getter部分进行转换成 [] / {}
 *
 * // 示例
 * const state = {
 *  testData: [1, 2, 3] // 用于测试的数据
 * }
 *
 * export default state
 */

// import {
//   MODULE_TYEPS
// } from 'const-value'
const state = {
  moduleType: null, // 模块类型只有三种 HOME EXAMPLE TOOL
  currentSubNav: null, // 当前二级导航信息
  userInfo: null // 用户信息
}

export default state
