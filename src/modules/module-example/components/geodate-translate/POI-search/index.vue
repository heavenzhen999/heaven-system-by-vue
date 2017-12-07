/*
 * @Author: zhen chen
 * @Date: 2017-08-21 09:34:54
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-10-24 17:03:12
 */

<template>
  <div class="module">
    <el-row class="module-title">
      精细化查找
      <el-button type="text" style="float:right;margin-right:30px;">
        {{mapLoaded === false ? '地图加载中' : '地图已加载'}}
        <i :class="['el-icon--right', (mapLoaded === false ? 'el-icon-loading' : 'el-icon-check')]"></i>
      </el-button>
    </el-row>
    <el-row class="row-single-input">
      <el-col :offset="2" :span="2">输出坐标系：</el-col>
      <el-col :offset="0" :span="6">
        <template>
          <el-radio v-for="(item,index) of coordTypes" :key="index" class="radio" v-model="coordType" :label="item">{{item}}</el-radio>
        </template>
      </el-col>
      <el-col :offset="2" :span="2">查询地址：</el-col>
      <el-col :offset="0" :span="6">
        <el-input v-model="singleAddress" placeholder="请输入进行查询的地址"></el-input>
      </el-col>
      <el-col :offset="1" :span="2">
        <el-button type="primary" @click="searchEvent">搜索</el-button>
      </el-col>
    </el-row>
    <el-row class="row-single-resule">
      <el-col class="el-col-mao-con" :offset="2" :span="8">
        <BMap-module v-show="false" :searchAddressList="searchAddressList" :searchCoordinationList="searchCoordinationList" @mapLoaded="mapLoadedEvent" @searchResult="searchResultEvent"></BMap-module>
      </el-col>
      <el-col :offset="2" :span="10">
        <el-table :data="searchResult" style="width: 100%">
          <el-table-column header-align="center" prop="keyword" label="查询名称" :width="'200px'"></el-table-column>
          <el-table-column header-align="center" prop="title" label="查询地址"></el-table-column>
          <el-table-column align="center" prop="lng" label="经度(x)" :width="'130px'"></el-table-column>
          <el-table-column align="center" prop="lat" label="纬度(y)" :width="'130px'"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BMapModule from './components/BMap1.3.vue'
export default {
  components: {
    BMapModule
  },
  data() {
    let coordTypes = ['WGS-84', 'GCJ-02', 'BD-09', '投影坐标系']
    let coordType = coordTypes[0]
    return {
      coordType,                                                         // 当前进行返回的地址
      coordTypes,                                                        // 一共支撑的地址格式
      searchType: 'single',                                              // 查询类型
      singleAddress: null,                                               // 单个查询的地址
      mapLoaded: false,                                                  // 地图是否加载成功
      searchResult: [],                                                  // 查询结果
      searchAddressList: [],                                             // 需要进行查询的点
      searchCoordinationList: []                                         // 需要进行查询的坐标位置
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    /**
     * @description 地图组件加载成功
     */
    mapLoadedEvent() {
      this.mapLoaded = true
    },
    /**
     * @description 对位置信息进行查询
     */
    createSearchAddressList() {
      if (this.searchType === 'single') {
        this.searchAddressList = [this.singleAddress]
      }
    },
    /**
     * @description 对坐标信息进行查询
     */
    createSearchCoordinationList() {

    },
    /**
     * @description 对信息进行搜索
     */
    searchEvent() {
      this.createSearchAddressList()
    },
    /**
     * @description 存储查询结果
     * @param {Array} result 查询结果
     */
    searchResultEvent(result) {
      for (let i of result) {
        this.searchResult.push({
          keyword: i.keyword,
          title: i.pois[0].title,
          lat: i.pois[0].point.lat,
          lng: i.pois[0].point.lng,
          pois: i.pois
        })
      }
    }
  }
}
</script>

<style scoped>
.el-row{
  margin: 30px 0;
}
.module-title {
  text-align: center;
  font-size: 20px;
  line-height: 40px;
}
.row-single-input{
  height: 36px;
  line-height: 36px;
}
.default-result{
  margin-left: 80px;
  font-size: 20px;
  line-height: 40px;
}
.el-col-mao-con{
  height: 600px;
}
</style>
