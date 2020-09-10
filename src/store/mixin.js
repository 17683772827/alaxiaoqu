/* 用到什么混入什么，注释好 */
import { mapGetters, mapActions } from 'vuex'
export const homeMinx = {
  computed: {
    ...mapGetters([
      'state0',
      'state1', /* 用户账号 */
      'state2'/* 登录后用户所有信息 */
    ])
  },
  methods: {
    ...mapActions([
      'setState0',
      'setState1', /* 用户账号 */
      'setState2'
    ])
  }
}
