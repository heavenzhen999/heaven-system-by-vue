<template>
  <div class="JSON-module">
    <iframe ref="Iframe" src="" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  mounted: function() {
    this.$refs.Iframe.src = 'http://www.bejson.com/oldbejson/jsoneditoronline/'
  }
}
</script>

<style lang="scss" scoped>
.JSON-module{
  height: 800px;
  width: 100%;
  iframe{
    border: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
    height: 100%;
    wdith: 100%;
  }
}
</style>
