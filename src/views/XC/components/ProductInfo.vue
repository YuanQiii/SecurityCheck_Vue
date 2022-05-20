<template>
  <div class="product-info">
    <div class="text" style="margin-top: 0.9rem">产品唯一身份编码</div>
    <div :class="width">
      {{ sequenceCode }}
    </div>
    <div class="line"></div>
    <div class="text">第一次查询时间</div>
    <div :class="width">
      {{ formatDate(firstQueryTime, "YY/MM/DD hh:mm:ss", true) }}
    </div>
    <div class="line"></div>
    <div class="text">区块编号</div>
    <div :class="width">
      {{ blockchainCode }}
    </div>
    <div class="line"></div>
    <div class="text">区块Hash</div>
    <div :class="width">
      {{ blockchainHash }}
    </div>
    <div class="line"></div>

    <div
      :class="width"
      style="font-size: 12px; color: #aaa; margin-top: 0.75rem"
    >
      <span>*产品身份码由</span>
      <img src="../../../images/xc/block.png" alt="" style="width: 16px" />
      <span style="color: #3ea6ff">满天星链</span>
      <span>技术存证</span>
    </div>
    <div class="line"></div>

    <div class="tip" v-if="queryCount == 1">
      <div class="btn" @click="updatePlay">
        <div class="icon">
          <img
            src="../../../images/xc/pause.png"
            style="height: 13px; width: 13px"
            alt=""
            v-show="!play"
          />
          <svg
            v-show="play"
            xmlns="http://www.w3.org/2000/svg"
            class="play"
            style="width: 0.8rem; height: 0.8rem; display: inline"
            viewBox="0 0 135 140"
            fill="#ff840b"
          >
            <rect y="23.0991" width="15" height="93.8018" rx="6">
              <animate
                attributeName="height"
                begin="0.5s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
              <animate
                attributeName="y"
                begin="0.5s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
            </rect>
            <rect x="30" y="35.5991" width="15" height="68.8018" rx="6">
              <animate
                attributeName="height"
                begin="0.25s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
              <animate
                attributeName="y"
                begin="0.25s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
            </rect>
            <rect x="60" width="15" height="43.8018" rx="6" y="48.0991">
              <animate
                attributeName="height"
                begin="0s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
              <animate
                attributeName="y"
                begin="0s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
            </rect>
            <rect x="90" y="35.5991" width="15" height="68.8018" rx="6">
              <animate
                attributeName="height"
                begin="0.25s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
              <animate
                attributeName="y"
                begin="0.25s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
            </rect>
            <rect x="120" y="23.0991" width="15" height="93.8018" rx="6">
              <animate
                attributeName="height"
                begin="0.5s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
              <animate
                attributeName="y"
                begin="0.5s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </svg>
        </div>
        播放语音
      </div>
      <span class="text" :style="play ? 'color: #ff840b' : 'color: #323232'">
        尊敬的客户您好！您所查询的防伪码正确，此产品是一汽解放汽车有限公司无锡柴油机厂生产的正牌产品，欢迎再次选购。
      </span>
    </div>
    <div class="tip" v-else>
      您所查询的防伪码于{{
        formatDate(firstQueryTime, "YY年MM月DD日 hh:mm:ss", true)
      }}被首次查询，谨防假冒！如有疑问请联系厂家或致电当地12365。
    </div>
    <img
      src="../../../images/xc/verification-passed.png"
      alt=""
      :class="position"
    />
    <img
      class="image"
      src="http://qiaopai2.yq0510.com/supercode/images/bottom.png"
      alt=""
      v-if="ad"
    />
    <audio
      ref="myAudio"
      src="http://qiaopai2.yq0510.com/supercode/images/72aeab24fe404861aea21f8210290745.mp3"
      hidden="true"
    ></audio>
  </div>
</template>

<script>
import { formatDate } from "@/utils/formatDate";
export default {
  name: "ProductInfo",
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
    ad: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: "verification-passed0",
    },
    width: {
      type: String,
      default: "time time0",
    },
  },
  data() {
    return {
      play: false,
    };
  },
  methods: {
    formatDate(time, format, pre) {
      return formatDate(time, format, pre);
    },
    updatePlay() {
      this.play = !this.play;
      if (this.play) {
        this.$refs.myAudio.play();
      } else {
        this.$refs.myAudio.pause();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.product-info {
  position: relative;
  text-align: center;
  .text {
    color: #aaa;
    font-size: 1rem;
    margin-top: 0.75rem;
  }
  .time {
    word-wrap: break-word;
    margin: 0 auto;
    color: #323232;
    font-size: 0.95rem;
    margin-top: 0.35rem;
    margin-bottom: 0.25rem;
  }
  .time0 {
    width: 88%;
  }
  .time1 {
    width: 80%;
  }
  .line {
    display: block;
    width: 54vw;
    height: 1px;
    margin: 0 auto;
    background-color: #ddd;
  }
  .tip {
    width: 94%;
    font-size: 0.95rem;
    text-align: left;
    color: #000;
    margin: 0 auto;
    line-height: 1.7rem;
    margin-top: 0.8rem;
    .btn {
      display: inline-block;
      color: #ff840b;
      font-size: 13px;
      border: solid 1px #ff840b;
      width: 103px;
      height: 22px;
      line-height: 23px;
      text-align: center;
      border-radius: 20px;
      .icon {
        display: inline-block;
      }
    }
    .text {
      line-height: 1.9rem;
      font-size: 0.95rem;
    }
  }
  .image {
    width: 100%;
    height: 6rem;
    margin-top: 0.95rem;
    margin-bottom: -0.2rem;
  }

  .verification-passed0 {
    position: absolute;
    width: 103px;
    left: 176px;
    top: 7.8rem;
  }
  .verification-passed1 {
    position: absolute;
    width: 103px;
    left: 61vw;
    top: 8.1rem;
  }
}
</style>