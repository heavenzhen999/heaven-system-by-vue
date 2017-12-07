/*
 * @Author: zhen chen
 * @Date: 2017-08-23 09:33:56
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-10-24 16:36:21
 * @description utf-8编码转码使用的是自带的方法,base64和md5使用的是网上找的方法
 */

<template>
  <div class="module-string-coder-and-decoder">
    <el-row>
      <el-col :offset="1" :span="22">
        <el-input type="textarea" autosize placeholder="请输入需要转换内容" v-model="inputText"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="1" :span="22">
        <el-radio-group v-model="codeType">
          <el-radio label="unicode">Unicode编码</el-radio>
          <el-radio label="unicodeDE">Unicode解码</el-radio>
          <el-radio label="utf8">UTF8(URL)编码</el-radio>
          <el-radio label="utf8DE">UTF8(URL)解码</el-radio>
          <el-radio label="base64">base64编码</el-radio>
          <el-radio label="base64DE">base64解码</el-radio>
          <el-radio label="md5">md5编码</el-radio>
          <el-radio label="html2js">html2js</el-radio>
        </el-radio-group>
        <el-button type="primary" size="small" @click="translate">转换</el-button>
        <el-button type="primary" size="small" @click="clearText">清空</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="1" :span="22">
        <el-input type="textarea" autosize placeholder="转换结果" v-model="outputText"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Base64 from './js/base64'
import MD5 from './js/md5'
export default {
  data() {
    return {
      inputText: null,
      codeType: 'unicode',
      outputText: null
    }
  },
  watch: {
    codeType(newValue) {
      // 进行转码工作
      this.translate()
    }
  },
  methods: {
    /**
     * @description 编解码发起方法
     */
    translate() {
      switch (this.codeType) {
        case 'unicode':
          this.unicodeTranslate()
          break
        case 'unicodeDE':
          this.unicodeDETranslate()
          break
        case 'utf8':
          this.utf8Translate()
          break
        case 'utf8DE':
          this.utf8DETranslate()
          break
        case 'base64':
          this.base64Translate()
          break
        case 'base64DE':
          this.base64DETranslate()
          break
        case 'md5':
          this.md5Translate()
          break
        case 'html2js':
          this.html2jsTranslate()
          break
      }
    },
    /**
     * @description unicode编码
     */
    unicodeTranslate() {
      let _str = ''
      for (let i of this.inputText) {
        if (this.isChineseChar(i) || this.isFullwidthChar(i)) {
          _str += '\\u' + i.charCodeAt().toString(16)
        } else {
          _str += i
        }
      }
      this.outputText = _str
    },
    /**
     * @description unicode解码
     */
    unicodeDETranslate() {
      let jsonStr = '{"str": "' + this.inputText + '"}'
      this.outputText = JSON.parse(jsonStr).str
    },
    /**
     * @description utf8编码
     */
    utf8Translate() {
      this.outputText = encodeURI(this.inputText)
    },
    /**
     * @description utf8解码
     */
    utf8DETranslate() {
      this.outputText = decodeURI(this.inputText)
    },
    /**
     * @description base64编码
     */
    base64Translate() {
      this.outputText = Base64.base64Encode(this.inputText)
    },
    /**
     * @description base64解码
     */
    base64DETranslate() {
      this.outputText = Base64.base64Decode(this.inputText)
    },
    /**
     * @description md5转码
     */
    md5Translate() {
      this.outputText = MD5(this.inputText)
    },
    /**
     * @description html2js转码
     */
    html2jsTranslate() {
      this.outputText = '未实装'
    },
    /**
     * @description 对两个textarea进行清空
     */
    clearText() {
      this.codeType = null
      this.inputText = null
      this.outputText = null
    },
    /**
     * @description 是否含有中文（也包含日文和韩文）
     */
    isChineseChar(str) {
      var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/
      return reg.test(str)
    },
    /**
     * @description 是否含有全角符号的函数
     */
    isFullwidthChar(str) {
      var reg = /[\uFF00-\uFFEF]/
      return reg.test(str)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../../../assets/scss/color.scss";
.module-string-coder-and-decoder{
  width: 100%;
  @extend .active-text;
  .el-row{
    margin: 10px 0;
    .el-radio{
      @extend .active-text;
    }
  }
}
</style>
