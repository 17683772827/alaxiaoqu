<template>
    <div class="index" v-if="state1!=null">
      <title-bar :post-title="this.state2.cellName + '巡检公众平台'"></title-bar>
      <div class="index-content0" v-show="active==='0'">
        <div class="index-control" v-if="control0">
          <router-link to="/checkPending" class="index-control-wrapper color0">
            <van-icon name="todo-list-o" />
            <div class="index-control-title">待审核</div>
          </router-link>
        </div>
        <div class="index-control" v-if="control1">
          <router-link to="/informationEntry" class="index-control-wrapper color1">
            <van-icon name="records" />
            <div class="index-control-title">信息录入</div>
          </router-link>
        </div>
        <div class="index-control" v-if="control2">
          <router-link to="/noticeAndAnnouncementEdit" class="index-control-wrapper color2">
            <van-icon name="notes-o" />
            <div class="index-control-title">发布通知/公告</div>
          </router-link>
        </div>
        <div class="index-control" v-if="control3">
          <div class="index-control-wrapper color3">
            <van-icon name="aim" />
            <div class="index-control-title">审查发布</div>
          </div>
        </div>
        <div class="index-control" v-if="control4">
          <router-link to="/makeAnAnnouncement" class="index-control-wrapper color4">
            <van-icon name="manager-o" />
            <div class="index-control-title">我的发布</div>
          </router-link>
        </div>
        <div class="index-control" v-if="control5">
          <router-link to="/PeopleInformation" class="index-control-wrapper color5">
            <van-icon name="friends-o" />
            <div class="index-control-title">人员信息</div>
          </router-link>
        </div>
        <div class="index-control" v-if="control6">
          <router-link to="/InspectionToInform" class="index-control-wrapper color6">
            <van-icon name="add-o" />
            <div class="index-control-title">发布巡检</div>
          </router-link>
        </div>
        <div class="index-control" v-if="control7">
          <router-link to="/noticeAndAnnouncement" class="index-control-wrapper color7">
            <van-icon name="volume-o" />
            <div class="index-control-title">通知公告</div>
          </router-link>
        </div>
      </div>
      <div class="index-content1" v-show="active==='1'">
        未开放！
      </div>
      <div class="index-content2" v-show="active==='2'">
        <van-tabs v-model="active2" sticky>
          <van-tab  title="全部" name="0">
            <notice-and-announcement-wrapper :post-state="state5"></notice-and-announcement-wrapper>
          </van-tab>
          <van-tab  title="通知" name="1">
            <notice-and-announcement-wrapper :post-state="state6"></notice-and-announcement-wrapper>
          </van-tab>
          <van-tab  title="公告" name="2">
            <notice-and-announcement-wrapper :post-state="state7"></notice-and-announcement-wrapper>
          </van-tab>
        </van-tabs>
      </div>
      <div class="index-content3" v-show="active==='3'">
        <div class="index-content3-tx">
          <img src="../../src/assets/images/tx1.png">
          <span>{{state2.telephone}}</span>
        </div>
        <van-cell-group>
          <van-cell title="姓名" :value="state2.name" size="large" />
          <van-cell title="职位" :value="control[state2.control]" size="large" />
          <van-cell title="小区" :value="state2.cellName" size="large" />
          <van-cell title="地址" :value="state2.cellAddress" size="large" />
        </van-cell-group>
        <div class="index-content3-button">
          <van-button type="danger" class="index-content3-button-wrapper" @click="outLine">退出登录</van-button>
        </div>
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
  import TitleBar from "../components/TitleBar"
  import { getUser, getArticle } from "../../api/api"
  import NoticeAndAnnouncementWrapper from "../components/NoticeAndAnnouncementWrapper"
  export default {
    name: "index",
    components: { NoticeAndAnnouncementWrapper, TitleBar },
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
        control7: false, /* 通知公告 */
        control: {
          council: '业委',
          neighborhood: '居委',
          propertyAdmin: '物业管理员',
          resident: '住户'
        }
      }
    },
    mounted() {
      if (this.state1 === null) {
        this.$router.push({ path: '/' })
      } else {
      getUser().then(res => {
        this.setState0(res.data)
      })
      getArticle().then(res => {
        this.setState4(res.data)
        console.log(this.state4)
        var all = []
        var tz = []
        var gg = []
        var myArray = []
        var wsh = [{
          audit: 0,
          name: '郭丰', /* 姓名 */
          telephone: 17683772823, /* 电话 */
          password: '123456', /* 密码 */
          cellName: '阿拉小区', /* 小区名 */
          cellAddress: '10栋10层1058', /* *路*弄*号*室 广东省广州市萝岗区九龙镇九龙大道 */
          control: 'resident' /* 住户 */
        },
          {
          audit: 0,
          name: '郭丰', /* 姓名 */
          telephone: 17683772822, /* 电话 */
          password: '123456', /* 密码 */
          cellName: '阿拉小区', /* 小区名 */
          cellAddress: '10栋10层1058', /* *路*弄*号*室 广东省广州市萝岗区九龙镇九龙大道 */
          control: 'resident' /* 住户 */
        }]
        res.data.forEach((item, index) => {
          if (item.audit === 1) {
            all.push(item)
            if (item.sort === '通知') {
              tz.push(item)
            }
            if (item.sort === '公告') {
              gg.push(item)
            }
          }
          if (item.telephone === this.state2.telephone) {
             myArray.push(item)
           }
        })
        this.setState5(all)
        this.setState6(tz)
        this.setState7(gg)
        this.setState8(myArray)
        this.setState10(wsh)
      })
        if (this.state1 == null) {
          this.$router.push({ path: '/' })
          /* if (localStorage) {
            if (localStorage.login === undefined) {
              console.log('本地无账号，重新登录')
              this.$router.push({ path: '/' })
            } else {
              console.log(JSON.parse(localStorage.login))
              var localData = JSON.parse(localStorage.login)
              this.setState1(localData.state1)
              this.setState2(localData.state2)
              control()
            }
          } else {
            this.$router.push({ path: '/' })
          } */
        }
          /* 业委权限 */
          if (this.state2.control === 'council') {
            this.control0 = true
            this.control1 = true
            this.control2 = true
            this.control3 = true
            this.control4 = true
            this.control5 = true
            this.control6 = true
            this.control7 = true
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
          }
      }
        },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      outLine() {
        this.setState0(null)
        this.setState1(null)
        this.setState2(null)
        localStorage.removeItem('login')
        this.$router.push({ path: '/' })
      },
      remove(item) {
        console.log(item)
      }
    }
  }
</script>

<style scoped>

</style>
