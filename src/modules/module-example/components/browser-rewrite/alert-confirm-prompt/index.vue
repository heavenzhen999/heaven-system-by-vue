<template>
  <div class="module-alert-confirm-prompt">
    <el-row>
      <el-col class="message-type-title" :span="8">Alert</el-col>
      <el-col class="message-type-title" :span="8">Confirm</el-col>
      <el-col class="message-type-title" :span="8">Prompt</el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button type="primary" icon="caret-right"  size="small" @click="alertEvent">点击出现alert</el-button>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" icon="caret-right"  size="small" @click="confirmEvent">点击出现confirm</el-button>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" icon="caret-right"  size="small" @click="promptEvent">点击出现prompt</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button type="primary" icon="caret-right"  size="small" @click="alertEventMore">点击出现alert50次</el-button>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" icon="caret-right"  size="small" @click="confirmEventMore">点击出现confirm50次</el-button>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" icon="caret-right"  size="small" @click="promptEventMore">点击出现prompt50次</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import calert from './js/alert'
import cconfirm from './js/confirm'
import cprompt from './js/prompt'
export default {
  data: function() {
    return {
      rowInfo: ['33%', '33%', '33%'],
      titleStyle: {
        fontSize: '22px'
      }
    }
  },
  methods: {
    alertEvent: function() {
      calert('这个是alert', 'alert')
    },
    alertEventMore: function() {
      let i = 0
      let time = setInterval(function() {
        calert('这个是alert', 'alert')
        i++
        if (i === 300) {
          clearInterval(time)
        }
      }, 50)
    },
    confirmEvent: function() {
      cconfirm('这个是confirm', 'confirm', function(boo) { console.log(boo) })
    },
    confirmEventMore: function() {
      let i = 0
      let time = setInterval(function() {
        cconfirm('这个是confirm', 'confirm', function(boo) { console.log(boo) })
        i++
        if (i === 300) {
          clearInterval(time)
        }
      }, 50)
    },
    promptEvent: function() {
      cprompt('这个是prompt', 'prompt', function(boo) { console.log(boo) })
    },
    promptEventMore: function() {
      let i = 0
      let time = setInterval(function() {
        cprompt('这个是prompt', 'prompt', function(boo) { console.log(boo) })
        i++
        if (i === 300) {
          clearInterval(time)
        }
      }, 50)
    }
  }
}
</script>

<style lang="scss" scoped>

@import "../../../../../assets/scss/color.scss";
.module-alert-confirm-prompt{
  height: 100%;
  width: 100%;
  @extend .active-text;
  .message-type-title{
    font-size: 20px;
  }
  .el-col{
    text-align: center;
    margin: 10px 0 ;
  }
}
</style>
