<template>
  <div class="module-canvas-point">
    <div ref="canvasContain" class="canvas-contain">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import { getStyle } from '@/assets/utils/index.js'
import Circle from './js/circle.js'
import CurrentCircle from './js/current-circle.js'

export default {
  data() {
    return {
      canvasDom: null,
      canvasContext: null,
      canvasHeight: null,
      canvasWidth: null,
      pointsNum: 200, // 编辑点的数量
      points: [], // 点的合集
      mousePoint: null, // 鼠标的点
      maxWidth: null,
      minWidth: null,
      maxHeight: null,
      minHeight: null,
      mouseX: null, // 鼠标X
      mouseY: null, // 鼠标Y
      isStop: false // 是否停止循环
    }
  },
  mounted() {
    this.init()
    this.draw()
  },
  activated() {
    this.isStop = false
    this.draw()
  },
  beforeDestroy() {
    this.isStop = true
  },
  methods: {
    /**
     * 初始化
     */
    init() {
      this.canvasDom = this.$refs.canvas
      this.canvasContext = this.canvasDom.getContext('2d')

      window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

      this.resize()

      // 移动中心点
      this.canvasContext.translate(this.canvasWidth * 0.5, this.canvasHeight * 0.5)

      // 绑定鼠标移入事件，鼠标移出事件
      this.$refs.canvasContain.onmousemove = this.mouseOver
      this.$refs.canvasContain.onmouseout = this.mouseOut
    },
    /**
     * 调整大小
     */
    resize() {
      this.canvasDom.height = this.canvasContext.height = this.canvasHeight = parseInt(getStyle(this.$refs.canvasContain, 'height'))
      this.canvasDom.width = this.canvasContext.width = this.canvasWidth = parseInt(getStyle(this.$refs.canvasContain, 'width'))
      this.maxHeight = this.canvasHeight * 0.5
      this.minHeight = -this.canvasHeight * 0.5
      this.maxWidth = this.canvasWidth * 0.5
      this.minWidth = -this.canvasWidth * 0.5
    },
    /**
     * 画点
     */
    draw() {
      if (this.points.length === 0) {
        let option = {
          maxWidth: this.maxWidth,
          minWidth: this.minWidth,
          maxHeight: this.maxHeight,
          minHeight: this.minHeight,
          lineLong: 400,
          maxOpacity: 0.32,
          minOpacity: 0.32,
          maxRadius: 6,
          minRadius: 4,
          speed: 5,
          content: this.canvasContext
        }
        // 初始化
        while (this.points.length < this.pointsNum) {
          let circle = new Circle(option)
          circle.move()
          this.points.push(circle)
        }
        this.mousePoint = new CurrentCircle(option)
      } else {
        this.canvasContext.clearRect(this.minWidth, this.minHeight, this.canvasWidth, this.canvasHeight)
        for (let i of this.points) {
          if (i.brothers.length === 0) i.brothers = this.points
          i.move()
        }
        this.mousePoint.move()
      }
      if (this.isStop !== true) {
        window.requestAnimationFrame(this.draw)
      }
    },
    moveMousePoint() {
      if (this.mousePoint.brothers.length === 0) this.mousePoint.brothers = this.points
      this.mousePoint.x = this.mouseX
      this.mousePoint.y = this.mouseY
      this.mousePoint.move()
    },
    /**
     * 鼠标移入
     */
    mouseOver(e) {
      e = e || window.event
      this.mouseX = e.offsetX - this.canvasWidth / 2
      this.mouseY = e.offsetY - this.canvasHeight / 2
      this.moveMousePoint()
    },
    /**
     * 鼠标移出
     */
    mouseOut(e) {
      this.mouseX = this.canvasHeight
      this.mouseY = this.canvasWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.module-canvas-point{
  @include in-module-size();
  .canvas-contain{
    height: 100%;
    width: 100%;
  }
}
</style>
