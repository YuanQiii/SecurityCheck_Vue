<template>
  <div class="xc-query">
    <div v-show="pageLoading">
      <page-loading />
    </div>

    <div v-show="!pageLoading">
      <div v-show="!loading">
        <div class="header">
          <img class="image" src="../../../images/xc/banner2.png" alt="" />
          <div class="text" @click="goToTool">企业工具</div>
        </div>
        <div class="icon">
          <img class="image" src="../../../images/xc/fwcx2.png" alt="" />
          <div class="text">防伪查询</div>
        </div>
        <div class="input">
          <input v-model="sequenceCode" type="text" maxlength="36" disabled />
        </div>
        <div class="btn" @click="query">查询</div>
        <div class="footer">
          技术支持：<a href="https://www.app315.net">甲骨文超级码科技股份</a>
          <br />
          Copyright 2005-2020 All Reserved
          <br /><a href="http://www.beian.miit.gov.cn">浙ICP备09106406号-13</a>
          <br />
        </div>
        <div class="tip" v-show="tipShow">请输入正确的防伪码</div>
      </div>

      <div v-show="loading" class="loading">
        <img
          src="../../../images/xc/in-verification.gif"
          alt=""
          class="image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { xcQueryApi } from "@/api/query";

import PageLoading from "../components/PageLoading.vue";

export default {
  name: "XCQuery",
  components: {
    PageLoading,
  },
  mounted() {
    setTimeout(() => {
      this.pageLoading = false;
    }, 1200);
  },
  data() {
    return {
      loading: false,
      pageLoading: true,
      tipShow: false,
      timer: null,
      sequenceCode: this.$route.query.sequenceCode,
    };
  },
  methods: {
    goToTool() {},
    query() {
      if (this.check()) {
        this.loading = true;
        let startTime = new Date().getTime();
        xcQueryApi({ sequenceCode: this.sequenceCode }).then((response) => {
          let endTime = new Date().getTime();
          let diff = endTime - startTime;

          if (diff > 3000) {
            this.loading = false;
            this.handleResult(response);
          } else {
            setTimeout(() => {
              this.handleResult(response);
            }, 3000 - diff);
          }
        });
      }
    },
    check() {
      if (this.sequenceCode.length == 20) {
        return true;
      } else {
        if (this.timer) {
          clearTimeout(this.timer);
        }

        this.timer = setTimeout(() => {
          this.tipShow = false;
        }, 3000);

        this.tipShow = true;

        return false;
      }
    },
    handleResult(response) {
      this.loading = false;
      if (response.data.result == "fake") {
        this.$router.push({
          path: "xcError",
        });
      } else {
        console.log({ ...response.data });

        this.$router.push({
          path: "xc/xcResult",
          query: {
            ...response.data,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.xc-query {
  font-size: 14px;
  position: relative;
  font-family: "微软雅黑";
  .header {
    .image {
      display: block;
      width: 100vw;
      margin-top: -1.2vw;
    }
    .text {
      display: block;
      width: 20vw;
      height: 1.9rem;
      line-height: 1.9rem;
      text-align: center;
      border: solid 0.04rem #72c154;
      color: #72c154;
      border-radius: 1.9rem;
      position: absolute;
      left: 75vw;
      top: 1.2rem;
    }
  }
  .icon {
    text-align: center;
    .image {
      margin-top: 1.1rem;
      width: 10.7vw;
    }
    .text {
      color: #2b82d8;
      margin-top: 0.5rem;
      margin-bottom: 2.05rem;
      font-size: 1rem;
    }
  }
  .input {
    input {
      width: calc(90vw - 24px);
      color: #a6a6a6;
      border: solid 1px #a6a6a6;
      padding: 6px 12px;
      border-radius: 6px;
      height: 30px;
      font-size: 16px;
      background: none;
      outline-style: none;
      margin-bottom: 1.5rem;
    }
  }
  .btn {
    margin: 0 auto;
    color: #ffffff;
    background: #72c154;
    height: 13vw;
    line-height: 13vw;
    border-radius: 5px;
    width: 90vw;
    font-size: 16px;
  }
  .footer {
    font-size: 12px;
    color: #b9b9b9;
    line-height: 1rem;
    position: relative;
    margin-top: 2.1rem;
    a {
      text-decoration: none;
      color: #b9b9b9;
    }
    .policeLink {
      display: flex;
      justify-content: center;
    }
    .police-icon {
      margin-right: 1vw;
    }
  }
  .tip {
    position: fixed;
    left: 3%;
    bottom: 22%;
    width: 90%;
    text-align: center;
    z-index: 1000;
    font-family: "微软雅黑";
    padding: 12px 2%;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .loading {
    .image {
      width: 60vw;
      margin-top: 30vw;
    }
  }
}
</style>