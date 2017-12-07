/*
 * @Author: zhen chen
 * @Date: 2017-10-16 22:52:05
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-10-18 16:50:46
 * @description "文档"模块内部个模块注册文件
 */

const modules = {
  name: 'Document',
  path: 'document',
  description: '日常',
  component: () => import(/* webpackChunkName: "Document" */ './index'),
  childrenModules: []
}

export default modules
