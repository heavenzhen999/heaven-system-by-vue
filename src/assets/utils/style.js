/*
 * @Author: zhen chen
 * @Date: 2017-12-02 11:45:17
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-12-02 11:46:37
 * @description 处理央视
 */

/**
* 获取样式
* @param element 需要获取样式的目标元素
* @param name 演示属性
*/
export let getStyle = (element, name) => {
  var computedStyle
  try {
    computedStyle = document.defaultView.getComputedStyle(element, null)
  } catch (e) {
    computedStyle = element.currentStyle
  }
  if (name !== 'float') {
    return computedStyle[name]
  } else {
    return computedStyle['cssFloat'] || computedStyle['styleFloat']
  }
}
/**
 * 设置样式
 * @param element 需要获取样式的目标元素
 * @param name 演示属性
 * @param value 对样式的赋值
 */
export let setStyle = (element, name, value) => {
  if (name !== 'float') {
    element.style[name] = value
  } else {
    element.style['cssFloat'] = value
    element.style['styleFloat'] = value
  }
}
