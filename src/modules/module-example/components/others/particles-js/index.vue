/*
 * @Author: zhen chen
 * @Date: 2018-01-03 10:51:16
 * @Last Modified by: zhen chen
 * @Last Modified time: 2018-01-03 11:14:02
 * @description particles-js 库 初步试用
 */

<template>
  <div class="module-particles-js" id="particles-js"></div>
</template>

<script>
import 'particles.js'
export default {
  mounted() {
    this.$axios('./static/data/particles.json').then((res) => {
      particlesJS('particles-js', res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.module-particles-js{
  height: 800px;
  width: 100%;
}
</style>


