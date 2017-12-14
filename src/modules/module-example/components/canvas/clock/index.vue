/*
 * @Author: zhen chen
 * @Date: 2017-12-13 16:45:08
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-12-14 17:51:39
 * @description 一个canvas渲染时钟的实例
 */

<template>
  <div class="module-bullet-screen">
    <div ref="canvasContain" class="canvas-contain"></div>
  </div>
</template>

<script>
import zrender from 'zrender'
export default {
  data() {
    return {
      w: 400,
      h: 400,
      center: {
        x: 200,
        y: 200
      },
      r: 160,
      lineLong: 8,
      color: '#000',
      zr: null,
      hourLine: null,
      minuteLine: null,
      secondLine: null,
      date: null
    }
  },
  computed: {
    hour() {
      if (this.date !== null) {
        return new Date(this.date).getHours()
      } else {
        return 0
      }
    },
    minutes() {
      if (this.date !== null) {
        return new Date(this.date).getMinutes()
      } else {
        return 0
      }
    },
    second() {
      if (this.date !== null) {
        return new Date(this.date).getSeconds()
      } else {
        return 0
      }
    }
  },
  watch: {
    minutes(newVal) {
      // 改变时针
      let hour = this.hour
      hour >= 12 ? hour = hour - 12 : null
      let arc = 2 * Math.PI / 12 * (hour + newVal / 60)
      let hoursLinePoint = this.getPoint(arc, this.r * 0.5, this.center)
      this.hourLine.animateTo({
        shape: {
          x2: hoursLinePoint.x,
          y2: hoursLinePoint.y
        }
      }, 80, 0, 'linear', () => {}, false)
      // 改变分针
      let arc2 = 2 * Math.PI / 60 * newVal
      let minutesLinePoint = this.getPoint(arc2, this.r * 0.7, this.center)
      this.minuteLine.animateTo({
        shape: {
          x2: minutesLinePoint.x,
          y2: minutesLinePoint.y
        }
      }, 80, 0, 'linear', () => {}, false)
    },
    second(newVal) {
      let arc = 2 * Math.PI / 60 * newVal
      let secondLinePoint = this.getPoint(arc, this.r * 0.8, this.center)
      this.secondLine.animateTo({
        shape: {
          x2: secondLinePoint.x,
          y2: secondLinePoint.y
        }
      }, 80, 0, 'linear', () => {}, false)
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date().getTime()
    }, 100)
    this.init()
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    /**
     * 初始化zrender
     */
    init() {
      this.zr = zrender.init(this.$refs['canvasContain'], {
        height: this.h,
        width: this.w
      })
      // 进行初始化创建
      /**
       * 1. 时钟圈
       * 2. 刻度（每个小时和半小时的刻度）
       * 3. 时针，分针，秒震（看展示效果）
       * 4. 每次动的时候自动获取当前时间
       */
      this.firstCreate()
    },
    firstCreate() {
      this.addRect()
      this.addCircle()
      this.addLine()
      this.addHourHands()
      this.addMinuteHands()
      this.addSecondHands()
    },
    addRect() {
      let rect = new zrender.Rect({
        shape: {
          x: 0,
          y: 0,
          width: this.w,
          height: this.h
        },
        style: {
          fill: '#fff',
          opacity: 0.05
        }
      })
      this.zr.add(rect)
    },
    addCircle() {
      var circle = new zrender.Circle({
        shape: {
          cx: this.w / 2,
          cy: this.h / 2,
          r: this.r
        },
        style: {
          fill: 'transparent',
          stroke: this.color
        },
        silent: true
      })
      this.zr.add(circle)
    },
    addLine() {
      let i = 0
      while (i < 24) {
        let points = this.getPoints(i)
        let line = new zrender.Line({
          shape: {
            x1: points[0].x,
            y1: points[0].y,
            x2: points[1].x,
            y2: points[1].y
          },
          style: {
            fill: this.color,
            stroke: this.color
          }
        })
        this.zr.add(line)
        i = i + 1
      }
    },
    getPoints(i) {
      let lineLong = this.lineLong
      if (i % 2 !== 0) {
        lineLong = 0.5 * lineLong
      }
      let startR = this.r
      let endR = startR - lineLong
      return [
        this.getPoint((2 * Math.PI / 24 * i), startR, this.center),
        this.getPoint((2 * Math.PI / 24 * i), endR, this.center)
      ]
    },
    getPoint(arc, line, center) {
      return {
        x: line * Math.sin(arc) + center.x,
        y: -line * Math.cos(arc) + center.y
      }
    },
    addHourHands() {
      // 时针
      this.hourLine = new zrender.Line({
        shape: {
          x1: this.w / 2,
          y1: this.h / 2,
          x2: this.w / 2,
          y2: this.w / 2
        },
        style: {
          fill: this.color,
          stroke: this.color,
          lineWidth: 4
        }
      })
      this.zr.add(this.hourLine)
    },
    addMinuteHands() {
      // 时针
      this.minuteLine = new zrender.Line({
        shape: {
          x1: this.w / 2,
          y1: this.h / 2,
          x2: this.w / 2,
          y2: this.h / 2
        },
        style: {
          fill: this.color,
          stroke: this.color,
          lineWidth: 2
        }
      })
      this.zr.add(this.minuteLine)
    },
    addSecondHands() {
      this.secondLine = new zrender.Line({
        shape: {
          x1: this.w / 2,
          y1: this.h / 2,
          x2: this.w / 2,
          y2: this.h / 2
        },
        style: {
          fill: this.color,
          stroke: this.color,
          lineWidth: 1
        }
      })
      this.zr.add(this.secondLine)
    }
  }
}
</script>

<style scoped>
.canvas-contain{
  margin: 0 auto;
  height: 400px;
  width: 400px;
}
</style>
