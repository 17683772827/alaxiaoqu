<template>
    <div class="login" v-if="state0!=null">
      <div class="login-wrapper">
        <van-nav-bar
          title="登录"
          right-text="未绑定？绑定一个"
          left-arrow
          @click-right="onClickRight"
          class="nav-bar"
        />
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="username"
            label="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写手机号' }]"
            type="number"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
</template>

<script>
  import { homeMinx } from '../store/mixin'
  import axios from 'axios'
export default {
  name: 'login',
  mixins: [homeMinx],
  mounted() {
    axios.get(`${process.env.VUE_APP_BASE_URL}`).then(res => {
      this.setState0(res.data)
    })
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onClickRight() {
      console.log('注册未开发')
    },
    onSubmit(values) {
      var success
      var cs = true
      this.state0.forEach((item, index) => {
        if (item.telephone === Number(values.username)) {
          if (item.password === values.password) {
            console.log('登录成功')
            success = true
            this.setState2(item)
          } else {
            success = false
            console.log('密码错误')
          }
          cs = false
        }
      })
      if (cs) {
        success = false
        console.log('账号尚未注册')
      }
      /* 这里向后台发起请求 存在返回true */
      if (success) {
        this.setState1(values)
        this.$router.push({ name: 'index' })
      }
    }
  }
}
</script>
<style scoped>
</style>
