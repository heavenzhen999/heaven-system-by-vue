/*
 * @Author: zhen chen
 * @Date: 2017-10-16 22:52:05
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-12-26 09:52:41
 * @description "实例"模块内部个模块注册文件
 */

const modules = {
  name: 'Example',
  path: 'example',
  description: '实例',
  component: () => import(/* webpackChunkName: "Example" */ './index'),
  childrenModules: [
    {
      name: 'Canvas',
      description: 'Canvas',
      children: [
        {
          name: 'ZrenderBlock',
          path: 'ZrenderBlock',
          description: 'Zrender时钟',
          component: () => import(/* webpackChunkName: "CanvasWheel" */ './components/canvas/clock/index')
        },
        {
          name: 'CanvasWheel',
          path: 'CanvasWheel',
          description: 'Canvas成果一',
          component: () => import(/* webpackChunkName: "CanvasWheel" */ './components/canvas/wheel/index')
        },
        {
          name: 'CanvasPoint',
          path: 'CanvasPoint',
          description: 'Canvas成果二',
          component: () => import(/* webpackChunkName: "CanvasPoint" */ './components/canvas/point/index')
        },
        {
          name: 'CanvasBulletScreen',
          path: 'CanvasBulletScreen',
          description: 'Canvas弹幕',
          component: () => import(/* webpackChunkName: "CanvasBulletScreen" */ './components/canvas/bullet-screen/index.vue')
        }
      ]
    },
    {
      name: 'ECharts',
      description: 'ECharts',
      children: [
        {
          name: 'Echarts',
          path: 'Echarts-line-大数据量面积图',
          description: 'line-大数据量面积图',
          component: () => import(/* webpackChunkName: "Echarts" */ './components/echarts/index.vue'),
          props: { type: 'line-大数据量面积图' }
        },
        {
          name: 'Echarts',
          path: 'Echarts-line-极坐标双数值轴',
          description: 'line-极坐标双数值轴',
          component: () => import(/* webpackChunkName: "Echarts" */ './components/echarts/index.vue'),
          props: { type: 'line-极坐标双数值轴' }
        }
      ]
    },
    {
      name: 'Openlayers',
      description: 'Openlayers',
      children: [
        {
          name: 'Openlayers',
          path: 'Openlayers-HelloWorld',
          description: 'HelloWorld',
          component: () => import(/* webpackChunkName: "Openlayers" */ './components/openlayers/index.vue'),
          props: { type: 'HelloWorld' }
        }
      ]
    },
    {
      name: 'Notification',
      description: 'Notification',
      children: [
        {
          name: 'Notification',
          path: 'Notification',
          description: 'Notification 桌面提示',
          component: () => import(/* webpackChunkName: "Notification" */ './components/notification/index.vue')
        }
      ]
    },
    // {
    //   name: 'Three.js',
    //   description: 'Three.js',
    //   children: []
    // },
    {
      name: 'SVG',
      description: 'SVG',
      children: [
        {
          name: 'SVGCircleLine',
          path: 'SVGCircleLine',
          description: 'SVG圆进度线',
          component: () => import(/* webpackChunkName: "SVGCircleLine" */ './components/svg/circle-line/index.vue')
        }
      ]
    },
    {
      name: 'BrowserRewrite',
      description: '浏览器组件',
      children: [
        {
          name: 'AlertConfirmPrompt',
          path: 'AlertConfirmPrompt',
          description: 'Alert&Confirm&Prompt',
          component: () => import(/* webpackChunkName: "AlertConfirmPrompt" */ './components/browser-rewrite/alert-confirm-prompt/index')
        }
      ]
    },
    {
      name: 'Eval',
      description: 'Eval',
      children: [
        {
          name: 'EvalCalputer',
          path: 'EvalCalputer',
          description: 'EvalCalputer',
          component: () => import(/* webpackChunkName: "EvalCalputer" */ './components/eval/eval-calputer/index')
        }
      ]
    },
    {
      name: 'GeoDateTranslate',
      description: '地理数据转换',
      children: [
        {
          name: 'FindCoordinate',
          path: 'FindCoordinate',
          description: 'POI查询',
          component: () => import(/* webpackChunkName: "FindCoordinate" */ './components/geodate-translate/POI-search/index')
        },
        {
          name: 'EsriJSONToGeoJSON',
          path: 'EsriJSONToGeoJSON',
          description: 'EsriJSON转换成GeoJSON',
          component: () => import(/* webpackChunkName: "EsriJSONToGeoJSON" */ './components/geodate-translate/EsriJSON-to-GeoJSON/index')
        },
        {
          name: 'CoordinateTransformation',
          path: 'CoordinateTransformation',
          description: '坐标系转换',
          component: () => import(/* webpackChunkName: "CoordinateTransformation" */ './components/geodate-translate/coordinate-translate/index')
        }
      ]
    },
    {
      name: 'Tools',
      description: '工具',
      children: [
        {
          name: 'JSONTranslation',
          path: 'JSONTranslation',
          description: 'JSON格式在线编辑',
          component: () => import(/* webpackChunkName: "JSONTranslation" */ './components/tools/json-translation/index')
        },
        {
          name: 'StringCoderAndDecoder',
          path: 'StringCoderAndDecoder',
          description: '字符串编解码',
          component: () => import(/* webpackChunkName: "StringCoderAndDecoder" */ './components/tools/string-coder-and-decoder/index')
        },
        {
          name: 'BuilderSVG',
          path: 'BuilderSVG',
          description: '生成多边形svg',
          component: () => import(/* webpackChunkName: "BuilderSVG" */ './components/tools/builder-svg/index.vue')
        }
      ]
    },
    {
      name: 'Image',
      description: '图片',
      children: [
        {
          name: 'ContourLoadingImg',
          path: 'ContourLoadingImg',
          description: '图片轮廓记载',
          component: () => import(/* webpackChunkName: "DelayLoadingImg" */ './components/image/contour-loading-img/index.vue')
        },
        {
          name: 'DelayLoadingImg',
          path: 'DelayLoadingImg',
          description: '图片延迟加载',
          component: () => import(/* webpackChunkName: "DelayLoadingImg" */ './components/image/delay-loading-img/index.vue')
        },
        {
          name: 'VerticalCenterImg',
          path: 'VerticalCenterImg',
          description: '图片垂直居中',
          component: () => import(/* webpackChunkName: "VerticalCenterImg" */ './components/image/vertical-center-img/index.vue')
        },
        {
          name: 'ImageTailor',
          path: 'ImageTailor',
          description: '头像图片裁剪',
          component: () => import(/* webpackChunkName: "ImageTailor" */ './components/image/image-tailor-1/index.vue')
        }
      ]
    },
    {
      name: 'Others',
      description: '其他',
      children: [
        {
          name: 'CodeMirror',
          path: 'CodeMirror',
          description: '代码编辑器',
          component: () => import(/* webpackChunkName: "CodeMirror" */ './components/others/code-mirror/index.vue')
        },
        {
          name: 'BackgroundColor',
          path: 'BackgroundColor',
          description: '炫酷背景色',
          component: () => import(/* webpackChunkName: "BackgroundColor" */ './components/others/background-color/index.vue')
        },
        {
          name: 'BackgroundCSS3',
          path: 'BackgroundCSS3',
          description: 'CSS3效果',
          component: () => import(/* webpackChunkName: "BackgroundCSS3" */ './components/others/background-css3/index.vue')
        },
        {
          name: 'BackgroundUKFlag',
          path: 'BackgroundUKFlag',
          description: '纯CSS英国国旗',
          component: () => import(/* webpackChunkName: "BackgroundColor" */ './components/others/background-uk-flag/index.vue')
        },
        {
          name: 'QRCode',
          path: 'QRCode',
          description: '生成二维码',
          component: () => import(/* webpackChunkName: "QRCode" */ './components/others/qrcode/index.vue')
        },
        {
          name: 'VerticalCenter',
          path: 'VerticalCenter',
          description: '垂直居中',
          component: () => import(/* webpackChunkName: "VerticalCenter" */ './components/others/vertical-center/index.vue')
        },
        {
          name: 'CopyToShearPlate',
          path: 'CopyToShearPlate',
          description: '复制到剪切板',
          component: () => import(/* webpackChunkName: "VerticalCenter" */ './components/others/copy-to-shear-plate/index.vue')
        }
      ]
    }
  ]
}

export default modules
