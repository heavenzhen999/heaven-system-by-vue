<template>
  <div class="sidebar-right">
    <div class="module">
      <module-time></module-time>
      <module-expressage></module-expressage>
    </div>
  </div>
</template>

<script>
import ModuleTime from '@/modules/module-home/components/clock/index'
import ModuleExpressage from '@/modules/module-home/components/expressage/index.vue'
export default {
  data() {
    return {}
  },
  components: {
    ModuleTime,
    ModuleExpressage
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/color';
@import '../../assets/scss/pageModule';

.sidebar-right{
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: $sidebarRightWidth;
  .module{
    margin: 10px;
    padding: 6px;
    @extend .module-line;
  }
  .module:first-child{
    margin-top: 20px;
  }
}

</style>
