/*
 * @Author: zhen chen 
 * @Date: 2017-08-05 00:57:53 
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-28 18:32:34
 * @description 整个主Vue
 */
 
<template>
  <div class="page">
    <!-- 为了处理display：inline-block;中间有空格的问题 -->
    <sidebar-left></sidebar-left><!--
    --><page-main></page-main><!--
    --><sidebar-right></sidebar-right>
    <home-button v-show="isShowHomeButton"></home-button>
  </div>
</template>

<script>
import SidebarLeft from '@/common/page/sidebar-left'
import SidebarRight from '@/common/page/sidebar-right'
import PageMain from '@/common/page/page-main'
import HomeButton from '@/common/page/home-button.vue'
import dynamics from 'dynamics.js'
export default {
  data() {
    return {
      contain: null,
      moduleContainHeight: 0,
      isShowHomeButton: false
    }
  },
  beforeCreate() {
    // 修改body的宽度
    document.body.style.width = (window.innerWidth - 20) + 'px'
    document.body.style.minHeight = window.innerHeight + 'px'
  },
  watch: {
    $route() {
      this.resizeModuleContainHeight()
    },
    moduleContainHeight(newVal) {
      let marginTop = (window.innerHeight - newVal) / 2
      // 跟据marginTop来确定是否显示按钮
      if (marginTop < 0) {
        marginTop = 0
        this.isShowHomeButton = true
      } else {
        this.isShowHomeButton = false
      }
      dynamics.animate(this.contain, {
        marginTop: marginTop * 0.8
      }, {
        type: dynamics.easeOut,
        duration: 700
      })
    }
  },
  mounted() {
    this.resizeModuleContainHeight()
  },
  methods: {
    resizeModuleContainHeight() {
      this.$nextTick(() => {
        this.contain = document.getElementsByClassName('module-contain')[0]
        if (this.contain !== undefined) {
          this.moduleContainHeight = this.contain.offsetHeight
        }
      })
    }
  },
  components: {
    SidebarLeft,
    SidebarRight,
    PageMain,
    HomeButton
  }
}
</script>

<style lang="scss">
@import './assets/scss/color.scss';
body{
  background: rgb(14, 22, 32);
}
.page {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: inherit;
  color: $themeTextColor;
  @extend .page-background;
}
</style>
