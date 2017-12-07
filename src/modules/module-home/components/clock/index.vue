/*
 * @Author: zhen chen
 * @Date: 2017-10-18 13:46:15
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-10-18 15:47:31
 * @description 右侧的闹钟小窗口
 */

<template>
  <div class="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>

<script>

const WEEKENDS = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
export default {
  data() {
    return {
      time: '',
      date: '',
      interval: null
    }
  },
  created() {
    this.updateTime()
    this.interval = setInterval(this.updateTime, 1000)
  },
  methods: {
    updateTime() {
      var cd = new Date()
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
      this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + WEEKENDS[cd.getDay()]
    },
    zeroPadding(num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/scss/color';
$clockDateHeight: 18px;
$clockTimeHeight: 32px;
.clock {
  position: relative;
  width: 100%;
  text-align: center;
  @extend .active-text;
  @extend .highlight-text;
  .date {
    margin: 0;
    padding: 0;
    letter-spacing: 0.1em;
    font-size: 18px;
    line-height: $clockDateHeight;
  }
  .time {
    margin: 0;
    padding: 0;
    letter-spacing: 0.05em;
    font-size: 28px;
    line-height: $clockTimeHeight;
  }
}
</style>
