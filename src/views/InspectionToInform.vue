<template>
    <div class="InspectionToInform">
      <title-bar post-title="发布巡查"></title-bar>
      <van-cell-group>
        <van-field v-model="time" label="巡查时间" placeholder="请输入巡查时间年月日" />
        <van-field v-model="content" label="巡查内容" placeholder="请输入巡查内容" autosize="autosize" type="textarea" />
        <van-field v-model="cellAddress" label="巡查地点" placeholder="xx栋xx层xx号" />
        <!--<van-field v-model="show" label="选择巡查对象" placeholder="请选择巡查对象" />-->
      </van-cell-group>
      <van-cell is-link title="选择巡查对象" @click="isShow = true" />
      <!--<div class="InspectionToInform-checkPeople" @click="isShow=true">选择巡查对象</div>-->
      <people-information-list v-show="isShow" @setIsShow="setIsShow" @setShow="setShow"></people-information-list>
      <div class="InspectionToInform-tj">
        <van-button type="info" class="InspectionToInform-tj-wrapper" @click="tj">提交</van-button>
      </div>
    </div>
</template>

<script>
    import TitleBar from "../components/TitleBar"
    import PeopleInformationList from "../components/PeopleInformationList"
    export default {
      name: "InspectionToInform",
      components: { PeopleInformationList, TitleBar },
      data() {
        return {
          isShow: false,
          time: '',
          content: '',
          show: [],
          cellAddress: ''
        }
      },
      methods: {
        tj() {
          var obj = {
            time: this.time,
            content: this.content,
            show: this.show,
            cellAddress: this.cellAddress
          }
          console.log(obj)
        },
        setIsShow(val) {
          this.isShow = val
          console.log('ok')
        },
        setShow(val) {
          this.show = val
        }
      }
    }
</script>

<style scoped>

</style>
