<template>
    <div class="noticeAndAnnouncementDetails">
      <title-bar post-title="详情"></title-bar>
      <div class="noticeAndAnnouncementDetails-header">
        <div class="noticeAndAnnouncementDetails-header-title">
          {{state9.title}}
        </div>
        <div class="noticeAndAnnouncement-item-footer">
          <span>{{state9.sort}}</span>
          <span>{{state9.control}}</span>
          <span>{{'浏览：'+state9.see}}</span>
          <span>{{'发布：' + state9.time}}</span>
        </div>
      </div>
      <div class="noticeAndAnnouncementDetails-content">
        <div class="noticeAndAnnouncementDetails-content-title">内容:</div>
        <div class="noticeAndAnnouncementDetails-content-wrapper">
          {{state9.content}}
        </div>
      </div>
      <div class="noticeAndAnnouncementDetails-img">
        <div class="noticeAndAnnouncementDetails-img-title">图片</div>
        <div class="noticeAndAnnouncementDetails-img-wrapper">
          <img src="../assets/images/cover.png">
        </div>
      </div>
    </div>
</template>

<script>
   import { homeMinx } from "../store/mixin"
   import TitleBar from "../components/TitleBar"

export default {
  components: { TitleBar },
  mixins: [homeMinx],
    name: "noticeAndAnnouncementDetails",
    mounted() {
       console.log(this.state9)
    }
  }
</script>

<style scoped>

</style>
