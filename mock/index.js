/*
 * @Author: chen zhen
 * @Date: 2018-09-20 11:32:32
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-20 13:41:37
 * @Description mock模块
 */
let Mock = require('mockjs')

// 只有当允许使用Mock的时候，才进行注册
if (process.env.MOCK) {
  Mock.mock('/sys/login', 'post', req => {
    return {
      status: 0, // status === - 正常状态
      messsage: null
    }
  })
}
// 输出结果
export default Mock
