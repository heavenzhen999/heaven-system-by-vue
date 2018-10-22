/*
 * @Author: chen zhen
 * @Date: 2018-06-25 11:03:40
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-06-25 11:19:54
 * @Description: 用来测试menu 是否正常进行了加载
 */

import Vue from 'vue'
import _ from 'lodash'
import GMenu from '@/components/g-menu.vue'

describe('g-menu.vue', () => {
  it('测试是否正常加载?', () => {
    const Constructor = Vue.extend(GMenu)
    const vm = new Constructor().$mount()
    expect(_.trim(vm.$el.textContent)).toEqual('这里是测试初次创建')
  })
})
