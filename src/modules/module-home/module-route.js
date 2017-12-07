/*
 * @Author: zhen chen
 * @Date: 2017-10-16 22:52:05
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-10-18 16:51:02
 * @description "主页"模块内部个模块注册文件
 */

const modules = {
  name: 'Home',
  path: 'home',
  description: '主页',
  component: () => import(/* webpackChunkName: "Home" */ './index'),
  childrenModules: []
}

export default modules
