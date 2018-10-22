/*
 * @Author: chen zhen
 * @Date: 2018-06-17 11:18:54
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-13 16:45:21
 * @Description: 模块选择按钮
 */

<template>
  <div class="m-page-change">
    <!-- 不使用element的group-div组件 -->
    <!-- 自定义设置即可 -->
    <!-- 部分实例 -->
    <div class="m-page-change__container">
      <div :class="getButtonClassList('HOME')" @click="chooseModuleType('HOME')">主页</div>
      <div :class="getButtonClassList('EXAMPLE')" @click="chooseModuleType('EXAMPLE')">实例</div>
      <div :class="getButtonClassList('TOOL')" @click="chooseModuleType('TOOL')">工具</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { CHANGE_MODULE_TYPE } from '@/store/mutation-types.js'
import { CHANGE_MODULE_TYPE } from '@/store/actions-types.js'
export default {
  computed: {
    ...mapGetters([
      'moduleType'
    ])
  },
  methods: {
    /**
     * 获取对应button的类名
     * @param {String} moduleType 模块类型
     */
    getButtonClassList(moduleType) {
      if (moduleType !== this.moduleType) return ['m-page-change__button']
      return ['m-page-change__button', 'm-page-change__button--active']
    },
    /**
     * 选择模块的类型
     * @param {String} moduleType 模块类型
     */
    chooseModuleType(moduleType) {
      if (this.moduleType !== moduleType) this.$store.dispatch(CHANGE_MODULE_TYPE, moduleType)
    }
  }
}
</script>

<style lang="scss">
.m-page-change__container{
  display: flex;
  line-height: 2rem;
}
.m-page-change__button{
  flex: 1;
  cursor: pointer;
  // hover 效果
  &:hover{
    // 背景色
    @include background-dark;
  }
}
.m-page-change__button--active{
  @include font-color-active;
  // 背景色
  @include background-dark;
  &:hover{
    // 透明背景色
    @include background-transparent;
  }
}
</style>
