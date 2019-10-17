/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * imgBaseUrl: 图片所在域名地址
 */

let host = 'http://127.0.0.1/4040'
let imgBaseUrl = ''

if (process.env.NODE_ENV === 'development') {
  imgBaseUrl = ''
} else if (process.env.NODE_ENV === 'production') {
  host = ''
  imgBaseUrl = ''
}

export {
  host,
  imgBaseUrl
}
