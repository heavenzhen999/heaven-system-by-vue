/*
 * @Author: zhen chen
 * @Date: 2017-11-20 18:02:21
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-30 22:29:56
 * @description 快递查询
 */

<template>
  <div class="ModuleExpressage">
  </div>
</template>


<script>
// https://www.kuaidi100.com/query?type=shentong&postid=888793503397&temp=0.37752989428060957
// https://www.kuaidi100.com/autonumber/autoComNum?resultv2=1&text=888793503397
export default {
  data() {
    return {}
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/scss/color';
$clockDateHeight: 18px;
$clockTimeHeight: 32px;
.ModuleExpressage {
  position: relative;
  width: 100%;
  text-align: center;
  @extend .active-text;
  @extend .highlight-text;
}
</style>
