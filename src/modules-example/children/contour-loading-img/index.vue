/*
 * @Author: zhen chen
 * @Date: 2017-12-07 15:10:25
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-18 16:08:53
 * @description 一个图片缓加载的实例
 */

<template>
  <div class="module-contour">
    <div class="image-container">
      <img v-if="img2Show" src="./images/melbourne.jpg" class="img2" ref="img2" alt="">
      <img src="./images/melbourne.svg" ref="img1" class="img1" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img2Show: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.img2Show = true
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.module-contour{
  height: 530px;
  .image-container{
    position: relative;
    margin: 0 auto;
    height: 530px;
    width: 710px;
    .img1{
      position: absolute;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 100;
    }
    .img2{
      position: absolute;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 200;
    }
  }
}
</style>
