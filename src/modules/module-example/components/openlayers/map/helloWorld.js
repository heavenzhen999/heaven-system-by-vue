/*
 * @Author: zhen chen
 * @Date: 2017-12-02 10:05:01
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-12-02 10:21:25
 * @description HelloWorld示例
 */

import ol from 'openlayers'

/**
 * 初始化地图
 * @param {HTMLElement} contain 地图容器
 * @param {object} mapInstance 需要进行挂接的对象
 */
let map = (contain, mapInstance) => {
  mapInstance = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: contain,
    controls: ol.control.defaults({
      attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
        collapsible: false
      })
    }),
    view: new ol.View({
      center: [0, 0],
      zoom: 2
    })
  })
}

export default map
