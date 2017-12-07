/*
 * @Author: zhen chen
 * @Date: 2017-12-02 11:41:58
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-12-02 12:04:55
 * @description 一个事件处理模块(很多判定类型都没进行)
 */
import { uuid, log } from '../utils/index.js'
let eventList = {

}

class Event {
  constructor(id) {
    let uid = id || uuid()
    if (eventList[uid] === undefined) {
      eventList[uid] = this
    } else {
      log('重复的事件id', 'error')
    }
    this.eventObj = {}
  }
  /**
   * 绑定事件
   * @param {String} eventName
   * @param {Function} event
   * @param {Object} _this?
   */
  on(eventName, event, _this) {
    // 初始化一个类型
    if (this.eventObj[eventName] === undefined) {
      this.eventObj[eventName] = []
    }
    // 避免重复绑定
    if (!this.eventObj[eventName].includes(event)) {
      this.eventObj[eventName].push(event.bind(_this || null))
    } else {
      log('相同事件不进行重复绑定', 'warn')
    }
  }
  /**
   * 触发事件事件
   * @param {String} eventName
   * @param {Object} obj 返回参数
   */
  emit(eventName, obj) {
    if (this.eventObj[eventName] !== undefined) {
      for (let event of this.eventObj[eventName]) {
        event(obj)
      }
    } else {
      log('不存在，或者已经清空的事件类型', 'warn')
    }
  }
  /**
   * 解除绑定事件
   * @param {String} eventName
   * @param {Function} event?
   */
  off(eventName, event) {
    if (event === undefined) {
      delete this.eventObj[eventName]
    } else {
      this.eventObj[eventName] = this.eventObj[eventName].filters((_event) => {
        if (event !== _event) {
          return true
        } else {
          return false
        }
      })
    }
  }
}

export default Event
