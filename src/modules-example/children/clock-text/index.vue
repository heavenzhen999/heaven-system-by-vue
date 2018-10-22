/*
 * @Author: chen zhen
 * @Date: 2018-09-18 14:05:47
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-18 14:37:38
 * @Description 一个简易时钟
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
  beforeDestroy() {
    if (!_.isNull(this.interval)) clearInterval(this.interval)
  },
  methods: {
    updateTime() {
      let cd = new Date()
      this.time = `${_.padStart(cd.getHours(), 2, 0)}:${_.padStart(cd.getMinutes(), 2, 0)}:${_.padStart(cd.getSeconds(), 2, 0)}`
      this.date = `${_.padStart(cd.getFullYear(), 2, 0)}-${_.padStart(cd.getMonth() + 1, 2, 0)}-${_.padStart(cd.getDate(), 2, 0)} ${WEEKENDS[cd.getDay()]}`
    }
  }
}
</script>

<style lang="scss" scoped>
$clockDateHeight: 18px;
$clockTimeHeight: 32px;
.clock {
  position: relative;
  width: 300px;
  text-align: center;
  color: $themeColor;
  font-weight: bold;
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
