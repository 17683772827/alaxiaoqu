<template>
    <div class="makeAnAnnouncement">
      <title-bar post-title="我的发布"></title-bar>
      <notice-and-announcement-wrapper :post-state="state8"></notice-and-announcement-wrapper>
    </div>
</template>

<script>
    import TitleBar from "../components/TitleBar"
    import { homeMinx } from "../store/mixin"
    import NoticeAndAnnouncementWrapper from "../components/NoticeAndAnnouncementWrapper"
    export default {
      name: "makeAnAnnouncement",
      mixins: [homeMinx],
      components: { NoticeAndAnnouncementWrapper, TitleBar },
      methods: {
        remove(item) {
          console.log(item)
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
