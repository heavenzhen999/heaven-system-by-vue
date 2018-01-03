<template>
  <div class='module-copy-to-shear-plate'>
    flash方案：chrome浏览器无效，应该是没开启flash的原因
    <el-row>
      <el-col :span='6'>
        <el-input v-model="input" placeholder="请输入需要进行复制的内容"></el-input>
      </el-col>
      <el-col :span='2'>
        <el-button ref="copy-button">复制</el-button>
        <!-- <input id="copy-button" type="button" :data-clipboard-text="input" value="复制"></input> -->
        <!-- <button id="copy-button" :data-clipboard-text="input"></button> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import './js/ZeroClipboard.swf'
export default {
  data() {
    return {
      input: null,
      button: null
    }
  },
  watch: {
    input(newVal) {
      this.$refs['copy-button'].$el.setAttribute('data-clipboard-text', newVal)
    }
  },
  mounted() {
    let client = new ZeroClipboard(this.$refs['copy-button'].$el)
    // let client = new ZeroClipboard(document.getElementById('copy-button'))
    client.on('ready', function(readyEvent) {
      // alert( 'ZeroClipboard SWF is ready!' )
      client.on('aftercopy', function(event) {
        // `this` === `client`
        // `event.target` === the element that was clicked
        event.target.style.display = 'none'
        alert('Copy Success')
      })
    })
  }
}
</script>

<style scoped>
.module-copy-to-shear-plate{
  height: 300px;
  width: 100%;
}
</style>
