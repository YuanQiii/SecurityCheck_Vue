<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
window.onload = function () {
  document.addEventListener("touchstart", function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function (event) {
    event.preventDefault();
  });
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nprogress .bar {
  background: #a2ca43 !important; //自定义颜色
}
.spinner-icon {
  display: none !important;
}
</style>
