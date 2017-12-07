/*
 * @Author: zhen chen
 * @Date: 2017-11-30 21:44:05
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-30 22:27:13
 * @description 用来存储option配置项的
 */
import line1 from './line/极坐标双数值轴.js'
import line2 from './line/大数据量面积图.js'

class Center {
  constructor() {
    this.line1 = null
    this.line2 = null
  }
  get 'line-极坐标双数值轴'() {
    this.line1 === null ? this.line1 = line1() : null
    return this.line1
  }
  get 'line-大数据量面积图'() {
    this.line2 === null ? this.line2 = line2() : null
    return this.line2
  }
}

let center = new Center()
export default center
