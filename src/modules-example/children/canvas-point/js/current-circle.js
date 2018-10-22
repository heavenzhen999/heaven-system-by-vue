/*
 * @Author: zhen chen
 * @Date: 2017-11-03 15:32:38
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-04 18:46:05
 * @description 鼠标对应的点
 */
import Circle from './circle.js'

export default class CurrentCircle extends Circle {
  /**
   * 移动方法（重写）
   * @param {*} x
   * @param {*} y
   */
  move() {
    this._draw()
    this._dispachLeng()
  }
}
