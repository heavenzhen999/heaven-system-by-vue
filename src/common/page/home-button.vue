<template>
  <div class="home-button">
    <i class="el-icon-fa-angle-up" @click="scrollTop"></i>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
.home-button{
  position: fixed;
  bottom: 10%;
  right: 21%;
  height: 30px;
  width: 30px;
  background: rgba(255,255,255,0.3);
  border-radius: 4px;
  cursor: pointer;
}
.el-icon-fa-angle-up{
  display: block;
}
.el-icon-fa-angle-up::before{
  display: block;
  margin: 0 5px;
  font-size: 30px;
}
</style>
