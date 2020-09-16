<template>
  <div class="personalDetails">
    <van-nav-bar
      title="审核"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="index-content3-tx">
      <img src="../../src/assets/images/tx1.png">
      <span>{{personalDetails.telephone}}</span>
    </div>
    <van-cell-group>
      <van-cell title="姓名" :value="personalDetails.name" size="large" />
      <van-cell title="职位" :value="control[personalDetails.control]" size="large" />
      <van-cell title="小区" :value="personalDetails.cellName" size="large" />
      <van-cell title="地址" :value="personalDetails.cellAddress" size="large" />
    </van-cell-group>
    <div class="personalDetails-button">
      <van-button type="warning" class="personalDetails-button-wrapper" @click="tg">拒绝</van-button>
      <van-button type="primary" class="personalDetails-button-wrapper" @click="tg">通过</van-button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "PersonalDetails",
      props: ['personalDetails'],
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
        onClickLeft() {
          this.$emit('setIsShow', false)
        },
        onClickRight() {
          this.$emit('setIsShow', false)
        },
        tg() {
          console.log(this.personalDetails)
        }
      }
    }
</script>

<style scoped>

</style>
