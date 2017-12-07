<template>
  <div class="module-qrcode">
    <el-row>
      <el-col :span="6">
        <el-input v-model.lazy="text" placeholder="请输入想显示的信息"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="change">变换</el-button>
      </el-col>
    </el-row>
    <div ref="canvasContain" class="canvas-contain">
      <canvas ref="canvas" height="0" width="0"></canvas>
      <img class="image" ref="image" src="" alt="">
    </div>
  </div>
</template>

<script>
// import Qrcode from 'qrcode'
let QRCode = require('qrcode')
export default {
  data() {
    return {
      text: 'sample text'
    }
  },
  mounted() {
    this.change()
  },
  methods: {
    change() {
      // this.$refs.canvas.height = this.$refs.canvasContain.offsetHeight
      // this.$refs.canvas.width = this.$refs.canvasContain.offsetWidth
      // this.onlyCanvas()
      this.canvasAndImage()
    },
    /**
     * 仅仅使用canvas
     */
    onlyCanvas(text) {
      QRCode.toCanvas(this.$refs.canvas, this.text, {
        scale: 5
      }, function(error) {
        if (error) {
          console.error(error)
        } else {
          console.log('success!')
        }
      })
    },
    /**
     * canvas和img变迁均可使用
     */
    canvasAndImage() {
      let opts = {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        rendererOpts: {
          quality: 0.3
        }
      }
      // QRCode.toDataURL(this.$refs.canvas, this.text, opts, (err, url) => {
      //   if (err) {
      //     throw err
      //   } else {
      //     var img = this.$refs.image
      //     img.src = url
      //   }
      // })
      QRCode.toDataURL(this.text, opts, (err, url) => {
        if (err) {
          throw err
        } else {
          var img = this.$refs.image
          img.src = url
        }
      })
    }
  }
}
</script>

<style scoped>
.canvas-contain{
  height: 400px;
  width: 100%;
}
.image{
  height: 256px;
  widht: 256px;
}
</style>
