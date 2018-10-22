/*
 * @Author: chen zhen
 * @Date: 2018-09-19 16:38:21
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-20 14:46:12
 * @Description 登录页面
 */

<template>
  <div class="g-login">
    <div class="g-login__logo">
      <m-logo></m-logo>
    </div>
    <div class="g-login__form">
      <!-- 用户名 -->
      <el-row class="g-login__row">
        <el-input class="g-login__input" :model="username" placeholder="请输入用户名"></el-input>
      </el-row>
      <!-- 密码 -->
      <el-row class="g-login__row">
        <el-input class="g-login__input" :modle="password" type="password" placeholder="请输入密码"></el-input>
      </el-row>
      <el-row class="g-login__row">
        <el-button class="g-login__button" size="small" :type="buttonState" @click="login">登录</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>

/**
 * 优化方案：
 *   1. 当点击登录按钮之后，需要变为loading的效果，等待后台的数据返回，再次期间不能重复进行请求
 *   2. 根据返回数据修改按钮颜色为 success 还是 danger
 *   3. 如果为danger的话，则在颜色修改为error的时候为不可用状态，不能重复使用
 *      在短暂延迟之后修改为 默认的正常模式，才可以进行处理
 *   4. 有一个 success 登录成功的短暂时间延迟，再此期间可以进行基础数据请求操作
 *   5. 集成对应的验证码模块 知道的解决方案为 极验 `http://www.geetest.com/package.html`
 */

import MLogo from '@/components/m-logo'

import { INTERFACE } from '@/assets/const'
import { CHANGE_USER_INFO } from '@/store/mutation-types'

export default {
  data() {
    return {
      username: null,
      password: null,
      buttonStateNum: 2 // 默认装填为2， 0 为成功， 1为失败
    }
  },
  computed: {
    // 登录的状态
    buttonState() {
      switch (this.buttonStateNum) {
        case 0:
          return 'success'
        case 1:
          return 'danger'
        default:
          return null
      }
    }
  },
  methods: {
    /**
     * 系统登录
     */
    login() {
      this.$axios.post(INTERFACE.LOGIN, {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.status === 0) {
          this.$store.commit(CHANGE_USER_INFO, this.tidyUpUserInfo(res.data.data))
        } else {
          throw new Error(res.data.message)
        }
      }).catch(err => {
        console.error('登录失败！', err)
      })
    },
    /**
     * 调整传入的userInfo信息数据格式
     * @param {Object} userInfo
     * @param {User} 用户信息
     */
    tidyUpUserInfo(userInfo) {
      // return new User()
      return {
        username: 'admin',
        name: 'chenzhen',
        privilege: [] // 权限
      }
    }
  },
  components: {
    MLogo
  }
}
</script>

<style lang="scss">
.g-login{
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.g-login__logo{
  flex: 3;
  height: 100%;
}
.g-login__form{
  flex: 2;
}
.g-login__input{
  width: 60%;
  .el-input__inner{
    @include background-transparent;
    border: none;
    border-left: 2px solid $themeColor;
    border-bottom: 2px solid $themeColor;
    border-radius: 0;
  }
}
.g-login__row + .g-login__row{
  margin-top: 20px;
}
</style>
