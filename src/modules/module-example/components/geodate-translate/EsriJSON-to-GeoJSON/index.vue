<template>
  <el-row class="module-EsriJSON-to-GeoJSON">
    <el-col :offset="2" :span="8">
      <div class="title">ESRIJson</div>
      <el-input type="textarea" :rows="8" placeholder="请输入需要转换的内容" v-model="transInVal"></el-input>
    </el-col>
    <el-col :span="4">
      <div class="title">{{changeTitle}}</div>
      <el-button type="primary" @click="transform">转换</el-button>
      <el-button type="primary" @click="transformMin">转换(压缩)</el-button>
      <el-button type="primary" @click="clear">清空</el-button>
    </el-col>
    <el-col :span="8">
      <div class="title">GoeJson</div>
      <el-input type="textarea" :rows="8" placeholder="转换结果" v-model="transOutVal"></el-input>
    </el-col>
  </el-row>
</template>

<script>
const arcgisToGeoJSON = require('@esri/arcgis-to-geojson-utils').arcgisToGeoJSON
// const geojsonToArcGIS = require('@esri/arcgis-to-geojson-utils').geojsonToArcGIS

export default {
  data() {
    return {
      changeTitle: '转换',
      moduleColInfo: ['45%', '10%', '45%'],
      transInVal: null,
      transOutVal: null
    }
  },
  methods: {
    transform() {
      this.changeTitle = '正在转换'
      if (this.transInVal !== '') {
        let ESRIJson = JSON.parse(this.transInVal)
        let GeoJson = {
          type: 'FeatureCollection',
          features: []
        }
        for (let feature of ESRIJson.features) {
          GeoJson.features.push(arcgisToGeoJSON(feature))
        }
        this.transOutVal = JSON.stringify(GeoJson, null, 2)
        this.changeTitle = '转换完毕'
      } else {
        this.changeTitle = '无数据'
      }
    },
    transformMin() {
      this.changeTitle = '正在转换'
      if (this.transInVal !== '') {
        let ESRIJson = JSON.parse(this.transInVal)
        let GeoJson = {
          type: 'FeatureCollection',
          features: []
        }
        for (let feature of ESRIJson.features) {
          GeoJson.features.push(arcgisToGeoJSON(feature))
        }
        this.transOutVal = JSON.stringify(GeoJson)
        this.changeTitle = '转换完毕'
      } else {
        this.changeTitle = '无数据'
      }
    },
    clear() {
      this.changeTitle = '转换'
      this.transInVal = null
      this.transOutVal = null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../../assets/scss/color.scss";
$title-height: 40px;
.module-EsriJSON-to-GeoJSON{
  @extend .active-text;
  >.el-col{
    text-align: center;
  }
  .title{
    line-height: $title-height;
    text-align: center;
    font-size: 24px;
  }
  .el-button{
    display: block;
    margin: 20px auto;
  }
}

</style>
