/*
 * @Author: zhen chen
 * @Date: 2017-10-24 15:12:02
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-10 14:41:16
 * @description 坐标系转换class文件(ES6)
 */

export default class CoordinateTranslate {
  // constructor() {}
  PI = 3.14159265358979324
  // PI = Math.PI
  X_PI = this.PI * 3000.0 / 180.0
  translate = ({coorIn, coorOut, lat, lon}) => {
    if (coorIn === 'WGS-84' && coorOut === 'GCJ-02') {
      let coord = this._gcjEncrypt({lat, lon})
      return {lat: coord.lat, lon: coord.lon}
    } else if (coorIn === 'WGS-84' && coorOut === 'BD-09') {
      let coord = this._gcjEncrypt({lat, lon})
      let coord2 = this._bdEncrypt({lat: coord.lat, lon: coord.lon})
      return {lat: coord2.lat, lon: coord2.lon}
    } else if (coorIn === 'GCJ-02' && coorOut === 'WGS-84') {
      let coord = this._gcjDecryptExact({lat, lon})
      return {lat: coord.lat, lon: coord.lon}
    } else if (coorIn === 'GCJ-02' && coorOut === 'BD-09') {
      let coord = this._bdEncrypt({lat, lon})
      return {lat: coord.lat, lon: coord.lon}
    } else if (coorIn === 'BD-09' && coorOut === 'WGS-84') {
      let coord = this._bdDecrypt({lat, lon})
      let coord2 = this._gcjDecryptExact({lat: coord.lat, lon: coord.lon})
      return {lat: coord2.lat, lon: coord2.lon}
    } else if (coorIn === 'BD-09' && coorOut === 'GCJ-02') {
      let coord = this._bdDecrypt({lat, lon})
      return {lat: coord.lat, lon: coord.lon}
    } else if (coorIn === 'WGS-84' && coorOut === '投影坐标系') {
      let coord = this._mercatorEncrypt({lat, lon})
      return {lat: coord.lat, lon: coord.lon}
    } else if (coorIn === '投影坐标系' && coorOut === 'WGS-84') {
      let coord = this._mercatorDecrypt({lat, lon})
      return {lat: coord.lat, lon: coord.lon}
    } else {
      return {
        lat: null,
        lon: null,
        info: '不识别的坐标系转换'
      }
    }
  }
  _delta = ({lat, lon}) => {
    let a = 6378245.0 //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。
    let ee = 0.00669342162296594323 //  ee: 椭球的偏心率。
    let dLat = this._transformLat({lon: (lon - 105.0), lat: (lat - 35.0)})
    let dLon = this._transformLon({lon: (lon - 105.0), lat: (lat - 35.0)})
    let radLat = lat / 180.0 * this.PI
    let magic = Math.sin(radLat)
    magic = 1 - ee * magic * magic
    let sqrtMagic = Math.sqrt(magic)
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * this.PI)
    dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * this.PI)
    return { 'lat': dLat, 'lon': dLon }
  }
  // WGS-84 to GCJ-02
  _gcjEncrypt = ({lat, lon}) => {
    if (this._outOfChina({lat, lon})) {
      return { lat, lon }
    }
    let d = this._delta({lat, lon})
    return { lat: lat + d.lat, lon: lon + d.lon }
  }
  // GCJ-02 to WGS-84
  _gcjDecrypt = ({lat, lon}) => {
    if (this._outOfChina({lat, lon})) {
      return { lat, lon }
    }
    let d = this._delta({lat, lon})
    return { lat: lat - d.lat, lon: lon - d.lon }
  }
  // GCJ-02 to WGS-84 exactly
  _gcjDecryptExact = ({lat, lon}) => {
    let initDelta = 0.01
    let threshold = 0.000000001
    let dLat = initDelta
    let dLon = initDelta
    let mLat = lat - dLat
    let mLon = lon - dLon
    let pLat = lat + dLat
    let pLon = lon + dLon
    let wgsLat
    let wgsLon
    let i = 0
    while (1) {
      wgsLat = (mLat + pLat) / 2
      wgsLon = (mLon + pLon) / 2
      let tmp = this._gcj_encrypt(wgsLat, wgsLon)
      dLat = tmp.lat - lat
      dLon = tmp.lon - lon
      if ((Math.abs(dLat) < threshold) && (Math.abs(dLon) < threshold)) { break }
      if (dLat > 0) { pLat = wgsLat } else { mLat = wgsLat }
      if (dLon > 0) { pLon = wgsLon } else { mLon = wgsLon }
      if (++i > 10000) { break }
    }
    return { lat: wgsLat, lon: wgsLon }
  }
  // GCJ-02 to BD-09
  _bdEncrypt = ({lat, lon}) => {
    let z = Math.sqrt(lon * lon + lat * lat) + 0.00002 * Math.sin(lat * this.X_PI)
    let theta = Math.atan2(lat, lon) + 0.000003 * Math.cos(lon * this.X_PI)
    let bdLon = z * Math.cos(theta) + 0.0065
    let bdLat = z * Math.sin(theta) + 0.006
    return { lat: bdLat, lon: bdLon }
  }
  // BD-09 to GCJ-02
  _bdDecrypt = ({lat, lon}) => {
    let x = lon - 0.0065
    let y = lat - 0.006
    let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * this.X_PI)
    let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * this.X_PI)
    let gcjLon = z * Math.cos(theta)
    let gcjLat = z * Math.sin(theta)
    return { lat: gcjLat, lon: gcjLon }
  }
  // WGS-84 to Web mercator
  // mercatorLat -> y mercatorLon -> x
  _mercatorEncrypt = ({lat, lon}) => {
    let x = lon * 20037508.34 / 180
    let y = Math.log(Math.tan((90 + lat) * this.PI / 360)) / (this.PI / 180)
    y = y * 20037508.34 / 180
    return { lat: y, lon: x }
  }
  // Web mercator to WGS-84
  // mercatorLat -> y mercatorLon -> x
  _mercatorDecrypt = ({lat, lon}) => {
    let x = lon / 20037508.34 * 180
    let y = lat / 20037508.34 * 180
    y = 180 / this.PI * (2 * Math.atan(Math.exp(y * this.PI / 180)) - this.PI / 2)
    return { lat: y, lon: x }
  }
  // two point's distance
  distance = (latA, lonA, latB, lonB) => {
    let earthR = 6371000
    let x = Math.cos(latA * this.PI / 180) * Math.cos(latB * this.PI / 180) * Math.cos((lonA - lonB) * this.PI / 180)
    let y = Math.sin(latA * this.PI / 180) * Math.sin(latB * this.PI / 180)
    let s = x + y
    if (s > 1) { s = 1 }
    if (s < -1) { s = -1 }
    let alpha = Math.acos(s)
    let distance = alpha * earthR
    return distance
  }
  _outOfChina = ({lat, lon}) => {
    if (lon < 72.004 || lon > 137.8347) { return true }
    if (lat < 0.8293 || lat > 55.8271) { return true }
    return false
  }
  _transformLat = ({lon, lat}) => {
    let ret = -100.0 + 2.0 * lon + 3.0 * lat + 0.2 * lat * lat + 0.1 * lon * lat + 0.2 * Math.sqrt(Math.abs(lon))
    ret += (20.0 * Math.sin(6.0 * lon * this.PI) + 20.0 * Math.sin(2.0 * lon * this.PI)) * 2.0 / 3.0
    ret += (20.0 * Math.sin(lat * this.PI) + 40.0 * Math.sin(lat / 3.0 * this.PI)) * 2.0 / 3.0
    ret += (160.0 * Math.sin(lat / 12.0 * this.PI) + 320 * Math.sin(lat * this.PI / 30.0)) * 2.0 / 3.0
    return ret
  }
  _transformLon = ({lon, lat}) => {
    let ret = 300.0 + lon + 2.0 * lat + 0.1 * lon * lon + 0.1 * lon * lat + 0.1 * Math.sqrt(Math.abs(lon))
    ret += (20.0 * Math.sin(6.0 * lon * this.PI) + 20.0 * Math.sin(2.0 * lon * this.PI)) * 2.0 / 3.0
    ret += (20.0 * Math.sin(lon * this.PI) + 40.0 * Math.sin(lon / 3.0 * this.PI)) * 2.0 / 3.0
    ret += (150.0 * Math.sin(lon / 12.0 * this.PI) + 300.0 * Math.sin(lon / 30.0 * this.PI)) * 2.0 / 3.0
    return ret
  }
}
