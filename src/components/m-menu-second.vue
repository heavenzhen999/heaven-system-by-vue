/*
import { mapGetters } from 'vuex';
 * @Author: chen zhen
 * @Date: 2018-09-13 15:06:40
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-18 16:11:30
 * @Description 二级导航页
 */

<template>
  <div class="m-menu-second">
    <div class="m-menu-second__container">
      <el-menu v-if="showMenu" ref="menu" class="m-menu-second__menu"
        background-color=""
        text-color="#909399"
        active-text-color="#0b9ec7"
        :unique-opened="true" @select="chooseMenu">
        <template v-for="(item, index) of menuInfo">
          <el-submenu v-if="item.children" :key="index" :index="item.name">
            <template slot="title">{{item.label || item.description}}</template>
            <el-menu-item v-for="(childItem, childIndex) of item.children" :key="childIndex" :index="childItem.path">
              {{childItem.label}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-if="!item.children" :key="index" :index="item.name">
              {{item.label}}
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  CHANGE_MODULE_TYPE
} from '@/store/actions-types'

export default {
  data() {
    return {
      showMenu: true
    }
  },
  computed: {
    ...mapGetters([
      'moduleType',
      'currentSubNav'
    ]),
    menuInfo() {
      return this.currentSubNav === null ? [] : this.currentSubNav
    }
  },
  mounted() {
    // 完美的menu导航功能
    let route = this.$router.matcher.match(window.location.hash.substr(1))
    // 第一级
    let firstNav = route.matched[0]
    this.$store.dispatch(CHANGE_MODULE_TYPE, firstNav.name.toUpperCase())
  },
  updated() {
    // 每次变化选择第一个
    // 如果当前的route与匹配的相同，则进行特殊的处理

    let route = this.$router.matcher.match(window.location.hash.substr(1))
    // 如果当前的 大类型和 和 url的大类型相同，则使用secondNav，否是使用第一个
    if (this.moduleType.toLowerCase() === route.matched[0].name) {
      // 第一级
      let secondNav = route.matched[1]
      this.chooseMenu(secondNav.name)
      this.initActoveMenu(secondNav.name)
    } else {
      let firstIndex = this.currentSubNav[0].name
      this.chooseMenu(firstIndex)
      this.initActoveMenu(firstIndex)
    }
  },
  methods: {
    /**
     * 选择某个菜单项
     * @param {String} menuIndex 导航对应的label属性
     */
    chooseMenu(menuIndex) {
      this.$router.push({ name: menuIndex })
    },
    /**
     * 解析当前的router,然后对menu进行激活效果的展示
     */
    initActoveMenu(menuIndex) {
      /**
       * 由于在进行切换menu数据的时候dom进行了重用，
       * this.$refs['menu']的key值不进行改变，
       * 遂updateActiveIndex()方法不能及时祈祷作用。
       *
       * element-ui源码
       * updateActiveIndex(val) {
       *    const item = this.items[val] || this.items[this.activeIndex] || this.items[this.defaultActive];
       *    if (item) {
       *      this.activeIndex = item.index;
       *      this.initOpenedMenu();
       *    } else {
       *      this.activeIndex = null;
       *    }
       *  },
       *
       * 遂使用element-ui源码进行处理此功能
       */
      this.$nextTick(() => {
        this.$refs['menu'].activeIndex = menuIndex
        this.$refs['menu'].initOpenedMenu()
      })
    }
  }
}
</script>

<style lang="scss">
/**
 * 将menu的样式进行改写，背景色改为透明，hover和active的伪类效果为黑色半透明
 **/
.m-menu-second__menu{
  border-right: none;
  background-color: transparent;
  .el-menu-item{
    background: transparent;
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background-color: rgba(255, 255, 255, 0.2);
  }
}
</style>
