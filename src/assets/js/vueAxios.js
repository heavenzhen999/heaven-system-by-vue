/*
 * @Author: zhen chen
 * @Date: 2017-10-16 22:46:23
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-10-16 23:36:25
 * @descrption 整合axios和jsonp的文件
 */
import axios from 'axios'
import originJsonp from 'jsonp'
require('es6-promise').polyfill()
function jsonp(url, option) {
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
};

export default {
  install(Vue) {
    Vue.prototype.$axios = axios
    Vue.axios = axios
    Vue.prototype.$jsonp = jsonp
    Vue.jsonp = jsonp
  }
}
