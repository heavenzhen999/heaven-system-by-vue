/*
 * @Author: zhen chen
 * @Date: 2017-10-17 00:00:59
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-28 18:15:26
 * @description "实例"模块主文件
 */
<template>
  <div class="module-example-contain module-contain" ref="module-contain">
    <router-view></router-view>
  </div>
</template>

<script>
import dynamics from 'dynamics.js'
export default {
  data() {
    return {}
  },
  watch: {
    $route() {
      // this.resizeModuleContain()
    }
  },
  mounted() {
    // this.resizeModuleContain()
  },
  methods: {
    /**
     * 调整模块容器的规格
     */
    resizeModuleContain() {
      // 刷新Dom后执行
      this.$nextTick(() => {
        let marginTop = (window.innerHeight - this.$refs['module-contain'].offsetHeight) / 2
        marginTop < 0 ? marginTop = 0 : null
        dynamics.animate(this.$refs['module-contain'], {
          marginTop
        }, {
          type: dynamics.easeOut,
          duration: 700
        })
      })
    }
  }
}
</script>

<style scoped>
.module-example-contain{
  width: 100%;
}
</style>
