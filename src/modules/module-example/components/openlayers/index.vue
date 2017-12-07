/*
 * @Author: zhen chen
 * @Date: 2017-12-02 10:02:30
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-12-02 10:18:48
 * @description openlayers主文件
 */


<template>
  <div class="module-openlayers">
    <div class="openlayers-contain"  ref="openlayers-contain"></div>
  </div>
</template>

<script>
import options from './options'
export default {
  data() {
    return {
      openlayersInstance: null
    }
  },
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  watch: {
    type(newVal) {
      this.renderOpenlayers(newVal)
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.type !== null) {
        this.renderOpenlayers(this.type)
      }
    })
  },
  methods: {
    renderOpenlayers(type) {
      let option = options[type]
      if (option !== undefined) {
        if (this.echartsInstance !== null) {
          this.$refs['openlayers-contain'].innerHTML = ''
          this.openlayersInstance = null
          option(this.$refs['openlayers-contain'], this.openlayersInstance)
        } else {
          option(this.$refs['openlayers-contain'], this.openlayersInstance)
        }
      } else {
        console.log('错误的openlayers的类型')
      }
    }
  },
  beforeDestroy() {
    this.$refs['openlayers-contain'].innerHTML = ''
    this.openlayersInstance = null
  }
}
</script>

<style scoped>
.module-openlayers{
  height: 600px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
}
.openlayers-contain{
  height: 100%;
  width: 100%;
}
</style>
