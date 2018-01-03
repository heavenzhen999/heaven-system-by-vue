/*
 * @Author: zhen chen
 * @Date: 2018-01-03 14:06:43
 * @Last Modified by: zhen chen
 * @Last Modified time: 2018-01-03 16:03:40
 * @description 一个代码高亮库
 */

<template>
  <div class="module-flat-picker">
    <input id="flat-picker-1" ref="flat-picker-1" type="text">
  </div>
</template>

<script>
import 'flatpickr/dist/flatpickr.min.css'
// const flatpickr = require('flatpickr')
import flatpickr from 'flatpickr'
export default {
  data() {
    return {}
  },
  mounted() {
    // flatpickr('#flat-picker-1', {})
    flatpickr(this.$refs['flat-picker-1'], {})
  }
}
</script>

<style lang="scss" scoped>
.module-flat-picker{
  height: 600px;
  width: 100%;
  div{
    display: inline-block;
    vertical-align: top;
    height: 300px;
    width: 49%;
  }
}
</style>
