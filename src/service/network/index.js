import axios from './axios'
// import { host } from '@/config/index'
export default async (url = '', data = {}, method = 'get', headers = {}) => {
  method = method.toUpperCase() || 'GET'
  url = url || ''
  data = { ...data }
  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...headers
  }

  if (method === 'GET') {
    let dataStr = '' // 数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
