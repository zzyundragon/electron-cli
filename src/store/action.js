import { changeTitle, insertUserInfo } from './mutation-types.js'

export default {
  async insertUserInfo({
    commit,
    state
  }) {
    commit(insertUserInfo, sessionStorage.getItem('userInfo'))
    commit(changeTitle, 'res.data')
  }
}
