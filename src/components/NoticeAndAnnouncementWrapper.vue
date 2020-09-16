<template>
  <div class="noticeAndAnnouncement-wrapper">
    <div class="noticeAndAnnouncement-item" v-for="(item, index) in postState" :key="index">
      <router-link to="/noticeAndAnnouncementDetails" class="noticeAndAnnouncement-item-wrapper" @click.native="setState9(item)">
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
      <div class="noticeAndAnnouncement-item-button" v-if="state2.control === 'council' || state2.control === 'neighborhood' || state2.control === 'propertyAdmin'">
        <van-button type="warning" class="noticeAndAnnouncement-item-button-wrapper" @click="remove(item)">编辑</van-button>
        <van-button type="danger" class="noticeAndAnnouncement-item-button-wrapper" @click="remove(item)">删除</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { homeMinx } from "../store/mixin"

  export default {
    name: "NoticeAndAnnouncementWrapper",
    mixins: [homeMinx],
    props: ['postState'],
    data() {
      return {
        control: {
          council: '业委',
          neighborhood: '居委',
          propertyAdmin: '物业管理员',
          resident: '住户'
        }
      }
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
