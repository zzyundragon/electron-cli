import request from './network/index'
/**
 * 获取title
 */
export const getTitle = (data) => request('/parse/login', data, 'post', { 'X-Parse-Application-Id': 'parseserver' })
