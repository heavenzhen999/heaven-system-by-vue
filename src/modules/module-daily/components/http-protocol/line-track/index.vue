<template>
  <div class="module-contain">
    <el-row>
      IP：<el-input v-model="ipString" placeholder="请输入IP"></el-input>
      port: <el-input v-model="port" placeholder="请输入端口号"></el-input>
    </el-row>
    <el-row>
      监控对象：<el-input v-model="monitorObjCodes" placeholder="请输入端口号"></el-input>
    </el-row>
    <el-row>
      状态： {{stateText}}
    </el-row>
    <el-row>
      <el-button @click="stop">停止</el-button>
      <el-button type="primary" @click="start">开启</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      states: false,                                                                      // 是否上报
      ipString: 'localhost',                                                              // IP
      port: '8094',                                                                         // 端口号
      monitorObjCodes: ['015918', '016587', '017474', '018935',
        'VH01005', 'VH01003', 'VH01004', 'KQ31001', 'KQ31002'].toString()                 // 监控对象编码
    }
  },
  computed: {
    stateText(newVal) {
      if (this.states === false) {
        return '未在上报位置信息'
      } else {
        return '正在上报位置信息'
      }
    },
    monitorObjArrays(newVal) {
      let _monitorObjArrays = newVal.split(',')
      return _monitorObjArrays
    }
  },
  methods: {
    /**
     * 开始实时位置信息上报
     */
    start() {
      if (this.states === false) {
        this.states = true
        this.$axios.get('express/testTrack/testTrackstart', {params: {
          ip: this.ipString,
          port: this.port,
          monitorObjCodes: this.monitorObjArrays
        }}).then((res) => {
          let data = res.data
          console.log(data)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    /**
     * 停止实时位置信息上报
     */
    stop() {
      if (this.states === true) {
        this.states = false
        this.$axios.get('express/testTrack/testTrackend').then((res) => {
          let data = res.data
          console.log(data)
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style scoped>
.null-module{
  text-align: center;
  font-size: 30px;
}
</style>
