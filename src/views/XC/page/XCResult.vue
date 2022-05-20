<template>
  <div class="xc-result">
    <div class="container">
      <div class="header" :class="queryCount == 1 ? 'real' : ''">
        该身份码当前为第{{ queryCount }}次查询。
      </div>
      <div class="id-info">
        <div class="title">
          <img class="icon" src="../../../images/xc/title_logo.png" alt="" />
          <span class="text">产品身份证信息</span>
        </div>
        <product-info
          :queryCount="queryCount"
          :firstQueryTime="firstQueryTime"
          :sequenceCode="sequenceCode"
          :blockchainCode="blockchainCode"
          :blockchainHash="blockchainHash"
          :ad="false"
          position="verification-passed1"
          width="time time1"
        />
      </div>
      <div class="id-tip">
        <div class="title">
          <img class="icon" src="../../../images/yc/icon-0.png" alt="" />
          <span class="text">产品身份标识对比</span>
        </div>
        <div class="main">
          <img class="icon" src="../../../images/xc/waring.png" alt="" />
          <span class="text"
            >查询小贴士：产品所贴防伪标识应与查询结果标识图案基本一致，数字编码以产品标识为准。</span
          >
        </div>
      </div>
      <div class="blank"></div>
      <div class="info">
        <div class="title">
          <img class="icon" src="../../../images/yc/icon-1.png" alt="" />
          <span class="text">产品信息</span>
        </div>
        <div class="main">
          <div class="row">
            <div class="left">企业名称</div>
            <div class="right">一汽解放汽车有限公司无锡柴油机厂</div>
          </div>
          <div class="row" style="margin-top: 1rem">
            <div class="left">品牌名称</div>
            <div class="right">锡柴</div>
          </div>
        </div>
      </div>
      <div class="mask" v-show="popupShow"></div>
    </div>
    <popup
      class="popup"
      v-show="popupShow"
      :queryCount="queryCount"
      :firstQueryTime="firstQueryTime"
      :sequenceCode="sequenceCode"
      :blockchainCode="blockchainCode"
      :blockchainHash="blockchainHash"
      @close="close"
    />
  </div>
</template>

<script>
import Popup from "@/views/XC/components/Popup.vue";
import { formatDate } from "@/utils/formatDate";
import ProductInfo from "../components/ProductInfo.vue";
export default {
  name: "XCResult",
  components: {
    Popup,
    ProductInfo,
  },
  data() {
    return {
      popupShow: true,
      sequenceCode: this.$route.query.sequenceCode,
      blockchainCode: this.$route.query.blockchainCode,
      blockchainHash: this.$route.query.blockchainHash,
      sequenceCode: this.$route.query.sequenceCode,
      queryCount: this.$route.query.queryCount,
      firstQueryTime: this.$route.query.firstQueryTime,
    };
  },
  methods: {
    formatDate(time, format = "YY-MM-DD hh:mm:ss", pre) {
      return formatDate(time, format, pre);
    },
    close() {
      this.popupShow = false;
    },
  },
};
</script>
<style lang="less" scoped>
.xc-result {
  position: relative;
  font-family: "微软雅黑";
  background-color: #eee;
  min-height: 100vh;
  .container {
    .header {
      text-align: left;
      color: #fff;
      background-color: #f6a229;
      line-height: 2.8rem;
      font-size: 0.9rem;
      padding-left: 1.3rem;
    }
    .real {
      background-color: #a2ca43;
    }
    .id-info {
      margin-top: 0.45rem;
      background-color: #fff;
      padding-bottom: 1.95rem;
      text-align: center;
      .title {
        text-align: left;
        position: relative;
        border-bottom: solid 1px #eee;
        margin-bottom: 2.35rem;
        .icon {
          display: inline-block;
          width: 17px;
          margin-left: 1.3rem;
          position: relative;
          top: 0.3rem;
          margin-right: 0.6rem;
        }
        .text {
          line-height: 3.1rem;
          font-size: 0.95rem;
        }
      }
    }
    .id-tip {
      margin-top: 0.45rem;
      background-color: #fff;
      .title {
        text-align: left;
        position: relative;
        border-bottom: solid 1px #eee;
        .icon {
          display: inline-block;
          width: 17px;
          margin-left: 1.3rem;
          position: relative;
          top: 0.3rem;
          margin-right: 0.6rem;
        }
        .text {
          line-height: 3.2rem;
          font-size: 0.95rem;
        }
      }
      .main {
        position: relative;
        width: 90vw;
        text-align: left;
        margin-top: 1.1rem;
        padding-bottom: 0.35rem;
        padding-left: 0.6rem;
        .icon {
          width: 12.5px;
          margin-right: 0.3rem;
          position: relative;
          top: 0.1rem;
        }
        .text {
          color: #ccc;
          font-size: 0.75rem;
          line-height: 1.4rem;
        }
      }
    }
    .blank {
      margin-top: 0.15rem;
      height: 2.3rem;
      background-color: #fff;
    }
    .info {
      margin-top: 0.45rem;
      background-color: #fff;
      text-align: left;
      padding-bottom: 1.8rem;
      .title {
        text-align: left;
        position: relative;
        border-bottom: solid 1px #eee;
        margin-bottom: 1.9rem;
        .icon {
          display: inline-block;
          width: 17px;
          margin-left: 1.3rem;
          position: relative;
          top: 0.3rem;
          margin-right: 0.6rem;
        }
        .text {
          line-height: 3.2rem;
          font-size: 0.95rem;
        }
      }
      .row {
        width: 90vw;
        margin: 0 auto;
        font-size: 0.9rem;
        display: flex;
        .left {
          color: #aaa;
        }
        .right {
          display: inline-block;
          width: 50vw;
          margin-left: 4rem;
          line-height: 1.1rem;
        }
      }
    }
    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100%;
      background-color: #000;
      opacity: 0.7;
    }
  }

  .popup {
    position: absolute;
    left: calc((100vw - 318px) / 2);
    top: 2rem;
  }
}
</style>