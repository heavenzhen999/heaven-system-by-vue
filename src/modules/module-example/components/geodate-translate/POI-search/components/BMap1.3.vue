/*
 * @Author: zhen chen 
 * @Date: 2017-08-21 09:35:04 
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-10-24 16:49:38
 * @description 引用一个iframe 里边使用的是百度v1.3的脚本 
 */

<template>
  <div class="BMap-module">
    <iframe ref="mapIframe" name="mapIframe"  src="" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: 0
    }
  },
  props: {
    /**
     * @description 需要进行查询的位置信息
     */
    searchAddressList: {
      type: Array,
      default: function() {
        return []
      }
    },
    /**
     * @description 需要进行查询的坐标信息
     */
    searchCoordinationList: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  watch: {
    searchAddressList(newValue) {
      // 先进行清空
      this.$emit('clearSearchResult')
      this.searchAddress(newValue)
    },
    searchCoordinationList(newValue) {
      // 先进行清空
      this.$emit('clearSearchResult')
      this.searchoordination(newValue)
    }
  },
  mounted() {
    // 引用页面
    this.$refs.mapIframe.src = './static/Iframe/BMap/BMap.html'
    // 开始定时查询
    this.findMapLoaded()
  },
  methods: {
    /**
     * @description 获取子页面地图是否加载成功
     */
    findMapLoaded() {
      let time = setInterval(function() {
        // 循环获取当前页面
        this.times++
        if (this.times === 100) {
          clearInterval(time)
        }
        if (window.mapIframe !== undefined && window.mapIframe.mapLoaded !== undefined && window.mapIframe.mapLoaded === true) {
          this.$emit('mapLoaded')
          clearInterval(time)
        }
      }.bind(this), 100)
    },
    /**
     * @description 进行查询位置
     * @param {Array} addressList 需要进行查询的位置信息
     */
    searchAddress(addressList) {
      window.mapIframe.searchAddress(addressList)
      this.findSearchResult()
    },
    /**
     * @description 获取查询结果
     */
    findSearchResult() {
      let time = setInterval(function() {
        // 循环获取当前页面
        this.times++
        if (this.times === 100) {
          clearInterval(time)
        }
        if (window.mapIframe !== undefined && window.mapIframe.searchLoaded !== undefined && window.mapIframe.searchLoaded === true) {
          window.mapIframe.searchLoaded = false
          this.$emit('searchResult', window.mapIframe.templateList)
          clearInterval(time)
        }
      }.bind(this), 100)
    }
  }
}
</script>

<style scoped>
.BMap-module {
  height: 100%;
  width: 100%;
}

.map {
  height: 100%;
  width: 100%;
}
</style>
