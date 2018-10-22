/*
 * @Author: chen zhen
 * @Date: 2018-09-13 16:10:16
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-13 16:10:16s
 * @Description 404页面
 */

<template>
  <div class="g-404">
    这里是404页面
    <el-button @click="turnHome" size="mini" type="primary">跳转到主页</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    /**
     * 跳转到主页
     */
    turnHome() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss">
</style>
