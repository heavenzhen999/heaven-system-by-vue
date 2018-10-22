/*
 * @Author: chen zhen
 * @Date: 2018-06-17 11:09:27
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-18 16:07:01
 */

import Vue from 'vue'
import Router from 'vue-router'
import {
  MODULE_TYEPS
} from '@/assets/const'

Vue.use(Router)

export default new Router({
  routes: [
    // 主页
    {
      path: '/',
      redirect: `/${MODULE_TYEPS[0].toLowerCase()}/`
    },
    {
      path: `/${MODULE_TYEPS[0].toLowerCase()}/`,
      name: `${MODULE_TYEPS[0].toLowerCase()}`,
      label: `主页`,
      component: () => import(/* webpackChunkName: "modules-home-index" */ '@/components/g-router-view'),
      children: [
        {
          path: '/',
          name: `${MODULE_TYEPS[0].toLowerCase()}-index`,
          label: '欢迎',
          component: () => import(/* webpackChunkName: "modules-home-index" */ '@/modules-home/index')
        },
        {
          path: 'resume',
          name: 'resume',
          label: '简历',
          component: () => import(/* webpackChunkName: "resume" */ '@/modules-home/children/resume')
        }
      ]
    },
    {
      path: `/${MODULE_TYEPS[1].toLowerCase()}/`,
      name: `${MODULE_TYEPS[1].toLowerCase()}`,
      label: '实例',
      component: () => import(/* webpackChunkName: "modules-home-index" */ '@/components/g-router-view'),
      children: [
        {
          path: '/',
          name: `${MODULE_TYEPS[1].toLowerCase()}-index`,
          label: '快速跳转',
          component: () => import(/* webpackChunkName: "modules-example-index" */ '@/modules-example/index')
        },
        {
          path: 'alert-confirm-prompt',
          name: 'alert-confirm-prompt',
          label: 'Alert&Confirm&Prompt',
          component: () => import(/* webpackChunkName: "modules-example-browser" */ '@/modules-example/children/alert-confirm-prompt')
        },
        {
          path: 'canvas-clock',
          name: 'canvas-clock',
          label: '圆盘时钟',
          component: () => import(/* webpackChunkName: "modules-example-canvas" */ '@/modules-example/children/canvas-clock')
        },
        {
          path: 'canvas-bullet-screen',
          name: 'canvas-bullet-screen',
          label: '随机弹幕',
          component: () => import(/* webpackChunkName: "modules-example-canvas" */ '@/modules-example/children/canvas-bullet-screen')
        },
        {
          path: 'canvas-point',
          name: 'canvas-point',
          label: '随机点(?待命名)',
          component: () => import(/* webpackChunkName: "modules-example-canvas" */ '@/modules-example/children/canvas-point')
        },
        {
          path: 'canvas-wheel',
          name: 'canvas-wheel',
          label: '圆盘成果',
          component: () => import(/* webpackChunkName: "modules-example-canvas" */ '@/modules-example/children/canvas-wheel')
        },
        {
          path: 'clock-text',
          name: 'clock-text',
          label: '文字时钟',
          component: () => import(/* webpackChunkName: "modules-example-clock" */ '@/modules-example/children/clock-text')
        },
        {
          path: 'contour-loading-img',
          name: 'contour-loading-img',
          label: '预加载图片',
          component: () => import(/* webpackChunkName: "modules-example-img" */ '@/modules-example/children/contour-loading-img')
        },
        {
          path: 'delay-loading-img',
          name: 'delay-loading-img',
          label: '延迟加载',
          component: () => import(/* webpackChunkName: "modules-example-img" */ '@/modules-example/children/delay-loading-img')
        },
        {
          path: 'svg-circle-line',
          name: 'svg-circle-line',
          label: 'svg进度条',
          component: () => import(/* webpackChunkName: "modules-example-svg" */ '@/modules-example/children/svg-circle-line')
        },
        {
          path: 'vertical-center-img',
          name: 'vertical-center-img',
          label: '图片居中',
          component: () => import(/* webpackChunkName: "modules-example-img" */ '@/modules-example/children/vertical-center-img')
        }
      ]
    },
    {
      path: `/${MODULE_TYEPS[2].toLowerCase()}/`,
      name: `${MODULE_TYEPS[2].toLowerCase()}`,
      label: '工具',
      component: () => import(/* webpackChunkName: "modules-home-index" */ '@/components/g-router-view'),
      children: [
        {
          path: '/',
          name: `${MODULE_TYEPS[2].toLowerCase()}-index`,
          label: '快速跳转',
          component: () => import(/* webpackChunkName: "modules-tool-index" */ '@/modules-tool/index')
        },
        {
          path: 'coordinate-translate',
          name: 'coordinate-translate',
          label: '坐标系转换',
          component: () => import(/* webpackChunkName: "modules-example-geometry" */ '@/modules-tool/children/coordinate-translate')
        },
        {
          path: 'EsriJSON-to-GeoJSON',
          name: 'EsriJSON-to-GeoJSON',
          label: 'EsriJSON转GeoJSON',
          component: () => import(/* webpackChunkName: "modules-example-geometry" */ '@/modules-tool/children/EsriJSON-to-GeoJSON')
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "modules-sys" */ '@/components/g-404')
    },
    // 其他所有拦截需要在路由的最后一格进行设置
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
