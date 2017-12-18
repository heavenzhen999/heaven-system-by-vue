<template>
  <div class="module-code-mirror">
    <textarea class="code-textarea" ref="code-area" cols="30" rows="10" />
    <el-button type="primary" @click="runCode">Run</el-button>
    <div class="html-container">
      <iframe ref="sandIframe" src="" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/mode/javascript/javascript'
import CodeMirror from 'codemirror'
export default {
  data() {
    return {
      codeMirror: null,
      iframe: null
    }
  },
  mounted() {
    this.iframe = this.$refs['sandIframe']
    this.initCodeMirror()
  },
  methods: {
    initCodeMirror() {
      this.codeMirror = CodeMirror.fromTextArea(this.$refs['code-area'], {
        mode: 'javascript',
        gutters: ['hintGutter', 'errorGutter', 'highlightGutter'],
        lineNumbers: true,
        matchBrackets: true,
        indentUnit: 4
      })
    },
    runCode() {
      console.log('运行代码！')
    }
  }
}
</script>

<style lang="scss" scoped>
.module-code-mirror{
  height: 800px;
  width: 100%;
  color: #fff;
  .code-textarea{
    resize: none;
    font-family: "Consolas, 'Courier New', monospace";
  }
  .html-container{
    min-height: 30px;
  }
}
</style>
