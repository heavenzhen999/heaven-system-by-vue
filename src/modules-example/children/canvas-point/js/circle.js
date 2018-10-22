/*
 * @Author: zhen chen
 * @Date: 2017-11-02 16:55:31
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-18 14:53:55
 * @description 小圆点类
 */

export default class Circle {
  constructor(_option) {
    let _default = {
      maxWidth: 10,
      minWidth: 10,
      maxHeight: 10,
      minHeight: 10,
      maxRadius: 10,
      minRadius: 2,
      lineLong: 10,
      maxOpacity: 0.8,
      minOpacity: 0.2,
      speed: 1,
      content: null
    }
    let option = {}
    Object.assign(option, _default, _option)
    this.option = option
    this.x = option.x || (Math.random() * (option.maxWidth - option.minWidth)) + option.minWidth
    this.y = option.y || (Math.random() * (option.maxHeight - option.minHeight)) + option.minHeight
    this.radius = (Math.random() * (option.maxRadius - option.minRadius)) + option.minRadius
    this.lineLong = this.option.lineLong / 10
    this._x = Math.random() * option.speed - 0.5
    this._y = Math.random() * option.speed - 0.5
    this.opacity = ((Math.random() * (option.maxOpacity - option.minOpacity)) + option.minOpacity).toFixed(2)
    this.content = this.option.content
    this.brothers = []
  }
  /**
   * 移动点(包括重新渲染)
   */
  move() {
    this._move()
    this._draw()
    this._dispachLeng()
  }
  /**
   * 点的横纵坐标剂型变换
   */
  _move() {
    this.x += this._x
    this.y += this._y
    if (this.x > this.option.maxWidth || this.x < this.option.minWidth) {
      this._x = -this._x
      this.x += this._x * 2
    }
    if (this.y > this.option.maxHeight || this.y < this.option.minHeight) {
      this._y = -this._y
      this.y += this._y * 2
    }
  }
  /**
   * 画点
   */
  _draw() {
    this.content.beginPath()
    this.content.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.content.closePath()
    this.content.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
    this.content.fill()
  }

  /**
   * 连接线
   */
  lines = []
  /**
   * 判断长度
   */
  _dispachLeng() {
    // 先不判断是否重复绘制长线
    for (let i of this.brothers) {
      if (i !== this) {
        let isLong = (Math.pow((i.x - this.x), 2) + Math.pow((i.y - this.y), 2) - Math.pow(this.lineLong, 2))
        if (isLong <= 0) this._drawLine(i, this)
      }
    }
  }
  /**
   * 画线
   * @param {Circle} point1
   * @param {Circle} point2
   */
  _drawLine(point1, point2) {
    this.content.beginPath()
    this.content.moveTo(point1.x, point1.y)
    this.content.lineTo(point2.x, point2.y)
    this.content.closePath()
    this.content.strokeStyle = `rgba(255, 255, 255, ${this.opacity / 2})`
    this.content.stroke()
  }
}
