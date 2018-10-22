/*
 * @Author: chen zhen
 * @Date: 2018-06-17 11:08:55
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-18 14:21:28
 */

<template>
  <div class="g-container">
    <div class="g-container__container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.g-container{
  display: flex;
  justify-content: center;
  align-items: center
}
.g-container__container{
  padding: $intervalSize;
  border: 2px solid $themeColor;
  box-shadow: 0px 0px 20px $themeColor;
}
</style>
