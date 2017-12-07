/*
 * @Author: zhen chen
 * @Date: 2017-10-16 22:52:05
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-18 22:16:17
 * @description "日常"模块内部个模块注册文件
 */

const modules = {
  name: 'Daily',
  path: 'daily',
  description: '日常',
  component: () => import(/* webpackChunkName: "Daily" */ './index'),
  childrenModules: [
    {
      name: 'HttpProtocol',
      description: 'Http协议',
      children: [
        {
          name: 'AlarmInfo',
          path: 'AlarmInfo',
          description: '报警信息',
          component: () => import(/* webpackChunkName: "AlarmInfo" */ './components/http-protocol/alarm-info/index')
        },
        {
          name: 'LineTrack',
          path: 'LineTrack',
          description: '线路轨迹',
          component: () => import(/* webpackChunkName: "LineTrack" */ './components/http-protocol/line-track/index')
        },
        {
          name: 'TestMockjs',
          path: 'TestMockjs',
          description: 'Mockjs测试',
          component: () => import(/* webpackChunkName: "StringCoderAndDecoder" */ './components/http-protocol/test-mockjs/index')
        }
      ]
    },
    {
      name: 'CanvasAbout',
      description: 'Canvas相关',
      children: [
        {
          name: 'CanvasImgMap',
          path: 'CanvasImgMap',
          description: 'canvas转换成图片',
          component: () => import(/* webpackChunkName: "CanvasImgMap" */ './components/canvas-about/canvas-img-map/index.vue')
        }
      ]
    }
  ]
}

export default modules
