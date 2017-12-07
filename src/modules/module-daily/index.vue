/*
 * @Author: zhen chen
 * @Date: 2017-10-16 23:59:59
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-28 18:18:30
 * @description "日常"模块主文件
 */

<template>
  <div class="module-daily-contain module-contain"  ref="module-contain">
    <router-view></router-view>
  </div>
</template>

<script>

export default {}
</script>

<style scoped>
.module-daily-contain{
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;
  width: inherit;
}
</style>
