/*
 * @Author: zhen chen
 * @Date: 2017-11-30 20:47:10
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-30 22:30:54
 * @description echarts主文件
 */

<template>
  <div class="module-echarts">
    <div class="echarts-contain"  ref="echarts-contain"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './options'
export default {
  data() {
    return {
      echartsInstance: null
    }
  },
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  watch: {
    type(newVal) {
      this.renderECharts(newVal)
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.type !== null) {
        this.renderECharts(this.type)
      }
    })
  },
  methods: {
    renderECharts(type) {
      let option = options[type]
      if (option !== undefined) {
        if (this.echartsInstance !== null) {
          this.echartsInstance.clear()
          this.echartsInstance.setOption(option)
        } else {
          this.echartsInstance = echarts.init(this.$refs['echarts-contain'])
          this.echartsInstance.setOption(option)
        }
      } else {
        console.log('错误的echarts的类型')
      }
    }
  },
  beforeDestroy() {
    this.echartsInstance !== null ? this.echartsInstance.dispose() : null
  }
}
</script>

<style scoped>
.module-echarts{
  height: 600px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
}
.echarts-contain{
  height: 100%;
  width: 100%;
}
</style>
