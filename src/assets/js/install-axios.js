/*
 * @Author: chen zhen
 * @Date: 2018-06-22 15:10:52
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-20 13:24:13
 * @Description: 将axios 绑定到 vue 上
 */
import _axios from 'axios'
_axios.defaults.timeout = 10000 // 默认超时时间改为5000
// _axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
_axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

let requestTrue = req => {
  console.log(`axios进行数据请求`, req)
  return req
}

let requestFalse = reqErr => {
  console.error(`axios数据请求失败！`, reqErr)
  return Promise.reject(reqErr)
}

let responseTrue = res => {
  console.log(`axios数据请求成功`, res)
  return res
}

let responseFalse = resErr => {
  console.log(`axios数据请求错误！`, resErr)
  return Promise.reject(resErr)
}

_axios.interceptors.request.use(requestTrue, requestFalse)

_axios.interceptors.response.use(responseTrue, responseFalse)

export default {
  install(Vue) {
    Vue.prototype.$axios = _axios
    Vue.axios = _axios
  }
}

// 向外暴露，单独引用axios
export const axios = _axios
