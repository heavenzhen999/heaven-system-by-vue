/*
 * @Author: zhen chen
 * @Date: 2017-08-06 01:02:31
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-18 15:05:22
 */

<template>
  <el-row class="container-all">
    <el-col :span="12">
      <div id="canvas-content" ref="canvasContent">
        <canvas id="canvas" ref="canvas"></canvas>
      </div>
    </el-col>
    <el-col :span="12">
      <div id="img-content" ref="imgContent">
        <div id="img" ref="img"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      canvasHeight: 0,
      canvasWidth: 0,
      pageListInfo: ['50%', '50%'],
      frameNumber: 50, // 帧数
      angle: 40,
      time: '',
      times: 0 // 动画所在次数
    }
  },
  computed: {
    modification() {
      // let random = Math.random() - 0.5
      let oneSecondLength = this.times * this.angle / this.frameNumber
      let firstLine = oneSecondLength * 0.0036
      let secondLine = oneSecondLength * 0.0042
      let thirdLine = oneSecondLength * -0.0010
      let fourthLine = oneSecondLength * 0.0025
      let fifthLine = oneSecondLength * -0.0025
      let center = oneSecondLength * 0 // 0.0001
      return {
        firstLine,
        secondLine,
        thirdLine,
        fourthLine,
        fifthLine,
        center
      }
    },

    frameTime() {
      // 每次动画所占用事件
      return Math.round(1000 / this.frameNumber)
    },
    canvasCenterInfos() {
      let list = []
      while (list.length < 12) {
        list.push(
          {
            color: 'red',
            value: list.length, // 0~100 的数字
            text: '测试'
          }
        )
      }
      let list2 = [
        {
          color: '#e93001',
          value: 60,
          text: '测试1'
        },
        {
          color: '#d9004e',
          value: 90,
          text: '测试2'
        },
        {
          color: '#6d83b5',
          value: 30,
          text: '测试3'
        },
        {
          color: '#05aeea',
          value: 40,
          text: '测试4'
        },
        {
          color: '#d53b3e',
          value: 60,
          text: '测试5'
        },
        {
          color: '#f96a6a',
          value: 40,
          text: '测试6'
        },
        {
          color: '#b19a2b',
          value: 30,
          text: '测试7'
        },
        {
          color: '#356397',
          value: 80,
          text: '测试8'
        },
        {
          color: '#7c9e33',
          value: 70,
          text: '测试9'
        },
        {
          color: '#40398d',
          value: 40,
          text: '测试10'
        },
        {
          color: '#41398d',
          value: 20,
          text: '测试11'
        },
        {
          color: '#7f3404',
          value: 30,
          text: '测试12'
        }

      ]
      return list2
    }
  },
  mounted() {
    // 在imgContent 上边放置样子
    if (parseInt(this.getStyle(this.$refs.imgContent, 'height')) >= parseInt(this.getStyle(this.$refs.imgContent, 'width'))) {
      this.$refs.img.style.width = this.getStyle(this.$refs.imgContent, 'width')
      this.$refs.img.style.height = this.getStyle(this.$refs.imgContent, 'width')
      // this.$refs.img.style.margin = (parseInt(this.getStyle(this.$refs.imgContent, 'height')) - parseInt(this.getStyle(this.$refs.imgContent, 'width'))) / 2 + 'px 0'
    } else {
      this.$refs.img.style.width = this.getStyle(this.$refs.imgContent, 'height')
      this.$refs.img.style.height = this.getStyle(this.$refs.imgContent, 'height')
      // this.$refs.img.style.margin = '0 auto'
    }

    // 获取canvasContent 宽和高 然后选取小的部分进行正方形的位置仿制
    let canvasDom = this.$refs.canvas
    canvasDom.style.height = parseInt(this.$refs.img.style.height) + 'px'
    canvasDom.style.width = parseInt(this.$refs.img.style.width) + 'px'
    // canvasDom.style.margin = this.$refs.img.style.margin

    this.canvasHeight = canvasDom.height = parseInt(this.$refs.img.style.height)
    this.canvasWidth = canvasDom.width = parseInt(this.$refs.img.style.width)

    // 获取context
    let context = canvasDom.getContext('2d')

    // 移动中心点
    context.translate(this.canvasWidth * 0.5, this.canvasHeight * 0.5)
    context.lineWidth = 1

    // 保存默认状态
    context.save()

    // 开始动画
    this.animateStart(context)
  },
  destroyed() {
    clearInterval(this.time)
  },
  methods: {
    // 开始动画
    animateStart(context) {
      this.time = setInterval(function() {
        this.times++
        this.animateFrame(context)
      }.bind(this), this.frameTime)
    },
    /**
    * 每一帧所用画面
    */
    animateFrame(context) {
      // 清空画布
      context.clearRect(-this.canvasWidth, -this.canvasHeight, this.canvasWidth * 2, this.canvasHeight * 2)

      // 画背景色
      this.drewBasic(context)

      // 获取开始事件
      // let startTime = new Date()
      // 画this.canvasInfos.length 次数 线以及扇形的组合
      let lineLength = this.canvasWidth * 0.26
      this.canvasCenterInfos.forEach((canvasCenterInfo, index, canvasCenterInfos) => {
        let lineAngle = index / canvasCenterInfos.length * 2 * Math.PI + this.modification.center
        let lineX = lineLength * Math.cos(lineAngle)
        let lineY = lineLength * Math.sin(lineAngle)
        this.drewDottedLine(context, 0, 0, lineX, lineY, 1, 3, '#461a1c', index, this.canvasCenterInfos.length)
        let startAngle = (index + 0.5) / canvasCenterInfos.length * 2 * Math.PI + this.modification.center
        let endAngle = (index + 1) / canvasCenterInfos.length * 2 * Math.PI + this.modification.center
        let lineLength_ = lineLength * canvasCenterInfo.value / 100
        this.drewSector(context, lineLength_, startAngle, endAngle, ['black', canvasCenterInfo.color])
        this.drewText(context, lineLength_ + 20, startAngle, endAngle, canvasCenterInfo.value + '%', '#ffffff')
        this.drewText(context, lineLength / 0.26 * 0.3, startAngle, endAngle, canvasCenterInfo.text, canvasCenterInfo.color)
      })

      // 画外部的线
      // 从内到外第一层
      this.drewDottedCircle(context, this.canvasWidth * 0.34, ['rgba(244, 0, 85, 0)', 'rgba(244, 0, 85, 1)'], 2, Math.PI * 0, Math.PI * 0.56, Math.PI / 220, Math.PI / 220, this.modification.firstLine)
      this.drewDottedCircle(context, this.canvasWidth * 0.34, ['rgba(6, 16, 50, 1)', 'rgba(4, 163, 220, 1)'], 2, Math.PI * 0.72, Math.PI * 1.3, Math.PI / 220, Math.PI / 220, this.modification.firstLine)
      this.drewDottedCircle(context, this.canvasWidth * 0.34, ['rgba(249, 106, 107, 0)', 'rgba(249, 106, 107, 1)'], 2, Math.PI * 1.5, Math.PI * 1.86, Math.PI / 220, Math.PI / 220, this.modification.firstLine)

      // 从内到外第二层
      this.drewDottedCircle(context, this.canvasWidth * 0.37, ['rgba(244, 0, 85, 0)', 'rgba(244, 0, 85, 1)'], 8, Math.PI * 0, Math.PI * 0.56, Math.PI / 10, Math.PI / 10, this.modification.secondLine)
      this.drewDottedCircle(context, this.canvasWidth * 0.37, ['rgba(6, 16, 50, 1)', 'rgba(4, 163, 220, 1)'], 8, Math.PI * 0.6, Math.PI * 1.3, Math.PI / 10, Math.PI / 10, this.modification.secondLine)
      this.drewDottedCircle(context, this.canvasWidth * 0.37, ['rgba(249, 106, 107, 0)', 'rgba(249, 106, 107, 1)'], 8, Math.PI * 1.4, Math.PI * 1.9, Math.PI / 10, Math.PI / 10, this.modification.secondLine)

      // 从内向外第三层
      this.drewDottedCircle(context, this.canvasWidth * 0.40, ['rgba(244, 0, 85, 0)', 'rgba(244, 0, 85, 1)'], 6, Math.PI * 0, Math.PI * 0.56, Math.PI / 50, Math.PI / 50, this.modification.thirdLine)
      this.drewDottedCircle(context, this.canvasWidth * 0.40, ['rgba(6, 16, 50, 1)', 'rgba(4, 163, 220, 1)'], 6, Math.PI * 0.72, Math.PI * 1.3, Math.PI / 50, Math.PI / 50, this.modification.thirdLine)
      this.drewDottedCircle(context, this.canvasWidth * 0.40, ['rgba(249, 106, 107, 0)', 'rgba(249, 106, 107, 1)'], 6, Math.PI * 1.5, Math.PI * 1.84, Math.PI / 50, Math.PI / 50, this.modification.thirdLine)

      // 从内向外第四层
      this.drewDottedCircle(context, this.canvasWidth * 0.42, ['rgba(244, 0, 85, 0)', 'rgba(244, 0, 85, 1)'], 2, Math.PI * 0, Math.PI * 0.56, Math.PI / 220, Math.PI / 220, this.modification.fourthLine)
      this.drewDottedCircle(context, this.canvasWidth * 0.42, ['rgba(6, 16, 50, 1)', 'rgba(4, 163, 220, 1)'], 2, Math.PI * 0.72, Math.PI * 1.3, Math.PI / 220, Math.PI / 220, this.modification.fourthLine)
      this.drewDottedCircle(context, this.canvasWidth * 0.42, ['rgba(249, 106, 107, 0)', 'rgba(249, 106, 107, 1)'], 2, Math.PI * 1.5, Math.PI * 1.88, Math.PI / 220, Math.PI / 220, this.modification.fourthLine)

      // 从内向外第五层
      this.drewDottedCircle(context, this.canvasWidth * 0.44, ['rgba(244, 0, 85, 0)', 'rgba(244, 0, 85, 1)'], 2, Math.PI * 0, Math.PI * 0.56, Math.PI / 220, Math.PI / 220, this.modification.fifthLine)
      this.drewDottedCircle(context, this.canvasWidth * 0.44, ['rgba(6, 16, 50, 1)', 'rgba(4, 163, 220, 1)'], 2, Math.PI * 0.72, Math.PI * 1.3, Math.PI / 220, Math.PI / 220, this.modification.fifthLine)
      this.drewDottedCircle(context, this.canvasWidth * 0.44, ['rgba(249, 106, 107, 0)', 'rgba(249, 106, 107, 1)'], 2, Math.PI * 1.5, Math.PI * 1.9, Math.PI / 220, Math.PI / 220, this.modification.fifthLine)

      // 获取结束时间
      // let endTime = new Date()
      // console.log('每帧花费时间:' + (endTime.getTime() - startTime.getTime()))
    },
    drewBasic(context) {
      context.restore()
      context.save()
      // 画背景色
      context.rect(this.canvasWidth * -0.5, this.canvasHeight * -0.5, this.canvasWidth * 1, this.canvasHeight * 1)
      context.fillStyle = '#000000'
      context.fill()
    },
    /**
    * 画文字
    */
    drewText(context, radius, startAngle, endAngle, text, color) {
      context.restore()
      context.save()
      // context.beginPath()
      // context.strokeStyle = '#ffffff'
      // context.moveTo(radius * Math.cos(startAngle), radius * Math.sin(startAngle))
      // context.arc(0, 0, radius, startAngle, endAngle, false)
      // context.stroke()
      // context.closePath()
      context.font = '12px Arial'
      // context.textBaseline = 'center'
      context.textAlign = 'center'
      context.fillStyle = color
      context.fillText(text, radius * Math.cos((startAngle + endAngle) / 2), radius * Math.sin((startAngle + endAngle) / 2))
    },
    /**
     * 画线(需要进行调整)
    */
    drewLine(context, info, index, length) {
      context.restore()
      context.save()
      context.rotate(Math.PI * 2 / length * index) // 旋转
      context.beginPath()
      context.moveTo(0, 0)
      context.lineTo(this.canvasWidth * 0.35, 0)
      context.strokeStyle = '#ba494b'
      context.stroke()
      context.closePath()
    },
    /**
     * 画虚线
    */
    drewDottedLine(context, startX, startY, endX, endY, lineLength, intervallength, color) {
      context.restore()
      context.save()
      context.beginPath()
      context.moveTo(startX, startY)
      context.lineTo(endX, endY)
      context.closePath()

      context.setLineDash([lineLength, intervallength])
      context.strokeStyle = color
      context.stroke()
      context.closePath()
    },
    /**
     * 画扇面
    */
    drewSector(context, radius, startAngle, endAngle, color) {
      context.restore()
      context.save()
      context.beginPath()
      context.moveTo(0, 0)
      context.lineTo(radius * Math.cos(startAngle), radius * Math.sin(startAngle))
      context.arc(0, 0, radius, startAngle, endAngle, false)
      context.lineTo(0, 0)
      context.closePath()

      let color_ = context.createRadialGradient(0, 0, 0, 0, 0, radius)
      color_.addColorStop(0.1, color[0])
      color_.addColorStop(1, color[1])
      context.fillStyle = color_
      context.fill()
    },
    /**
    * 画虚线园，同时进行渲染颜色
    * radius 半径
    * color  颜色  类型：[]
    * width 线宽
    * lineAngel 虚线长度(角度)
    * intervalAngle 间隔角度
    */
    drewDottedCircle(context, radius, color, width, startAngle, endAngle, lineAngel, ineervalAngel, modification) {
      // 计算会有多少块
      let pieceNum = Math.floor((endAngle - startAngle + ineervalAngel) / (lineAngel + ineervalAngel))
      // 生成颜色
      let numList = []
      while (numList.length < pieceNum * 2 + 2) {
        numList.push(numList.length / (pieceNum * 2 + 2))
      }
      let colorList = this.analysisColor(color, numList)

      context.restore()
      context.save()
      context.rotate((modification === undefined) ? startAngle : (modification + startAngle)) // 旋转

      let times = 0
      while (times < pieceNum) {
        if (pieceNum !== 0) {
          let startA = times * (lineAngel + ineervalAngel)
          context.beginPath()
          context.arc(0, 0, radius, startA, startA + ineervalAngel, false)
          context.closePath()
          let color_ = context.createRadialGradient(0, 0, 0, 0, 0, 1)
          color_.addColorStop(0, colorList[times * 2])
          color_.addColorStop(1, colorList[times * 2 + 1])
          context.lineWidth = width
          context.strokeStyle = color_
          context.stroke()
        }
        times++
      }
    },
    /**
    * 获取样式
    * @param element 需要获取样式的目标元素
    * @param name 演示属性
    */
    getStyle(element, name) {
      var computedStyle
      try {
        computedStyle = document.defaultView.getComputedStyle(element, null)
      } catch (e) {
        computedStyle = element.currentStyle
      }
      if (name !== 'float') {
        return computedStyle[name]
      } else {
        return computedStyle['cssFloat'] || computedStyle['styleFloat']
      }
    },
    /**
     * 设置样式
     * @param element 需要获取样式的目标元素
     * @param name 演示属性
     * @param value 对样式的赋值
     */
    setStyle(element, name, value) {
      if (name !== 'float') {
        element.style[name] = value
      } else {
        element.style['cssFloat'] = value
        element.style['styleFloat'] = value
      }
    },
    /**
    * 解析css过度
    * colorList 长度必须为2
    * dataList  内为float类型  取值范围0~1
    */
    analysisColor(colorList, dataList) {
      let colorList_ = []
      let returnColorList = []
      // 统一成rgba格式的颜色
      colorList.forEach(function(color, index, length) {
        let color_ = []
        if (color.indexOf('#') >= 0) {
          color_ = [parseInt(color.substr(1, 2), 16), parseInt(color.substr(3, 2), 16), parseInt(color.substr(5, 2), 16), 1]
        } else if (color.indexOf('rgba') >= 0) {
          color_ = color.substring(5, color.length - 1).split(',').map(function(str) { return parseInt(str) })
        } else if (color.indexOf('rgb') >= 0) {
          color_ = color.substring(4, color.length - 1).split(',').map(function(str) { return parseInt(str) })
          color_.push(1)
        } else {
          color_ = [0, 0, 0, 0]
          alert('暂不支持' + color + '的颜色格式')
        }
        colorList_.push(color_)
      })
      dataList.forEach(function(data, index) {
        returnColorList.push('rgba(' +
          Math.round(colorList_[0][0] + ((colorList_[1][0] - colorList_[0][0]) * data)) + ',' +
          Math.round(colorList_[0][1] + ((colorList_[1][1] - colorList_[0][1]) * data)) + ',' +
          Math.round(colorList_[0][2] + ((colorList_[1][2] - colorList_[0][2]) * data)) + ',' +
          (colorList_[0][3] + (colorList_[1][3] - colorList_[0][3]) * data) + ')')
      })
      return returnColorList
    }
  }
}
</script>

<style lang="scss" scoped>
.container-all{
  @include in-module-size();
}
.el-col{
  height: 100%;
}
#canvas-content,
#img-content {
  height: 100%;
  width: 100%;
  background-color: black;
}

#canvas {
  display: block;
}
#img {
  background-image: url('./imgs/canvas.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
</style>
