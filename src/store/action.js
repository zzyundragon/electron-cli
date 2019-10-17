import { changeTitle } from './mutation-types.js'

export default {
  async getUserInfo({
    commit,
    state
  }) {
    let res = 'await getUser()'
    commit(changeTitle, res)
  }
}
