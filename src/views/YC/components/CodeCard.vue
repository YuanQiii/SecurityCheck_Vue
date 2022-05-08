<!--
 * @Author: YuanQiii
 * @GitHub: https://github.com/YuanQiii
 * @Date: 2022-04-20 22:17:46
 * @FilePath: \SecurityCheck_Vue\src\views\YC\components\CodeCard.vue
-->
<template>
  <div class="code-card">
    <img src="../../../images/yc/yc-mark.png" alt="" class="mark-image" />
    <img :src="qrcode" alt="" class="qrcode" />
    <div class="md5">
      <div
        class="item"
        v-for="(item, index) in md5Str.slice(0, 10)"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
    <div class="sequence-code">
      <div class="item" v-for="(item, index) in this.sequenceCode" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeCard",
  props: {
    qrcode: {
      type: String,
      default: "",
    },
    md5Str: {
      type: String,
      default: "",
    },
    sequenceCode: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.code-card {
  .mark-image {
    position: absolute;
    left: 24.5vw;
    top: 58vw;
    width: 51vw;
  }
  .qrcode {
    position: absolute;
    left: 27.5vw;
    top: 84.5vw;
    width: 16vw;
  }
  .md5 {
    position: absolute;
    left: 34vw;
    top: 76vw;
    display: flex;
    font-size: 0.5rem;
    font-weight: 800;
    width: 2.5rem;
    flex-wrap: wrap;
    transform: scale(0.75);
    .item {
      width: 0.5rem;
    }
  }
  .sequence-code {
    display: flex;
    position: absolute;
    left: 59vw;
    top: 91.5vw;
    font-size: 0.5rem;
    width: 3.2rem;
    flex-wrap: wrap;
    transform: scale(0.8);
    .item {
      width: 0.4rem;
    }
  }
}
</style>