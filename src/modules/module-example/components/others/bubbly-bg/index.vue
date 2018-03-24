/*
 * @Author: zhen chen
 * @Date: 2018-01-04 11:58:11
 * @Last Modified by: zhen chen
 * @Last Modified time: 2018-01-04 12:03:39
 * @description "bubble-bg" 库
 */

<template>
  <div class="module-buddy-bg">
    <canvas class="canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
import 'bubbly-bg'
export default {
  data() {
    return {}
  },
  mounted() {
    window.bubbly({
      canvas: this.$refs['canvas']
    })
  }
}
</script>

<style lang="scss" scoped>
.module-buddy-bg{
  height: 600px;
  width: 100%;
  .canvas {
    height: 600px;
    width: 600px;
  }
}
</style>
