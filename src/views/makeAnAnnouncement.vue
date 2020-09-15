<template>
    <div class="makeAnAnnouncement">
      <title-bar post-title="我的发布"></title-bar>
      <div class="noticeAndAnnouncement-wrapper">
        <router-link to="/noticeAndAnnouncementDetails" class="noticeAndAnnouncement-item" v-for="(item, index) in state8" @click.native="setDetails(item)" :key="index">
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
    </div>
</template>

<script>
    import TitleBar from "../components/TitleBar"
    import { homeMinx } from "../store/mixin"
    export default {
      name: "makeAnAnnouncement",
      mixins: [homeMinx],
      components: { TitleBar },
      methods: {
        setDetails(item) {
          this.setState9(item)
          console.log('ok')
        }
      },
      data() {
        return {
          control: {
            council: '业委',
            neighborhood: '居委',
            propertyAdmin: '物业管理员',
            resident: '住户'
          }
        }
      }
    }
</script>

<style scoped>

</style>
