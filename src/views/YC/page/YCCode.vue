<!--
 * @Author: YuanQiii
 * @GitHub: https://github.com/YuanQiii
 * @Date: 2022-04-18 22:15:51
 * @FilePath: \SecurityCheck_Vue\src\views\YC\page\YCCode.vue
-->
<template>
  <div class="yc-code">
    <iframe
      v-if="languageIndex == 0"
      class="frame"
      src="https://freedom.jgwcjm.com/sites/YuChai/follow.html?lang=cn"
      frameborder="0"
    ></iframe>
    <iframe
      v-if="languageIndex == 1"
      class="frame"
      src="https://freedom.jgwcjm.com/sites/YuChai/follow.html?lang=en"
      frameborder="0"
    ></iframe>
    <iframe
      v-if="languageIndex == 2"
      class="frame"
      src="https://freedom.jgwcjm.com/sites/YuChai/follow.html?lang=vn"
      frameborder="0"
    ></iframe>
    <iframe
      v-if="languageIndex == 3"
      class="frame"
      src="https://freedom.jgwcjm.com/sites/YuChai/follow.html?lang=my"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "YCCode",
  computed: {
    ...mapState("yc", ["languageIndex"]),
  },
};
</script>

<style lang="less" scoped>
.yc-code {
  .frame {
    width: 100vw;
    height: 100vh;
  }
}
</style>