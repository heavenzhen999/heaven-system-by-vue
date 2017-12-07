/*
 * @Author: zhen chen
 * @Date: 2017-12-02 10:03:14
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-12-02 10:16:45
 * @description 用来存储option配置项的
 */
import HelloWorld from './map/helloWorld'
class Center {
  constructor() {
    this.helloWorld = null
  }
  get 'HelloWorld'() {
    this.helloWorld === null ? this.helloWorld = HelloWorld : null
    return this.helloWorld
  }
}

let center = new Center()
export default center
