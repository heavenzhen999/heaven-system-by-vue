/*
 * @Author: zhen chen
 * @Date: 2017-11-10 11:45:33
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-10 11:46:50
 * @description 垂直定位功能
 */

<template>
  <div class="module-vertical-center">
    方案一：绝对定位 + transform: translate(-50%, -50%);
    <div class="center-contain center-contain-1">
      <div class="center center-1"></div>
    </div>
    方案二：绝对定位 + left/bottom/right/top = 0 + margin:auto;;
    <div class="center-contain center-contain-2">
      <div class="center center-2"></div>
    </div>
    方案三：绝对定位 + left/top = 50% + margin-top: -50px + margin-left: -50px;
    <div class="center-contain center-contain-3">
      <div class="center center-3"></div>
    </div>
    方案四： flex定位 + align-items:center;/*垂直居中*/ + justify-content: center;/*水平居中*/
    <div class="center-contain center-contain-4">
      <div class="center center-4"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.center-contain.center-contain-1{
  position: relative;
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
}
.center.center-1{
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  width: 100px;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.2);
}
.center-contain.center-contain-2{
  position: relative;
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
}
.center.center-2{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100px;
  width: 100px;
  background-color: rgba(255, 255, 255, 0.2);
}
.center-contain.center-contain-3{
  position: relative;
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
}
.center.center-3{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  height: 100px;
  width: 100px;
  background-color: rgba(255, 255, 255, 0.2);
}
.center-contain.center-contain-4{
  display:flex;
  align-items:center;/*垂直居中*/
  justify-content: center;/*水平居中*/
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
}
.center.center-4{
  height: 100px;
  width: 100px;
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
