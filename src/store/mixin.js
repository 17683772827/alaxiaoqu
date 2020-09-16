/* 用到什么混入什么，注释好 */
import { mapGetters, mapActions } from 'vuex'
export const homeMinx = {
  computed: {
    ...mapGetters([
      'state0', /* 所有数据 */
      'state1', /* 用户账号 */
      'state2', /* 登录后用户所有信息 */
      'state3', /* 职位对象 */
      'state4', /* 通知公告api */
      'state5', /* 全部已审核通知公告 */
      'state6', /* 全部已审核通知 */
      'state7', /* 全部已审核公告 */
      'state8', /* 我的发布 */
      'state9', /* 通知公告details */
      'state10'/* 未审核 */
    ])
  },
  methods: {
    ...mapActions([
      'setState0',
      'setState1', /* 用户账号 */
      'setState2',
      'setState3', /* 职位对象 */
      'setState4', /* 职位对象 */
      'setState5', /* 全部已审核通知公告 */
      'setState6', /* 全部已审核通知 */
      'setState7', /* 全部已审核公告 */
      'setState8', /* 我的发布 */
      'setState9', /* 通知公告details */
      'setState10'/* 未审核 */
    ])
  }
}
