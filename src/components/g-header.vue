/*
 * @Author: chen zhen
 * @Date: 2018-06-17 11:09:15
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-20 14:41:23
 */

<template>
  <header class="g-header">
    <!-- 最右边放置：用户信息 -->
    <m-user-config class="g-header__user-config"></m-user-config>
  </header>
</template>

<script>
import MUserConfig from '@/components/m-user-config'

export default {
  components: {
    MUserConfig
  }
}
</script>

<style lang="scss">
.g-header{
  display: flex;
  justify-content: flex-end;
}
.g-header__user-config{}
</style>
