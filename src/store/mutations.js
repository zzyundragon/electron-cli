import { changeTitle, insertUserInfo } from './mutation-types'

export default {
  [changeTitle](state, title) {
    state.title = title
  },
  [insertUserInfo](state, userInfo) {
    state.userInfo = sessionStorage.getItem('userInfo')
  }
}
