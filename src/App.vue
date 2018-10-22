/*
 * @Author: chen zhen
 * @Date: 2018-06-07 17:49:45
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-20 14:08:59
 * @Description: 入口
 */

<template>
  <div class="app">
    <g-login v-if="userInfo === null"></g-login>
    <template v-if="userInfo !== null" >
      <m-logo class="app__logo"></m-logo>
      <g-header class="app__header"></g-header>
      <g-menu class="app__menu"></g-menu>
      <g-container class="app__container"></g-container>
      <!-- //TODO 添加一个 sidebar -->
      <g-footer class="app__footer"></g-footer>
    </template>
  </div>
</template>

<script>
import GLogin from 'components/g-login'
import MLogo from 'components/m-logo'
import GHeader from 'components/g-header'
import GFooter from 'components/g-footer'
import GMenu from 'components/g-menu'
import GContainer from 'components/g-container'

import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    GLogin,
    MLogo,
    GHeader,
    GFooter,
    GMenu,
    GContainer
  }
}
</script>

<style lang="scss">

.app{
  position: absolute;
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: $menuWidth auto;
  grid-template-rows: $headerHeight auto $footerheight;
  grid-template-areas: "logo header"
                       "menu container"
                       "footer footer";
  grid-gap: 8px 6px;
  background-color: $backgroundColor;
}
.app__logo{
  grid-area: logo;
}
.app__header{
  grid-area: header;
}
.app__menu{
  grid-area: menu;
}
.app__container{
  grid-area: container;
}
.app__footer{
  grid-area: footer;
}
</style>
