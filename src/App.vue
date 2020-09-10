<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
document.addEventListener('DOMContentLoaded', function () {
/* 监听dom加载 */
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10/* 设置最大字体50 */
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
  document.body.style.height = window.innerHeight + 'px'
})
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
</style>
