<template>
  <div class="module-test-mockjs">
    测试news/info端口返回值：{{resInfo}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      resInfo: null
    }
  },
  mounted() {
    // this.http.get('').then((successData) => { console.log(successData.body) }, (fileData) => { console.log(fileData) })
    this.$axios.get('/express/cz').then((res) => {
      this.resInfo = res.data
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
