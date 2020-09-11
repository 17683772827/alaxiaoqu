<template>
    <div class="index">
      <div class="top"></div>
      <van-nav-bar
        :title="this.state2.cellName + '巡检公众平台'"
        left-text=""
        right-text=""
        left-arrow
        @click-left="onClickLeft()"
        class="top-bar"
        fixed="fixed"
      />
      <div class="index-content0" v-show="active==='0'">
        <div class="index-control" v-if="control0">
          <div class="index-control-wrapper color0">
            <van-icon name="todo-list-o" />
            <div class="index-control-title">待审核</div>
          </div>
        </div>
        <div class="index-control" v-if="control1">
          <router-link to="/informationEntry" class="index-control-wrapper color1">
            <van-icon name="records" />
            <div class="index-control-title">信息录入</div>
          </router-link>
        </div>
        <div class="index-control" v-if="control2">
          <div class="index-control-wrapper color2">
            <van-icon name="notes-o" />
            <div class="index-control-title">发布通知/公告</div>
          </div>
        </div>
        <div class="index-control" v-if="control3">
          <div class="index-control-wrapper color3">
            <van-icon name="aim" />
            <div class="index-control-title">审查发布</div>
          </div>
        </div>
        <div class="index-control" v-if="control4">
          <div class="index-control-wrapper color4">
            <van-icon name="manager-o" />
            <div class="index-control-title">我的发布</div>
          </div>
        </div>
        <div class="index-control" v-if="control5">
          <div class="index-control-wrapper color5">
            <van-icon name="friends-o" />
            <div class="index-control-title">人员信息</div>
          </div>
        </div>
        <div class="index-control" v-if="control6">
          <div class="index-control-wrapper color6">
            <van-icon name="add-o" />
            <div class="index-control-title">发布巡检</div>
          </div>
        </div>
        <div class="index-control" v-if="control7">
          <div class="index-control-wrapper color7">
            <van-icon name="volume-o" />
            <div class="index-control-title">全部通知</div>
          </div>
        </div>
        <div class="index-control" v-if="control8">
          <div class="index-control-wrapper color8">
            <van-icon name="orders-o" />
            <div class="index-control-title">全部公告</div>
          </div>
        </div>
      </div>
      <div class="index-content1" v-show="active==='1'">
        未开放！
      </div>
      <div class="index-content2" v-show="active==='2'">
        <van-tabs v-model="active2" sticky>
          <van-tab  title="全部" name="0">
            内容1
          </van-tab>
          <van-tab  title="通知" name="1">
            内容2
          </van-tab>
          <van-tab  title="公告" name="2">
            内容3
          </van-tab>
        </van-tabs>
      </div>
      <div class="index-content3" v-show="active==='3'">
        <div class="index-content3-tx">
          <img src="../../src/assets/images/tx1.png">
        </div>
        <van-cell-group>
          <van-cell title="姓名" :value="state2.name" size="large" />
          <van-cell title="职位" :value="state2.control" size="large" />
          <van-cell title="小区" :value="state2.cellName" size="large" />
          <van-cell title="地址" :value="state2.cellAddress" size="large" />
        </van-cell-group>
      </div>
      <div class="bottom"></div>
      <van-tabbar v-model="active" class="bottom-bar">
        <van-tabbar-item icon="home-o" name="0">我的小区</van-tabbar-item>
        <van-tabbar-item icon="shop-o" name="1">生活服务</van-tabbar-item>
        <van-tabbar-item icon="label-o" name="2">最新发布</van-tabbar-item>
        <van-tabbar-item icon="manager-o" name="3">个人信息</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
  import { homeMinx } from "../store/mixin"
  export default {
    name: "index",
    mixins: [homeMinx],
    data() {
      return {
        active: '0',
        active2: '0',
        control0: false, /* 待审核 */
        control1: false, /* 信息录入 */
        control2: false, /* 发布 */
        control3: false, /* 审核发布 */
        control4: false, /* 我的发布 */
        control5: false, /* 人员信息 */
        control6: false, /* 发布巡检 */
        control7: false, /* 全部通知 */
        control8: false /* 全部公告 */
      }
    },
    mounted() {
      /* 业委权限 */
      if (this.state2.control === 'council') {
        this.control0 = true
        this.control1 = true
        this.control2 = true
        this.control3 = true
        this.control4 = true
        this.control5 = true
        this.control6 = false
        this.control7 = true
        this.control8 = true
      }
      /* 居委权限 */
      if (this.state2.control === 'neighborhood') {
        this.control0 = true
        this.control1 = true
        this.control2 = true
        this.control3 = true
        this.control4 = true
        this.control5 = true
        this.control6 = false
        this.control7 = true
        this.control8 = true
      }
      /* 物业管理员 */
      if (this.state2.control === 'propertyAdmin') {
        this.control0 = true
        this.control1 = true
        this.control2 = true
        this.control3 = true
        this.control4 = true
        this.control5 = true
        this.control6 = true
        this.control7 = true
        this.control8 = true
      }
      /* 住户 */
      if (this.state2.control === 'resident') {
        this.control0 = false
        this.control1 = false
        this.control2 = false
        this.control3 = false
        this.control4 = false
        this.control5 = false
        this.control6 = false
        this.control7 = true
        this.control8 = true
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
