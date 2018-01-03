/*
 * @Author: zhen chen
 * @Date: 2018-01-03 13:56:27
 * @Last Modified by: zhen chen
 * @Last Modified time: 2018-01-03 13:56:27
 * @description 一个复制到剪切板的类库
 */

<template>
  <div class='module-copy-to-shear-plate'>
    <!-- Target -->
    <textarea id="bar">Mussum ipsum cacilds...</textarea>
    <!-- Trigger -->
    <button class="btn" ref="btn" data-clipboard-action="cut" data-clipboard-target="#bar">
        Cut to clipboard
    </button>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  data() {
    return {
      button: null
    }
  },
  watch: {},
  mounted() {
    this.button = new Clipboard(this.$refs['btn'])
  }
}
</script>

<style scoped>
.module-copy-to-shear-plate{
  height: 300px;
  width: 100%;
}
</style>
