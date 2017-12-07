/*
 * @Author: zhen chen
 * @Date: 2017-10-16 22:55:43
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-11-30 21:35:47
 * @description 根据模块信息生成路由信息的方法文件
 */

export default function(modules) {
  // 创建路由变量
  let routes = []
    // 遍历所有的模块（包括子模块）
  for (let i of modules) {
    if (routes.length === 0) { // 创建第一级别初始化空路由
      routes.push({
        path: '/',
        name: i.name,
        props: i.props,
        redirect: '/' + i.path,
        meta: {
          router: i.name,
          name: i.name,
          description: i.description,
          extData: i.extData
        }
      })
    }
    let route = { // 单个路由的变量，当子路由遍历完成后才会加到routes里边
      path: '/' + i.path,
      name: i.name,
      component: i.component,
      props: i.props,
      meta: {
        router: i.name,
        name: i.name,
        description: i.description,
        extData: i.extData
      },
      children: []
    }
    for (let j of i.childrenModules) { // 遍历子路由
      for (let k of j.children) {
        if (route.children.length === 0) {
          route.children.push({ // 创建子路由的初始化空路由
            path: '',
            name: k.name,
            redirect: k.name,
            props: k.props,
            meta: {
              router: k.name,
              name: k.name,
              description: k.description
            }
          })
        }
        route.children.push({ // 添加二级路由到一级路由上
          path: k.path,
          name: k.name,
          component: k.component,
          props: k.props,
          meta: {
            router: k.name,
            name: k.name,
            description: k.description,
            extData: k.extData
          }
        })
      }
    }
    routes.push(route) // 路由变量添加到routes
  }
  return routes
}
