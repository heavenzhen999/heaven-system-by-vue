<template>
  <el-row class="module-eval-calputer">
    <el-col :offset="1" :span="9">
      <div class="textArea-container">
        {{scriptInfo}}
        <textarea ref="scriptArea"></textarea>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="textArea-container">
        JSON.parse()  JSON.stringify()
        <el-button type="primary" icon="caret-right" @click="runFun">运行</el-button>
        <el-button type="primary" icon="arrow-left" :disabled="!returnShow" @click="returnFun">后退</el-button>
        <el-button type="primary" icon="arrow-right" :disabled="!advanceShow" @click="advanceFun">前进</el-button>
        <el-button type="primary" icon="delete" @click="clearInfo">清空</el-button>
      </div>
    </el-col>
    <el-col :span="9">
      <div class="textArea-container">
        {{answerInfo}}
        <textarea ref="answerArea"></textarea>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Eval',
  data() {
    return {
      msg: 'Eval展示',
      pageListInfo: ['45%', '10%', '45%'],
      sctiptArray: [],
      answerArray: [],
      time: 0
    }
  },
  computed: {
    centerInfo(e) {
      return '已进行' + this.time + '次运算' + ('共' + this.sctiptArray.length + '次运算')
    },
    scriptInfo(e) {
      return '第' + (this.time + 1) + '次运算脚本'
    },
    answerInfo(e) {
      if (this.time === 0) {
        return '请输入数据信息' + '(变量名称为info)'
      } else {
        return '第' + this.time + '次运算结果' + '(变量名称为info)'
      }
    },
    returnShow(e) {
      return this.time > 0
    },
    advanceShow(e) {
      return (this.time + 1) < this.sctiptArray.length
    }
  },
  methods: {
    runFun(e) {
      if (this.$refs.scriptArea.value !== '') {
        let scriptAreaText = this.$refs.scriptArea.value
        // let info = JSON.parse(this.$refs.answerArea.value)
        let info = this.$refs.answerArea.value
        if (this.time === 0) {
          this.answerArray.push(info)
        }
        eval(scriptAreaText)  // eval 运行
        if (this.time !== this.sctiptArray.length) {
          this.sctiptArray.length = this.time
          this.answerArray.length = this.time + 1
        }
        this.time = this.time + 1
        this.sctiptArray.push(scriptAreaText)
        this.answerArray.push(info)
        this.$refs.answerArea.value = JSON.stringify(info)
      }
    },
    returnFun(e) {
      if (this.returnShow) {
        this.time--
        this.$refs.scriptArea.value = this.sctiptArray[this.time]
        this.$refs.answerArea.value = this.answerArray[this.time]
      }
    },
    advanceFun(e) {
      if (this.advanceShow) {
        this.time++
        this.$refs.scriptArea.value = this.sctiptArray[this.time]
        this.$refs.answerArea.value = this.answerArray[this.time]
      }
    },
    clearInfo() {
      this.$refs.scriptArea.value = null
      this.$refs.answerArea.value = null
      this.sctiptArray = []
      this.answerArray = []
      this.time = 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../../assets/scss/color.scss";
.module-eval-calputer{
  @extend .active-text;
}
/* element-ui的一个bug */
.el-button+.el-button{
  margin: 40px auto;
}
.textArea-container{
  text-align: center;
  font-size: 20px;
  line-height: 40px;
}
textarea {
  width: 100%;
  height: 400px;
  font-size: 20px;
}

button {
  display: block;
  margin: 40px auto;
}
</style>
