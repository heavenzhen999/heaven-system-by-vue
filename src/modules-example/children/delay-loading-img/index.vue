/*
 * @Author: zhen chen
 * @Date: 2017-11-10 11:45:57
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-18 16:12:16
 * @description 延时加载图片功能
 */

<template>
  <div class="delay-loading-img" ref="img-list">
    <img src="" alt="" data-src="./static/assets/imgs/1.jpg" class="img-contain">
    <img src="" alt="" data-src="./static/assets/imgs/2.jpg" class="img-contain">
    <img src="" alt="" data-src="./static/assets/imgs/3.jpg" class="img-contain">
    <img src="" alt="" data-src="./static/assets/imgs/4.jpg" class="img-contain">
    <img src="" alt="" data-src="./static/assets/imgs/5.jpg" class="img-contain">
    <img src="" alt="" data-src="./static/assets/imgs/6.jpg" class="img-contain">
    <img src="" alt="" data-src="./static/assets/imgs/7.jpg" class="img-contain">
    <img src="" alt="" data-src="./static/assets/imgs/8.jpg" class="img-contain">
    <img src="" alt="" data-src="./static/assets/imgs/9.jpg" class="img-contain">
    <img src="" alt="" data-src="./static/assets/imgs/10.jpg" class="img-contain">
    <img src="" alt="" data-src="./static/assets/imgs/11.jpg" class="img-contain">
    <img src="" alt="" data-src="./static/assets/imgs/12.jpg" class="img-contain">
    <img src="" alt="" data-src="./static/assets/imgs/13.jpg" class="img-contain">
    <img src="" alt="" data-src="./static/assets/imgs/14.jpg" class="img-contain">
  </div>
</template>
<script>
export default {
  mounted() {
    // this.$refs['img-list'].onscroll = this.scrollEvent
    window.onscroll = this.scrollEvent
    this.scrollEvent()
  },
  beforeDestroy() {
    window.onscroll = null
  },
  methods: {
    scrollEvent() {
      for (let i of this.$refs['img-list'].children) {
        let imgTop = i.getBoundingClientRect().top
        if (window.innerHeight >= imgTop + 200) {
          if (i.getAttribute('src') === '') i.setAttribute('src', i.getAttribute('data-src'))
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>

.delay-loading-img{
  // @include in-module-size();
  width: 800px;
  overflow-y: auto;
  img{
    display: block;
    min-height: 200px;
    width: 100%;
  }
}
</style>
