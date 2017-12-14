/*
 * @Author: zhen chen
 * @Date: 2017-12-13 15:27:49
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-12-13 15:29:33
 * @description 做一个英国国旗
 */

<template>
  <div class="module-uk-flag"></div>
</template>

<script>
export default {
  name: 'null',
  data() {
    return {
      msg: '这里是null'
    }
  }
}
</script>

<style scoped>
.module-uk-flag{
  width: 300px;
  height: 200px;
  border: 1px solid #000;
  box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, .25);
  margin-bottom: 20px;
  background-image:
    linear-gradient(90deg, #cf142b, #cf142b),
    linear-gradient(0deg, #cf142b, #cf142b), 
    linear-gradient(90deg, #FFFFFF, #FFFFFF),
    linear-gradient(0deg, #FFFFFF, #FFFFFF), 
    linear-gradient(35deg, transparent 45%, #ffffff 45%, #ffffff 48%, #cf142b 48%, #cf142b 51%, #ffffff 51%, #ffffff 56%, transparent 56%, transparent 100%), 
    linear-gradient(-35deg, transparent 45%, #ffffff 45%, #ffffff 50%, #cf142b 50%, #cf142b 53%, #ffffff 53%, #ffffff 56%, transparent 56%, transparent 100%);
  background-position: 0 50%, 50% 0,0 50%, 50% 0, 0 100%, 100% 0;
  background-size: 100% 20%, 16% 100%, 100% 33%, 25% 100%, 100% 100%, 100% 100%;
  background-repeat: no-repeat;
  background-color: #00247d;
}
</style>
