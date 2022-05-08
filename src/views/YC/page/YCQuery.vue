<template>
  <div class="yc-query">
    <div class="type-0" v-show="languageIndex == 0">
      <img src="../../../images/yc/yc-0.png" alt="" class="image" />
      <div class="mark">
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
          <div
            class="item"
            v-for="(item, index) in String(this.sequenceCode)"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <language class="language" />
      <div class="btn">
        <div class="btn1 nav" @click="goToPage('ycVCR')"></div>
        <div class="btn2 nav" @click="goToPage('ycMarket')"></div>
        <div class="btn3 nav" @click="goToPage('ycCode')"></div>
        <div class="btn4" @click="query"></div>
      </div>
    </div>
    <div class="type-1" v-show="languageIndex == 1">
      <img src="../../../images/yc/yc-1.png" alt="" class="image" />
      <div class="mark">
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
          <div
            class="item"
            v-for="(item, index) in String(this.sequenceCode)"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <language class="language" />
      <div class="btn">
        <div class="btn1 nav" @click="goToPage('ycVCR')"></div>
        <div class="btn2 nav" @click="goToPage('ycMarket')"></div>
        <div class="btn3 nav" @click="goToPage('ycCode')"></div>
        <div class="btn4" @click="query"></div>
      </div>
    </div>
    <div class="type-2" v-show="languageIndex == 2">
      <img src="../../../images/yc/yc-2.png" alt="" class="image" />
      <div class="mark">
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
          <div
            class="item"
            v-for="(item, index) in String(this.sequenceCode)"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <language class="language" />
      <div class="btn">
        <div class="btn1 nav" @click="goToPage('ycVCR')"></div>
        <div class="btn2 nav" @click="goToPage('ycMarket')"></div>
        <div class="btn3 nav" @click="goToPage('ycCode')"></div>
        <div class="btn4" @click="query"></div>
      </div>
    </div>
    <div class="type-3" v-show="languageIndex == 3">
      <img src="../../../images/yc/yc-3.png" alt="" class="image" />
      <div class="mark">
        <img src="../../../images/yc/yc-mark.png" alt="" class="mark-image" />
        <img :src="qrcode" alt="" class="qrcode" />
        <div class="md5">
          <div class="item" v-for="(item, index) in md5Str" :key="index">
            {{ item }}
          </div>
        </div>
        <div class="sequence-code">
          <div
            class="item"
            v-for="(item, index) in String(this.sequenceCode)"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <language class="language" />
      <div class="btn">
        <div class="btn1 nav" @click="goToPage('ycVCR')"></div>
        <div class="btn2 nav" @click="goToPage('ycMarket')"></div>
        <div class="btn3 nav" @click="goToPage('ycCode')"></div>
        <div class="btn4" @click="query"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ycQueryApi, ycQRCodeApi } from "@/api/query";
import Language from "../components/Language.vue";
import { mapState } from "vuex";

export default {
  name: "YCQuery",
  components: {
    Language,
  },
  created() {
    this.getYCQRCode();
  },
  data() {
    return {
      imageStr: "",
    };
  },
  computed: {
    ...mapState("yc", ["languageIndex"]),
    sequenceCode() {
      return this.$route.query.sequenceCode;
    },
    encryptCode() {
      return this.$route.query.encryptCode;
    },
    qrcode() {
      return `data:image/png;base64,${this.imageStr}`;
    },
    md5Str() {
      return this.$route.query.encryptCode;
    },
  },
  methods: {
    goToPage(name) {
      this.$router.push({ name });
    },
    getYCQRCode() {
      ycQRCodeApi(this.sequenceCode, this.encryptCode).then((response) => {
        this.imageStr = response.data;
      });
    },
    query() {
      let temp = JSON.stringify({ sequenceCode: this.sequenceCode });
      ycQueryApi(temp).then((response) => {
        this.$router.push({
          path: "yc/ycResult",
          query: {
            ...response.data,
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.yc-query {
  position: relative;
  font-family: Arial;
  .image {
    width: 100vw;
  }

  .type-0 {
    .mark {
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

    .language {
      position: absolute;
      left: calc(100vw - 90px);
      top: 27vw;
    }
    .nav {
      width: 25vw;
      height: 6rem;
    }
    .btn {
      .btn1 {
        position: absolute;
        left: 25vw;
        top: 0;
      }
      .btn2 {
        position: absolute;
        left: 50vw;
        top: 0;
      }
      .btn3 {
        position: absolute;
        left: 75vw;
        top: 0;
      }
      .btn4 {
        width: 90vw;
        height: 3rem;
        margin-left: 5vw;
        margin-top: 120vw;
        position: absolute;
        top: 0;
      }
    }
  }
  .type-1 {
    .mark {
      .mark-image {
        position: absolute;
        left: 24.5vw;
        top: 66vw;
        width: 51vw;
      }
      .qrcode {
        position: absolute;
        left: 27.5vw;
        top: 92.5vw;
        width: 16vw;
      }
      .md5 {
        position: absolute;
        left: 34vw;
        top: 84vw;
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
        top: 98.5vw;
        font-size: 0.5rem;
        width: 3.2rem;
        flex-wrap: wrap;
        transform: scale(0.8);
        .item {
          width: 0.4rem;
        }
      }
    }
    .language {
      position: absolute;
      left: calc(100vw - 90px);
      top: 37vw;
    }
    .nav {
      width: 25vw;
      height: 8rem;
    }
    .btn {
      .btn1 {
        position: absolute;
        left: 25vw;
        top: 0;
      }
      .btn2 {
        position: absolute;
        left: 50vw;
        top: 0;
      }
      .btn3 {
        position: absolute;
        left: 75vw;
        top: 0;
      }
      .btn4 {
        width: 90vw;
        height: 3rem;
        margin-left: 5vw;
        margin-top: 120vw;
        position: absolute;
        top: 0;
      }
    }
  }
  .type-2 {
    .mark {
      .mark-image {
        position: absolute;
        left: 24.5vw;
        top: 62vw;
        width: 51vw;
      }
      .qrcode {
        position: absolute;
        left: 27.5vw;
        top: 88.5vw;
        width: 16vw;
      }
      .md5 {
        position: absolute;
        left: 34vw;
        top: 80vw;
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
        top: 94.5vw;
        font-size: 0.5rem;
        width: 3.2rem;
        flex-wrap: wrap;
        transform: scale(0.8);
        .item {
          width: 0.4rem;
        }
      }
    }
    .language {
      position: absolute;
      left: calc(100vw - 90px);
      top: 37vw;
    }
    .nav {
      width: 25vw;
      height: 8rem;
    }
    .btn {
      .btn1 {
        position: absolute;
        left: 25vw;
        top: 0;
      }
      .btn2 {
        position: absolute;
        left: 50vw;
        top: 0;
      }
      .btn3 {
        position: absolute;
        left: 75vw;
        top: 0;
      }
      .btn4 {
        width: 90vw;
        height: 3rem;
        margin-left: 5vw;
        margin-top: 120vw;
        position: absolute;
        top: 0;
      }
    }
  }
  .type-3 {
    .mark {
      .mark-image {
        position: absolute;
        left: 24.5vw;
        top: 71vw;
        width: 51vw;
      }
      .qrcode {
        position: absolute;
        left: 27.5vw;
        top: 97.5vw;
        width: 16vw;
      }
      .md5 {
        position: absolute;
        left: 34vw;
        top: 89vw;
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
        top: 103.5vw;
        font-size: 0.5rem;
        width: 3.2rem;
        flex-wrap: wrap;
        transform: scale(0.8);
        .item {
          width: 0.4rem;
        }
      }
    }
    .language {
      position: absolute;
      left: calc(100vw - 90px);
      top: 40vw;
    }
    .nav {
      width: 25vw;
      height: 9rem;
    }
    .btn {
      .btn1 {
        position: absolute;
        left: 25vw;
        top: 0;
      }
      .btn2 {
        position: absolute;
        left: 50vw;
        top: 0;
      }
      .btn3 {
        position: absolute;
        left: 75vw;
        top: 0;
      }
      .btn4 {
        width: 90vw;
        height: 3rem;
        margin-left: 5vw;
        margin-top: 120vw;
        position: absolute;
        top: 0;
      }
    }
  }
}
</style>