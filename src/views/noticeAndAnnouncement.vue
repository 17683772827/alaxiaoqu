<template>
    <div class="noticeAndAnnouncement" v-if="state4!=null">
      <title-bar post-title="通知公告"></title-bar>
      <van-tabs v-model="active" sticky>
        <van-tab  title="全部" name="0" v-if="state5!=null">
          <notice-and-announcement-wrapper :post-state="state5"></notice-and-announcement-wrapper>
        </van-tab>
        <van-tab  title="通知" name="1" v-if="state6!=null">
          <notice-and-announcement-wrapper :post-state="state6"></notice-and-announcement-wrapper>
        </van-tab>
        <van-tab  title="公告" name="2" v-if="state7!=null">
          <notice-and-announcement-wrapper :post-state="state7"></notice-and-announcement-wrapper>
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>
    import TitleBar from "../components/TitleBar"
    import { homeMinx } from "../store/mixin"
    import NoticeAndAnnouncementWrapper from "../components/NoticeAndAnnouncementWrapper"

    export default {
      name: "noticeAndAnnouncement",
      mixins: [homeMinx],
      components: { NoticeAndAnnouncementWrapper, TitleBar },
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
      },
      methods: {
        remove(item) {
          console.log(item)
        }
      }
    }
</script>

<style scoped>

</style>
