<template>
  <div class="query-result">
    <div v-if="result.type == 1">
      <img
        class="image-pass"
        src="../../../images/auman/val_images_pass.png"
        alt=""
      />

      <span class="pass">{{ code }}&nbsp;序列号为激活状态</span>
    </div>

    <div v-if="result.type == 2">
      <img
        class="image-fail"
        src="../../../images/auman/val_images_fail.png"
        alt=""
      />

      <span class="fail">
        无法识别{{ code }}序列号，已超过规定时间内扫描次数上限，请稍后再试
      </span>
    </div>

    <div v-if="result.type == 3">
      <img
        class="image-fail"
        src="../../../images/auman/val_images_fail.png"
        alt=""
      />

      <span class="error">
        {{ code }}序列号未被激活，请联系厂家进一步咨询
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "QueryResult",
  props: {
    code: {
      type: String,
      default: "",
    },
    result: {
      type: Object,
      default: {
        type: 0,
        count: 1,
      },
    },
  },
};
</script>

<style lang="less" scoped>
.query-result {
  position: relative;
  margin-left: 1vw;
  padding-left: 4vw;
  margin-bottom: -1.6rem;

  .image-pass {
    display: inline-block;
    width: 14.8vw;
    margin-top: -5px;
    margin-left: -4vw;
  }
  .image-fail {
    display: inline-block;
    width: 11.4vw;
    margin-top: -0.35rem;
    margin-left: -5.5vw;
  }

  .text {
    font-size: 120%;
    position: relative;
    top: -1.3rem;
  }

  .pass {
    .text();
    color: green;
    line-height: 4.4rem;
    margin-left: 0.3rem;
  }
  .fail {
    .text();
    color: orange;
    line-height: 2.4rem;
  }
  .error {
    .text();
    color: red;
    line-height: 2.4rem;
  }
}
</style>