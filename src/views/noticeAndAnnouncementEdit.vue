<template>
    <div class="noticeAndAnnouncementEdit">
      <title-bar post-title="发布"></title-bar>
      <van-cell-group>
        <!-- 选择发布类型 -->
        <van-field v-model="sort" label="选择类型" placeholder="选择类型" @click="show0 = true" />
        <van-action-sheet v-model="show0" :actions="actions0" @select="onSelect0" />
        <van-field v-model="title" label="标题" placeholder="请输入标题" />
        <van-field
          v-model="content"
          rows="2"
          autosize="autosize"
          label="内容"
          type="textarea"
          maxlength="10000"
          placeholder="请输入留言"
          show-word-limit
        />
      </van-cell-group>
      <van-uploader v-model="fileList" multiple />
      <div class="noticeAndAnnouncementEdit-tj">
        <van-button type="info" class="noticeAndAnnouncementEdit-tj-wrapper" @click="tj">提交</van-button>
      </div>
    </div>
</template>

<script>
  import { homeMinx } from "../store/mixin"
  import TitleBar from "../components/TitleBar"
    export default {
      name: "noticeAndAnnouncementEdit",
      components: { TitleBar },
      mixins: [homeMinx],
      data() {
        return {
          show0: false,
          actions0: [{ name: '通知' }, { name: '公告' }],
          fileList: [],
          title: '', /* 标题 */
          content: ``, /* 内容 */
          img: [], /* 图片url */
          sort: '' /* 通知/公告 */,
          show: [17683772824], /* 可见用户 */
          author: Object(this.state2).name, /* 发布者 */
          telephone: 17683772827, /* 发布者账号 */
          control: Object(this.state2).control, /* 发布者职位 */
          time: '2020.12.3', /* 发布时间 */
          see: 1, /* 浏览次数 */
          index: 2, /* 索引 */
          audit: 0 /* 是否已审核 -1是未通过审核，0是待审核，1已审核 */
        }
      },
      methods: {
        onSelect0(item) {
          // 默认情况下点击选项时不会自动收起
          // 可以通过 close-on-click-action 属性开启自动收起
          this.show0 = false
          /* console.log(item) */
          this.sort = item.name
        },
        tj() {
          var myDate = new Date()
          var obj = {
            fileList: this.fileList,
            title: this.title, /* 标题 */
            content: this.content, /* 内容 */
            img: [], /* 图片url */
            sort: this.sort /* 通知/公告 */,
            show: [17683772824], /* 可见用户 */
            author: this.state2.name, /* 发布者 */
            telephone: 17683772827, /* 发布者账号 */
            control: this.state2.control, /* 发布者职位 */
            time: myDate.getFullYear() + '.' + myDate.getMonth() + '.' + myDate.getDate(), /* 发布时间 */
            see: 1, /* 浏览次数 */
            index: 2, /* 索引 */
            audit: 0 /* 是否已审核 -1是未通过审核，0是待审核，1已审核 */
          }
          console.log(obj)
        }
      }
    }
</script>

<style scoped>
</style>
