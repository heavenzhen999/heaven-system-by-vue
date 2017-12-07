<template>
  <div class="module-builder-svg">
    <iframe ref="Iframe" src="" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  mounted: function() {
    this.$refs.Iframe.src = 'https://codepen.io/winkerVSbecks/full/wrZQQm/'
  }
}
</script>

<style lang="scss" scoped>
.module-builder-svg{
  height: 800px;
  width: 100%;
  iframe{
    border: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
  }
}
</style>
