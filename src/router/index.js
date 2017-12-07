/*
 * @Author: zhen chen
 * @Date: 2017-10-16 22:55:50
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-10-16 23:19:32
 * @description 路由主文件，用来根据引入的各个模块与用户权限信息进行匹配，获取当前用户允许访问的模块
 */

import Vue from 'vue'
import Router from 'vue-router'

// 引入各个单元模块
import HomeModule from '@/modules/module-home/module-route'                                               // "主页"
import DocumentModule from '@/modules/module-document/module-route'                                       // "文档"模块
import ExampleModule from '@/modules/module-example/module-route'                                         // "实例"模块
import DailyModule from '@/modules/module-daily/module-route'                                             // "日常"模块
// 根据权限信息筛选过的模块信息生成路由方法引入
import routerCreate from './routerCreate'

Vue.use(Router)

// 导入全部的模块
let modules = []
modules.push(HomeModule)
modules.push(DocumentModule)
modules.push(ExampleModule)
modules.push(DailyModule)

// 根据权限信息筛选过的模块信息生成路由
let routes = routerCreate(modules)

export default new Router({
  routes,
  modules
})
