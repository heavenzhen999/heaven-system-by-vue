/*
 * @Author: zhen chen
 * @Date: 2017-11-15 11:51:17
 * @Last Modified by: zhen chen
 * @Last Modified time: 2018-01-18 09:56:43
 * @description 读取geojson文件，并将其绘制到canvas上，同时生成图片信息传输到后台并进行保存
 */

<template>
 <div class="module-canvas-img-map">
   <el-button type="primary" @click="upData">上传</el-button>
   <canvas class="canvas" ref="canvas"></canvas>
 </div>
</template>
<script>
export default {
  data() {
    return {
      canvasHeight: 180,                                                      // canvas高度
      canvasWidth: 360,                                                       // canvas宽度
      factor: 1,                                                             // 放大因数
      canvasDom: null,
      canvasContext: null
    }
  },
  mounted() {
    // 绘制图形
    this.getInfo(this.drawLines)
    // 初始化canvas
    this.initCanvas()
  },
  methods: {
    /**
     * 初始化canvas
     */
    initCanvas() {
      this.canvasDom = this.$refs.canvas
      this.canvasDom.height = this.canvasHeight * this.factor
      this.canvasDom.width = this.canvasWidth * this.factor
      this.canvasContext = this.canvasDom.getContext('2d')
      this.canvasContext.height = this.canvasHeight * this.factor
      this.canvasContext.width = this.canvasWidth * this.factor
      // 重定位中心点
      this.canvasContext.translate(this.canvasWidth * this.factor * 0.5, this.canvasHeight * this.factor * 0.5)
    },
    /**
     * 获取边界线信息
     * @param {Function} callback 获取信息成功后执行的回调函数
     */
    getInfo(callback) {
      this.$axios('./static/data/world.min.json').then((res) => {
        console.log(res.data)
        callback(res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    /**
     * 绘制线
     * @param {JSON} geoJSON 地理信息数据
     */
    drawLines(geoJSON) {
      for (let feature of geoJSON.features) {
        console.log(`绘制${feature.attributes.COUNTRY}边界线开始！`)
        feature.geometry.paths.forEach((path, index) => {
          console.log(`正在绘制第${index + 1}条边界线`)
          this.drawLine(path)
        })
        console.log(`绘制${feature.attributes.COUNTRY}边界线结束！`)
      }
    },
    /**
     * 绘制线
     * @param {Array} line 一个闭合曲线
     */
    drawLine(line) {
      // 起始点
      this.canvasContext.beginPath()
      line.forEach((point, index) => {
        // y转向
        point[1] = -point[1]
        // 因数变幻
        point[0] = point[0] * this.factor
        point[1] = point[1] * this.factor
        if (index === 0) {
          this.canvasContext.moveTo(point[0], point[1])
        } else {
          this.canvasContext.lineTo(point[0], point[1])
        }
      })
      // 看是否需要重新绘制到起点
      this.canvasContext.closePath()
      this.canvasContext.lineWidth = 0.3
      this.canvasContext.strokeStyle = '#ffffff'
      this.canvasContext.stroke()
    },
    /**
     * 上传信息
     */
    upData() {
      let imgData = this.canvasDom.toDataURL('image/jpeg', 1.0)
      this.$axios.post('/express/save/image', {params: {data: imgData, fileName: 'vue-text', type: 'jpg'}}).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.module-canvas-img-map{
  overflow: auto;
  height: 600px;
  width: 100%;
}
.canvas{
}
</style>
 

