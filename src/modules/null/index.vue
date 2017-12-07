/*
 * @Author: zhen chen
 * @Date: 2017-08-05 01:46:17
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-08-05 20:02:38
 * @description "日常"模块主VUE文件
 */

<template>
  <page-content>
    <page-menu slot="panel"></page-menu>
    <div slot="content">
      <router-view></router-view> 
    </div>
  </page-content>
</template>

<script>
import pageContent from '@/common/components/pageContent/pageContent1'
import pageMenu from '@/common/components/pageMenu/pageMenu'
export default {
  components: {
    pageContent,
    pageMenu
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
