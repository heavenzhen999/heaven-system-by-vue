<template>
  <div class="page-main">
    <div class="page-main-background"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../../assets/scss/color';
@import '../../assets/scss/pageModule';
.page-main{
  display: inline-block;
  vertical-align: top;
  width: 100% - $sidebarLeftWidth - $sidebarRightWidth;
  // border-radius: 2px;
  // border: 2px solid transparent;
  .page-main-background{
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    width: 100% - $sidebarLeftWidth - $sidebarRightWidth;
    background: rgba(255, 255, 255, 0.03);
  }
}
</style>
