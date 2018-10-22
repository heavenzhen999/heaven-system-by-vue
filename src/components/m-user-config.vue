/*
import { mapGetters } from 'vuex';
 * @Author: chen zhen
 * @Date: 2018-09-20 14:15:13
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-20 14:44:15
 * @Description 用户设置
 */

<template>
  <div class="m-user-config">
    <span class="m-user-config__text">{{welcomeText}}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
    // 欢迎文字
    welcomeText() {
      if (_.isNull(this.userInfo)) return ''
      return `欢迎，${this.userInfo.name}`
    }
  }
}
</script>

<style lang="scss">
.m-user-config{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.m-user-config__text{
  padding: 0 10px;
}
</style>
