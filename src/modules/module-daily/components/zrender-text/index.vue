/*
 * @Author: zhen chen
 * @Date: 2017-12-08 17:53:44
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-12-11 15:08:27
 * @description "zRender" 练习模块
 */

<template>
  <div class="module-zrender-test" ref="zrender">
  </div>
</template>

<script>
// import zrender from 'zrender'
import zRender from 'zrender/dist/zrender.min.js'
export default {
  data() {
    return {
      zr: null
    }
  },
  mounted() {
    this.zr = zRender.init(this.$refs['zrender'])
    this.drewCircle()
  },
  methods: {
    /**
     * 画圆
     */
    drewCircle() {
      let circle = new zRender.Circle({
        shape: {
          cx: this.zr.getWidth() / 2,
          cy: this.zr.getHeight() / 2,
          r: 40
        },
        style: {
          fill: 'red',
          stroke: '#F00'
        }
      })
      this.zr.add(circle)
    }
  }
}
</script>

<style scoped>
.module-zrender-test{
  height: 600px;
}
</style>

