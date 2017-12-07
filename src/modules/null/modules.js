/*
 * @Author: zhen chen
 * @Date: 2017-08-05 01:04:48
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-08-05 20:09:57
 * @description "日常"模块内部个模块注册文件
 */

// "日常"模块
import Daily from './index'
// 子模块
// import DailyTask from './components/DailyTask/index'
import Welcome from './components/Welcome/index'

const modules = {
  code: '1',
  name: 'Daily',
  path: 'Daily',
  description: '日常',
  component: Daily,
  childrenModules: [
    {
      code: '1',
      name: 'Daily',
      description: '日常',
      children: [
        {
          code: '1',
          name: 'Welcome',
          path: 'Welcome',
          description: '欢迎',
          component: Welcome
        }
        // {
        //   code: '1',
        //   name: 'DailyTask',
        //   description: '日常任务',
        //   component: DailyTask
        // }// ,
        // {
        //   code: '1',
        //   name: 'NewDailyTask',
        //   description: '新增任务',
        //   component: NewDailyTask
        // }
      ]
    }
  ]
}

export default modules
