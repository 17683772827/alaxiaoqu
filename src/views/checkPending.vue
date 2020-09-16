<template>
    <div class="checkPending">
      <title-bar post-title="待审查"></title-bar>
      <personal-details v-if="isShow && details!=null" @setIsShow="setIsShow" :personal-details="details"></personal-details>
      <div class="peopleInformation-item" v-for="(item, index) in state10" :key="index" @click="setDetail(item)">
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
    </div>
</template>

<script>
    import TitleBar from "../components/TitleBar"
    import { homeMinx } from "../store/mixin"
    import PersonalDetails from "../components/PersonalDetails"

    export default {
      name: "checkPending",
      mixins: [homeMinx],
      components: { PersonalDetails, TitleBar },
      data() {
        return {
          isShow: false,
          details: null
        }
      },
      methods: {
        setIsShow(val) {
          this.isShow = val
        },
        setDetail(item) {
          this.isShow = true
          this.details = item
        }
      }
    }
</script>

<style scoped>

</style>
