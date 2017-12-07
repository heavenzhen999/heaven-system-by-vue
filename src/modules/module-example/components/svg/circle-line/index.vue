/*
 * @Author: zhen chen
 * @Date: 2017-11-25 17:14:49
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-25 18:02:44
 * @description 一个评分旋转的实例（网上借鉴的示例）
 */

<template>
  <el-row>
    <el-col :offset="2" :span="4">
      <el-input v-model.lazy="input" placeholder="请输入想旋转的百分比数"></el-input>
    </el-col>
    <el-col :span="2"><el-button type="primary" @click="animateCircle">变换</el-button></el-col>
    <el-col :offset="2" :span="8" >
      <div class="circle-line">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220">
          <defs>
            <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="60%" id="tail">
                <stop stop-opacity="1" stop-color="#FD7991" offset="30%"/>
                <stop stop-opacity="0.5" stop-color="#fD97AA" offset="40%"/>
                <stop stop-opacity="0" stop-color="#FECBD4" offset="80%"/>
            </radialGradient>
          </defs>
          <path d="M 110 10 a 100 100 0 0 1 0 200 a 100 100 0 0 1 0 -200 Z" fill="none" stroke="#FD7991" stroke-width="4" stroke-linecap="round" stroke-dasharray="628.4073486328125">
            <animate ref="circleAnimate" attributeName="stroke-dashoffset" from="628.4073486328125" to="0" :dur="durTims+'s'" repeatDur="" fill="freeze" begin="indefinite" restart="whenNotActive" />
          </path>
          <g>
            <rect x="-10" y="-10" width="20" height="20" fill="url(#tail)">
              <animateMotion ref="tailAnimate" path="M 110 10 a 100 100 0 0 1 0 200 a 100 100 0 0 1 0 -200 Z" rotate="auto" :dur="durTims+'s'" repeatDur="" fill="freeze" begin="indefinite" restart="whenNotActive"/>
            </rect>
          </g>
        </svg>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      input: 30,
      durTims: 2
    }
  },
  mounted() {
    this.animateCircle()
  },
  methods: {
    animateCircle() {
      let repeatDurVal = (this.input / 100 * this.durTims) + 's'
      this.$refs.circleAnimate.setAttribute('repeatDur', repeatDurVal)
      this.$refs.tailAnimate.setAttribute('repeatDur', repeatDurVal)
      this.$refs.circleAnimate.beginElement()
      this.$refs.tailAnimate.beginElement()
    }
  }
}
</script>

<style scoped>
.circle-line{
  text-align: center;
}
</style>
