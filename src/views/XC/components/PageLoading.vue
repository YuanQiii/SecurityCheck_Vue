<!--
 * @Author: YuanQiii
 * @GitHub: https://github.com/YuanQiii
 * @Date: 2022-05-19 19:12:01
 * @FilePath: \SecurityCheck_Vue\src\views\XC\components\PageLoading.vue
-->
<template>
  <div class="page-loading">
    <div class="spinner">
      <div class="rect rect1"></div>
      <div class="rect rect2"></div>
      <div class="rect rect3"></div>
      <div class="rect rect4"></div>
      <div class="rect rect5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageLoading",
};
</script>

<style lang="less" scoped>
.page-loading {
  background: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  .spinner {
    display: flex;
    height: 60px;
    align-items: center;
    .rect {
      display: inline-block;
      background-color: #67cf22;
      width: 6px;
      height: 24px;
      margin-left: 3px;
    }

    @keyframes myAnimation {
      0% {
        height: 24px;
      }
      50% {
        height: 60px;
      }
      100% {
        height: 24px;
      }
    }

    .rect1 {
      animation: myAnimation 0.6s;
      animation-timing-function: ease-in-out;
    }
    .rect2 {
      animation: myAnimation 0.6s;
      animation-delay: 0.1s;
      animation-timing-function: ease-in-out;
    }
    .rect3 {
      animation: myAnimation 0.6s;
      animation-delay: 0.2s;
      animation-timing-function: ease-in-out;
    }
    .rect4 {
      animation: myAnimation 0.6s;
      animation-delay: 0.3s;
      animation-timing-function: ease-in-out;
    }
    .rect5 {
      animation: myAnimation 0.6s;
      animation-delay: 0.4s;
      animation-timing-function: ease-in-out;
    }
  }
}
</style>