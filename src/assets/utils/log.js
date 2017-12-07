/*
 * @Author: zhen chen
 * @Date: 2017-12-02 11:49:00
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-12-02 11:49:00
 * @description log模块(未完成，仍需对判定进行补全)
 */

let fun = {
  normal: (message) => {
    window.console && window.console.log ? window.console.log(message) : null
  },
  warn: (message) => {
    window.console && window.console.warn ? window.console.warn(message) : fun['normal'](message)
  },
  error: (message) => {
    window.console && window.console.error ? window.console.error(message) : fun['warn'](message)
  },
  debug: (message) => {
    window.console && window.console.debug ? window.console.debug(message) : fun['error'](message)
  }
}
/**
 * 控制台输出统合
 * @param {*} 需要进行输出的信息
 * @param {String} 类型可选址，error/warn/normal(default)
 */
export default (message, type) => {
  if (fun[type] === undefined) {
    fun['normal'](message)
    type !== undefined ? fun['error']('log传入类型错误，请传入error/warn/normal或缺省值') : null
  } else {
    fun[type](message)
  }
}
