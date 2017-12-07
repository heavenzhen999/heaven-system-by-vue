/*
 * @Author: zhen chen
 * @Date: 2017-11-10 11:45:14
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-28 16:46:49
 * @description 炫酷背景色模块
 */

<template>
  <div class="moudle-background-color">
    <div class="background-color-contain background-color-contain-1"></div>
    <div class="background-color-contain background-color-contain-2"></div>
    <div class="background-color-contain background-color-contain-3"></div>
    <div class="background-color-contain background-color-contain-4"></div>
    <div class="background-color-contain background-color-contain-5"></div>
    <div class="background-color-contain background-color-contain-6"></div>
    <div class="background-color-contain background-color-contain-7"></div>
    <div class="background-color-contain background-color-contain-8"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.moudle-background-color{
  overflow-y: auto;
}
.background-color-contain{
  margin: 10px auto;
  width: 90%;
  height: 200px;
  background: #fff;
}
.background-color-contain-1{
  background: linear-gradient(#78C9DB 70%,#0acf00 0%);
  background-size: 100%  20px;
}
.background-color-contain-2{
  background:linear-gradient(45deg,#78C9DB 50%,#0acf00 50%);
  background-size:30px 30px;
}
.background-color-contain-3{
  background:linear-gradient(-45deg,#0acf00 50%,#78C9DB 50%);
  background-size:30px 100%;
}
.background-color-contain-4{
  background:linear-gradient(-45deg,#0acf00 25%,#78C9DB 0,#78C9DB 50%,#0acf00 0,#0acf00 75%,#78C9DB 0);
  /*background:repeating-linear-gradient(-45deg,#0acf00,#0acf00 15px,#78C9DB 0,#78C9DB 30px);*//*效果相同*/
  background-size: 30px 30px;
}
.background-color-contain-5{
  background: #fff repeating-linear-gradient(30deg,rgba(0,0,0,.5),rgba(0,0,0,.5)15px,transparent 0,transparent 30px);
}
.background-color-contain-6{
  background: linear-gradient(90deg,rgba(100,0,0,.5) 50%,transparent 0),linear-gradient(rgba(100,0,0,.5) 50%,transparent 0);
  background-size: 30px 30px;
}
.background-color-contain-7{
  background:#a95f44;
  background-image:radial-gradient(#fff 30%,transparent 0),radial-gradient(#fff 30%,transparent 0);
  background-size:20px 20px;
  background-position:0 0,10px 10px; // 必须是background-size尺寸的1/2
}
.background-color-contain-8{
  background: #fff;
  background-image:linear-gradient(45deg,#a95f44 26%,transparent 0,transparent 75%,#a95f44 0),linear-gradient(45deg,#a95f44 26%,transparent 0,transparent 75%,#a95f44 0);
  background-size:30px 30px;
  background-position:0 0,15px 15px;
}
</style>
