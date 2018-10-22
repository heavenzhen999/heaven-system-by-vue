/*
 * @Author: chen zhen
 * @Date: 2018-06-26 15:24:09
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-09-20 11:29:11
 * @Description: 专门写 交互接口的文件
 */
const SYSTEM_NAME = process.env.MOCK ? '' : '/proxy'

export const LOGIN = `${SYSTEM_NAME}/sys/login`

export const LOGOUT = `${SYSTEM_NAME}/sys/logout`
