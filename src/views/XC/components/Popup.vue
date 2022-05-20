<template>
  <div class="popup">
    <div class="container">
      <div class="header" :class="queryCount == 1 ? 'real' : ''">
        <div class="circle">
          <span class="text">{{ queryCount == 1 ? "正" : queryCount }}</span>
        </div>
        <div class="tip">该身份码当前为第{{ queryCount }}次查询。</div>
        <img
          @click="close"
          class="image"
          src="../../../images/xc/close.png"
          alt=""
        />
      </div>
      <product-info
        :queryCount="queryCount"
        :firstQueryTime="firstQueryTime"
        :sequenceCode="sequenceCode"
        :blockchainCode="blockchainCode"
        :blockchainHash="blockchainHash"
      />
    </div>
  </div>
</template>

<script>
import ProductInfo from "./ProductInfo.vue";
export default {
  name: "Popup",
  components: {
    ProductInfo,
  },
  props: {
    queryCount: {
      type: Number,
      default: 0,
    },
    firstQueryTime: {
      type: String,
      default: "",
    },
    sequenceCode: {
      type: String,
      default: "",
    },
    blockchainCode: {
      type: String,
      default: "",
    },
    blockchainHash: {
      type: String,
      default: "",
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="less" scoped>
.popup {
  width: 318px;
  color: #fff;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  .container {
    .header {
      background-color: #f6a229;
      height: 6.5rem;
      display: flex;
      justify-content: center;
      position: relative;
      .circle {
        display: block;
        width: 3.5rem;
        height: 3.5rem;
        border: solid 0.2rem #fff;
        border-radius: 3.5rem;
        position: relative;
        top: 0.55rem;
        .text {
          line-height: 3.5rem;
          font-size: 2.1rem;
        }
      }
      .tip {
        font-size: 0.92rem;
        position: absolute;
        top: 5.1rem;
      }
      .image {
        position: absolute;
        width: 1rem;
        height: 1rem;
        left: 285px;
        top: 0.8rem;
      }
    }
    .real {
      background-color: #a2ca43;
    }
  }
}
</style>