/*
 * @Author: zhen chen
 * @Date: 2017-10-18 14:25:22
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-25 17:13:00
 * @description 每个主题左侧的列表
 */

<template>
  <el-menu ref="secondModuleMenu" class="second-module-menu" :router="true" :unique-opened="true" theme="dark">
    <template>
      <el-submenu v-for="(item,index) of menuInfo" :key="index" :index="item.name">
        <template slot="title">{{item.description}}</template>
        <el-menu-item v-for="(childItem,childIndex) of item.children" :key="childIndex" :index="childItem.path">
          {{childItem.description}}
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
export default {
  props: {
    menuInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      defaultActive: null
    }
  },
  watch: {
    menuInfo(newVal, oldVal) {
      window.secondModuleMenu = this.$refs.secondModuleMenu
      let path = window.location.hash.substr(1)
      this.$refs.secondModuleMenu.activeIndex = path
      for (let i of newVal) {
        for (let j of i.children) {
          if (j.path === path) {
            this.$refs.secondModuleMenu.openedMenus = [i.name]
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.second-module-menu{
  margin: 10px 20px 0 20px;
  background: rgba(255, 255, 255, 0.05);
  & /deep/ .el-menu{
    background: rgba(0, 0, 0, 0.15);
  }
}
</style>
