/*
 * @Author: zhen chen
 * @Date: 2018-01-03 14:06:43
 * @Last Modified by: zhen chen
 * @Last Modified time: 2018-01-03 14:32:02
 * @description 一个代码高亮库
 */

<template>
  <div class="module-highlinght">
    <pre>
      <code class="html">
        &lt;button&gt;
        &lt;/button&gt;
      </code>
    </pre>
    <pre>
      <code class="javascript">
        var a = new Code();
      </code>
    </pre>
  </div>
</template>

<script>
import 'highlight.js/styles/default.css'
import highlinght from 'highlight.js'
export default {
  data() {
    return {}
  },
  mounted() {
    highlinght.initHighlightingOnLoad()
  }
}
</script>

<style scoped>
.module-highlinght{
  height: 200px;
  width: 100%;
}
</style>
