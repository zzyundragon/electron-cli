import { changeTitle } from './mutation-types'
export default {
  [changeTitle](state, { title }) {
    state.title = 'leaplearner'
  }
}
