/*
 * @Author: zhen chen
 * @Date: 2017-10-17 00:00:21
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-10-19 18:08:51
 * @description "文档"模块主文件
 */

<template>
  <div class="module-document-contain">
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.module-document-contain {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  width: inherit;
}
#test-editormd{
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  &.all-screen{
    position: fixed;
    z-index: 10000;
  }
}
</style>
