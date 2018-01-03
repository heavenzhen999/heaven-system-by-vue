/*
 * @Author: zhen chen
 * @Date: 2018-01-03 17:22:56
 * @Last Modified by: zhen chen
 * @Last Modified time: 2018-01-03 17:44:47
 * @description 流程图 
 */
<template>
  <div class="module-flowchart">
    <div id="diagram" class="flowchart-container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    // cdn引入
    var diagram = window.flowchart.parse(
      `
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...

st->op1->cond
cond(yes)->io->e
cond(no)->sub1(right)->op1
      `)
    diagram.drawSVG('diagram')
  }
}
</script>

<style scoped>

</style>

