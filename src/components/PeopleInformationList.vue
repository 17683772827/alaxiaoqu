<template>
    <div class="PeopleInformationList">
      <van-nav-bar
        title="勾选用户"
        left-text="返回"
        right-text="确定"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <van-checkbox-group v-model="result">
        <van-checkbox v-for="(item, index) in state0" :name="item.telephone" :key="index" class="PeopleInformationList-item">{{item.cellAddress}}</van-checkbox>
      </van-checkbox-group>
    </div>
</template>

<script>
  import { homeMinx } from "../store/mixin"

  export default {
    name: "PeopleInformationList",
    mixins: [homeMinx],
    data() {
      return {
        result: []
      }
    },
    methods: {
      onClickLeft() {
        this.$emit('setIsShow', false)
        this.$emit('setShow', this.result)
      },
      onClickRight() {
        this.$emit('setIsShow', false)
        this.$emit('setShow', this.result)
      }
    }
    }
</script>

<style scoped>

</style>
