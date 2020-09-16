<template>
  <div class="nav-bar-wrapper">
    <div class="top"></div>
    <van-nav-bar
      :title="postTitle"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft()"
      class="top-bar"
      fixed="fixed"
      z-index=999
    />
  </div>
</template>

<script>
    export default {
      name: "TitleBar",
      props: ['postTitle'],
      data() {
        return {}
      },
      methods: {
        onClickLeft() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
