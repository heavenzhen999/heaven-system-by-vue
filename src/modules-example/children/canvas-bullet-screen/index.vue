<template>
  <div class="module-bullet-screen">
    <div ref="canvasContain" class="canvas-contain">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import Barrage from './js/barrage.js'

const textList = [
  '弹幕', '666', '233333333',
  'javascript', 'html', 'css', '前端框架', 'Vue', 'React',
  'Angular', '测试弹幕效果'
]

export default {
  data() {
    return {
      barrage: null,
      interval: null
    }
  },
  mounted() {
    let canvas = this.$refs.canvas
    let ctx = canvas.getContext('2d')
    ctx.font = '20px Microsoft YaHei' // 字体、大小
    ctx.fillStyle = '#000000' // 字体颜色
    ctx.fillText('canvas 绘制文字', 100, 100) // 文本，字体x,y坐标

    this.$refs.canvas.height = this.$refs.canvasContain.offsetHeight
    this.$refs.canvas.width = this.$refs.canvasContain.offsetWidth
    this.barrage = new Barrage(this.$refs.canvas)
    this.barrage.draw()
    this.interval = setInterval(this.textInfo, 100)
  },
  beforeDestroy() {
    clearInterval(this.interval)
    this.interval = null
  },
  methods: {
    textInfo() {
      textList.forEach((t) => {
        this.barrage.shoot(t)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.module-bullet-screen{
  @include in-module-size();
}
.canvas-contain{
  height: 100%;
  width: 100%;
}
</style>
