/*
 * @Author: zhen chen
 * @Date: 2017-12-02 11:47:20
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-12-02 11:47:20
 * @description 生成uuid的方法（根据当前日期）
 */

export default () => {
  let d = new Date().getTime()
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
  return uuid
}
