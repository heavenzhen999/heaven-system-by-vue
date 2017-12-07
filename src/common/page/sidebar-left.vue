<template>
  <div class="sidebar-left">
    <div class="sidebar-left-banner">
      <div class="title">
        HEAVEN
      </div><!--
      --><el-button :class="['module-button', {'active': activeModule==='home'}]" icon="fa-home" value="home" @click="moduleClick">HOME</el-button>
    </div>
    <div class="sidebar-left-module-menu">
      <el-button-group >
        <el-button :class="['module-button', {'active': activeModule==='document'}]" icon="fa-pencil-square-o" value="document" @click="moduleClick">文档</el-button>
        <el-button :class="['module-button', {'active': activeModule==='example'}]" icon="fa-eercast" value="example" @click="moduleClick">实例</el-button>
        <el-button :class="['module-button', {'active': activeModule==='daily'}]" icon="delete" value="daily" @click="moduleClick">日常</el-button>
      </el-button-group>
    </div>
    <sidevar-left-menu :menuInfo="menuInfo" :defaultActive="menuDefaultActive"></sidevar-left-menu>
  </div>
</template>

<script>
import SidevarLeftMenu from './sidebar-left-menu'
export default {
  data() {
    return {
      activeModule: window.location.hash.split('/')[1],                                          // 默认路由变量
      menuInfo: [],                                                                              // 菜单内容
      menuDefaultActive: null
    }
  },
  watch: {
    // 路由跟着变量改变
    activeModule(newVal) {
      this.$router.push({path: '/' + newVal})
    },
    $route(newVal, oldVal) {
      this.refreshMenuInfo()
    }
  },
  mounted() {
    this.refreshMenuInfo()
  },
  methods: {
    /**
     * 改变模块点击事件
     * @param {Event} e 点击事件回调
     */
    moduleClick(e) {
      this.activeModule = e.currentTarget.getAttribute('value')
    },
    /**
     * 刷新模块菜单
     */
    refreshMenuInfo() {
      this.menuInfo = this.getMenuInfo()
    },
    /**
     * 获取当前的二级导航以及当前的可选择
     */
    getMenuInfo() {
      let routes = []
      // 遍历查找
      for (let i of this.$router.options.modules) {
        if (i.path === this.activeModule) {
          for (let j of i.childrenModules) {
            let route = {
              name: j.name,
              description: j.description,
              children: []
            }
            for (let k of j.children) {
              route.children.push({
                path: '/' + this.activeModule + '/' + k.path,
                name: k.name,
                description: k.description
              })
            }
            routes.push(route)
          }
          break
        }
      }
      return routes
    }
  },
  components: {
    SidevarLeftMenu
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/color';
@import '../../assets/scss/pageModule';

$bannerheight: 70px;
.sidebar-left{
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: $sidebarLeftWidth;
  .sidebar-left-banner{
    height: $bannerheight;
    width: 100%;
    .title{
      display: inline-block;
      vertical-align: top;
      width: 66.6%;
      min-width: 160px;
      line-height: $bannerheight;
      font-size: 34px;
      text-align: center;
      cursor: default;
      @extend .highlight-text;
      @extend .no-select;
    }
    .module-home{
      display: inline-block;
      vertical-align: top;
      width: 33.3%;
      line-height: $bannerheight;
      color: #999;
    }
    .module-button{
      line-height: $bannerheight;
      @extend .module-button-all;
    }
    .module-button.active{
      font-size: 16px;
      @extend .highlight-text;
    }
    .module-button:hover{
      @extend .highlight-text;
    }
  }
  .sidebar-left-module-menu{
    .el-button-group{
      width: 100%;
      .module-button{
        line-height: 30px;
        @extend .module-button-all;
      }
      .module-button.active{
        font-size: 16px;
        @extend .highlight-text;
      }
      .module-button:hover{
        @extend .highlight-text;
      }
    }
  }
}
.module-button-all{
  padding: 0;
  width: 33.3%;
  color: #999;
  font-size: 14px;
  text-align: center;
  background: transparent;
  border: none;
}
</style>
