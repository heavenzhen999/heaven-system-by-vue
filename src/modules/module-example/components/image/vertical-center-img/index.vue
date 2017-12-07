/*
 * @Author: zhen chen
 * @Date: 2017-11-26 23:09:50
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-26 23:23:11
 * @description 一个存放垂直和水平图片剧中的实例
 */

<template>
  <div class="module-vertical-center-img">
    <el-row>
      <div class="img-contain">
        <img ref="img1" class="img" src="./images/global.jpeg" alt="">
      </div>
    </el-row>
    <el-row>
      <div class="img-contain">
        <img ref="img2" class="img" src="./images/flex.png" alt="">
      </div>
    </el-row>
  </div>
</template>

<script>
import objectFitImages from 'object-fit-images'

export default {
  data() {
    return {}
  },
  mounted() {
    objectFitImages(this.$refs.img1)
    objectFitImages(this.$refs.img2)
  }
}
</script>

<style lang="scss" scoped>
.module-vertical-center-img{
  .img{
    object-fit: contain;
    font-family: 'object-fit: contain;';
    height: 300px;
    width: 100%;
  }
}
</style>
