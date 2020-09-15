<template>
    <div class="peopleInformation">
      <title-bar post-title="人员信息"></title-bar>
      <van-tabs v-model="active">
        <van-tab :title="state3[title[0]]" >
          <div class="peopleInformation-item" v-for="(item, index) in councilArr" :key="index">
            <div class="peopleInformation-item-img-wrapper">
              <img src="../assets/images/tx1.png">
            </div>
            <div class="peopleInformation-item-detail-wrapper">
              <span>{{item.name}}</span>
              <span>{{item.cellName}}</span>
              <span>{{item.cellAddress}}</span>
            </div>
            <div class="peopleInformation-item-control-wrapper">
              <span>{{state3[item.control]}}</span>
            </div>
          </div>
        </van-tab>
        <van-tab :title="state3[title[1]]" >
          <div class="peopleInformation-item" v-for="(item, index) in neighborhoodArr" :key="index">
            <div class="peopleInformation-item-img-wrapper">
              <img src="../assets/images/tx1.png">
            </div>
            <div class="peopleInformation-item-detail-wrapper">
              <span>{{item.name}}</span>
              <span>{{item.cellName}}</span>
              <span>{{item.cellAddress}}</span>
            </div>
            <div class="peopleInformation-item-control-wrapper">
              <span>{{state3[item.control]}}</span>
            </div>
          </div>
        </van-tab>
        <van-tab :title="state3[title[2]]" >
          <div class="peopleInformation-item" v-for="(item, index) in propertyAdminArr" :key="index">
            <div class="peopleInformation-item-img-wrapper">
              <img src="../assets/images/tx1.png">
            </div>
            <div class="peopleInformation-item-detail-wrapper">
              <span>{{item.name}}</span>
              <span>{{item.cellName}}</span>
              <span>{{item.cellAddress}}</span>
            </div>
            <div class="peopleInformation-item-control-wrapper">
              <span>{{state3[item.control]}}</span>
            </div>
          </div>
        </van-tab>
        <van-tab :title="state3[title[3]]" >
          <div class="peopleInformation-item" v-for="(item, index) in residentArr" :key="index">
            <div class="peopleInformation-item-img-wrapper">
              <img src="../assets/images/tx1.png">
            </div>
            <div class="peopleInformation-item-detail-wrapper">
              <span>{{item.name}}</span>
              <span>{{item.cellName}}</span>
              <span>{{item.cellAddress}}</span>
            </div>
            <div class="peopleInformation-item-control-wrapper">
              <span>{{state3[item.control]}}</span>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>
    import TitleBar from "../components/TitleBar"
    import { homeMinx } from "../store/mixin"

    export default {
      name: "PeopleInformation",
      mixins: [homeMinx],
      components: { TitleBar },
      data() {
        return {
          title: [],
          active: 0,
          councilArr: [],
          neighborhoodArr: [],
          propertyAdminArr: [],
          residentArr: []
        }
      },
      mounted() {
        this.title = Object.keys(Object(this.state3))
        this.state0.forEach((item, index) => {
          if (item.control === 'council') {
            this.councilArr.push(item)
          } else if (item.control === 'neighborhood') {
            this.neighborhoodArr.push(item)
          } else if (item.control === 'propertyAdmin') {
            this.propertyAdminArr.push(item)
          } else if (item.control === 'resident') {
            this.residentArr.push(item)
          }
        })
      }
    }
</script>

<style scoped>

</style>
