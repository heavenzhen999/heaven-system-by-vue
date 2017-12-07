<template>
  <div class="module-coordinate-translate">
    <el-row>
      <el-col class="module-label" :offset="2" :span="6">
        坐标系选择：
      </el-col>
    </el-row>
    <el-row>
      <el-col class="label" :offset="2" :span="3">
        <span>输入坐标系：</span>
      </el-col>
      <el-col :span="9">
        <el-radio-group v-model="coorIn">
          <el-radio v-for="(item,index) of CoorInfo" :key="index" :label="item.name">{{item.name}}</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="label" :offset="2" :span="3">
        <span>输出坐标系：</span>
      </el-col>
      <el-col :span="9">
        <el-radio-group v-model="coorOut">
          <el-radio v-for="(item,index) of CoorInfo" :key="index" :label="item.name">{{item.name}}</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="module-label" :offset="2" :span="10">
        坐标系数据输入&输出：
      </el-col>
      <el-col :offset="8" :span="2">
        <el-switch v-model="translate"
          on-color="#13ce66" off-color="#ff4949"
          on-value="single" off-value="numerous"
          on-text="单体" off-text="批量">
        </el-switch>
      </el-col>
    </el-row>
    <el-row class="translate-single" v-show="translate==='single'">
      <el-col :offset="2" :span="8">
        <el-input size="small" placeholder="请输入经度" v-model="lngIn"></el-input>
      </el-col>
      <el-col :offset="4" :span="8">
        <el-input size="small" placeholder="经度转换结果" v-model="lngOut"></el-input>
      </el-col>
    </el-row>
    <el-row class="translate-single" v-show="translate==='single'">
      <el-col :offset="2" :span="8">
        <el-input size="small" placeholder="请输入纬度" v-model="latIn"></el-input>
      </el-col>
      <el-col :offset="4" :span="8">
        <el-input size="small" placeholder="纬度转换结果" v-model="latOut"></el-input>
      </el-col>
    </el-row>
    <el-row class="translate-numerous" v-show="translate==='numerous'" >
      <el-col :offset="2" :span="8">
          <el-input type="textarea" :rows="4" placeholder="请输入进行转换的数据" v-model="numerousIn"></el-input>
      </el-col>
      <el-col :span="4">
        <el-radio-group v-model="dataType">
          <el-radio v-for="(item,index) of dataTypeList" :key="index" :label="item.name">{{item.description}}</el-radio>
        </el-radio-group>
      </el-col>
      <el-col :span="8">
          <el-input type="textarea" :rows="4" placeholder="转换结果" v-model="numerousOut"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="module-button" :span="24">
        <el-button size="small" @click="clear">重置</el-button>
        <el-button size="small" type="primary" @click="transformEvent">转换</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { COORINFO, DATATYPE } from './js/info.js'
import CoordinateTranslate from '../../../assets/js/coordinate-translate.js'
export default {
  data() {
    return {
      CoorInfo: COORINFO,
      dataTypeList: DATATYPE,
      translate: 'single',
      coorIn: COORINFO[0].name,                                     // 传入坐标系
      coorOut: COORINFO[1].name,                                   // 输出坐标系
      dataType: DATATYPE[0].name,                                 // 批量数据转换格式
      lngIn: null,                                                // 传入经度
      latIn: null,                                                // 传入纬度
      lngOut: null,                                               // 输入经度
      latOut: null,                                               // 传入纬度
      numerousIn: null,                                           // 批量数据输入
      numerousOut: null,                                          // 批量数据输出
      coordinateTranslate: new CoordinateTranslate()
    }
  },
  computed: {
    transformEvent() {
      if (this.translate === 'single') {
        return this.transformSingle
      } else {
        return this.transformNumerous
      }
    }
  },
  methods: {
    /**
     * 坐标数据转换(单体)
     */
    transformSingle() {
      // 识别传入数据是否全部存在
      if (this.lngIn === null || this.latIn === null) {
        this.$message({
          message: '请正确输入经纬度数据',
          type: 'warning'
        })
      } else {
        // 对经纬度数据进行转换
        let {lat, lon} = this.coordinateTranslate.translate({
          lat: parseFloat(this.latIn),
          lon: parseFloat(this.lngIn),
          coorIn: this.coorIn,
          coorOut: this.coorOut
        })
        this.latOut = lat
        this.lngOut = lon
      }
    },
    /**
     * 坐标数据转换(批量)
     */
    transformNumerous() {
    },
    /**
     * 清空的当前输入数据
     */
    clear() {
      this.coorIn = COORINFO[0].name
      this.coorOut = COORINFO[1].name
      this.dataType = DATATYPE[0].name
      this.lngIn = null
      this.latIn = null
      this.lngOut = null
      this.latOut = null
      this.numerousIn = null
      this.numerousOut = null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../../../../assets/scss/color.scss";

$dataModuleHeight: 120px;
.module-coordinate-translate {
  @extend .active-text;
  .el-row {
    margin: 10px 0;
  }
  .label {
    text-align: center;
  }
  .el-radio {
    @extend .active-text;
  }
  .module-button{
    margin-top: 30px;
    text-align: center;
  }
  .translate-single{
    margin: 0;
    height: $dataModuleHeight/2;
  }
  .translate-numerous{
    margin: 0;
    height: $dataModuleHeight;
    .el-radio-group{
      width: 100%;
      text-align: center;
      .el-radio{
        display: block;
      }
    }
  }
}
</style>
