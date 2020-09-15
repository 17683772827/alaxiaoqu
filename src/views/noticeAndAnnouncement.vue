<template>
    <div class="noticeAndAnnouncement" v-if="state4!=null">
      <title-bar post-title="通知公告"></title-bar>
      <van-tabs v-model="active" sticky>
        <van-tab  title="全部" name="0" v-if="state5!=null">
          <div class="noticeAndAnnouncement-wrapper">
            <router-link to="/noticeAndAnnouncementDetails" class="noticeAndAnnouncement-item" v-for="(item, index) in state5" :key="index" @click.native="setState9(item)">
              <div class="noticeAndAnnouncement-item-title van-ellipsis">
                {{item.title}}
              </div>
              <div class="noticeAndAnnouncement-item-content van-ellipsis">
                {{item.content}}
              </div>
              <div class="noticeAndAnnouncement-item-cover">
                <img src="../assets/images/cover.png">
              </div>
              <div class="noticeAndAnnouncement-item-footer">
                <span>{{item.sort}}</span>
                <span>{{control[item.control]}}</span>
                <span>{{'浏览：'+item.see}}</span>
                <span>{{'发布：' + item.time}}</span>
              </div>
            </router-link>
          </div>
        </van-tab>
        <van-tab  title="通知" name="1" v-if="state6!=null">
          <div class="noticeAndAnnouncement-wrapper">
            <router-link to="/noticeAndAnnouncementDetails" class="noticeAndAnnouncement-item" v-for="(item, index) in state6" :key="index" @click.native="setState9(item)">
              <div class="noticeAndAnnouncement-item-title van-ellipsis">
                {{item.title}}
              </div>
              <div class="noticeAndAnnouncement-item-content van-ellipsis">
                {{item.content}}
              </div>
              <div class="noticeAndAnnouncement-item-cover">
                <img src="../assets/images/cover.png">
              </div>
              <div class="noticeAndAnnouncement-item-footer">
                <span>{{item.sort}}</span>
                <span>{{control[item.control]}}</span>
                <span>{{'浏览：'+item.see}}</span>
                <span>{{'发布：' + item.time}}</span>
              </div>
            </router-link>
          </div>
        </van-tab>
        <van-tab  title="公告" name="2" v-if="state7!=null">
          <div class="noticeAndAnnouncement-wrapper">
            <router-link to="/noticeAndAnnouncementDetails" class="noticeAndAnnouncement-item" v-for="(item, index) in state7" :key="index" @click.native="setState9(item)">
              <div class="noticeAndAnnouncement-item-title van-ellipsis">
                {{item.title}}
              </div>
              <div class="noticeAndAnnouncement-item-content van-ellipsis">
                {{item.content}}
              </div>
              <div class="noticeAndAnnouncement-item-cover">
                <img src="../assets/images/cover.png">
              </div>
              <div class="noticeAndAnnouncement-item-footer">
                <span>{{item.sort}}</span>
                <span>{{control[item.control]}}</span>
                <span>{{'浏览：'+item.see}}</span>
                <span>{{'发布：' + item.time}}</span>
              </div>
            </router-link>
          </div>
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>
    import TitleBar from "../components/TitleBar"
    import { homeMinx } from "../store/mixin"

    export default {
      name: "noticeAndAnnouncement",
      mixins: [homeMinx],
      components: { TitleBar },
      data() {
        return {
          active: '0',
          control: {
            council: '业委',
            neighborhood: '居委',
            propertyAdmin: '物业管理员',
            resident: '住户'
          }
        }
      },
      mounted() {
      }
    }
</script>

<style scoped>

</style>
