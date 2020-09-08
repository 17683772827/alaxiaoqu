/* 用到什么混入什么，注释好 */
import { mapGetters, mapActions } from 'vuex'
export const homeMinx = {
  computed: {
    ...mapGetters([
      'state0',
      'state1',
      'state2'
    ])
  },
  methods: {
    ...mapActions([
      'setState0',
      'setState1',
      'setState2'
    ])
  }
}
