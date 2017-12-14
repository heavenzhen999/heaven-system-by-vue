/*
 * @Author: zhen chen
 * @Date: 2017-12-11 16:08:30
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-12-11 16:56:02
 * @description 一个用来展示“Notification”功能的测试页
 */

<template>
  <div class="module-notification">
    <el-row>
      <el-col :offset="2" :span="6">是否支持Notification？</el-col>
      <el-col :offset="1" :span="4">{{isSupport}}</el-col>
    </el-row>
    <el-row>
      <el-col :offset="2" :span="6">是否已经获取权限？</el-col>
      <el-col :offset="1" :span="6">{{hasJurisdiction}}</el-col>
      <el-col :offset="1" :span="4">
        <el-button v-if="hasJurisdiction==='用户还没选择，去向用户申请权限吧'"
        type="primary" @click="applyJurisdiction">申请权限</el-button>
        </el-col>
    </el-row>
    <el-row>
      <el-col :offset="2" :span="6"><el-button type="primary" @click="showNotification">显示</el-button></el-col>
      <el-col :offset="1" :span="6"><el-button type="primary" @click="hideNotification">隐藏</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSupport: '正在检测。。。',                                     // 是否支持
      hasJurisdiction: '正在检测。。。',                               // 是否有权限
      notification: null
    }
  },
  mounted() {
    // 检查是否支持
    this.checkSupport()
    // 检查当前权限
    this.checkJurisdiction()
  },
  methods: {
    /**
     * 检查是否支持
     */
    checkSupport() {
      if (Notification !== undefined) {
        this.isSupport = true
      } else {
        this.isSupport = false
        this.hasJurisdiction = '浏览器不支持'
      }
    },
    /**
     * 检查是否有权限
     */
    checkJurisdiction() {
      if (this.isSupport === true) {
        if (Notification.permission === 'granted') {
          this.hasJurisdiction = '用户允许通知'
        } else if (Notification.permission === 'denied') {
          this.hasJurisdiction = '用户拒绝通知'
        } else {
          this.hasJurisdiction = '用户还没选择，去向用户申请权限吧'
        }
      }
    },
    /**
     * 申请权限
     */
    applyJurisdiction() {
      Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
          this.hasJurisdiction = '用户允许通知'
        } else if (permission === 'denied') {
          this.hasJurisdiction = '用户拒绝通知'
        }
      })
    },
    /**
     * 显示
     */
    showNotification() {
      this.notification = new Notification('欢迎浏览', {
        body: '点击获取更多福利',
        tag: 'geekjc',
        icon: 'https://geekjc-img.geekjc.com/chudian01.jpg',
        requireInteraction: true,
        data: {
          url: 'https://www.geekjc.com/apdl'
        }
      })
    },
    /**
     * 隐藏
     */
    hideNotification() {
      this.notification.close()
    }
  }
}
</script>

<style scoped>
.module-notification{
  height: 300px;
}
.el-col{
  margin-top: 20px;
  font-size: 20px;
  line-height: 30px;
}
</style>
