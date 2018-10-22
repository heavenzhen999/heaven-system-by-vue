/*
 * @Author: chen zhen
 * @Date: 2018-06-17 11:08:45
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-17 16:42:16
 */

<template>
  <div class="g-menu">
    <!-- 模块大类选择按钮 -->
    <page-change></page-change>
    <!-- 模块自相内容 -->
    <menu-second></menu-second>
  </div>
</template>

<script>
import PageChange from '@/components/m-page-change'
import MenuSecond from '@/components/m-menu-second'

export default {
  computed: {},
  components: {
    PageChange,
    MenuSecond
  }
}
</script>

<style lang="scss">
.g-menu{}
</style>
