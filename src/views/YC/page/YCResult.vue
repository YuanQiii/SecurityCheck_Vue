<!--
 * @Author: YuanQiii
 * @GitHub: https://github.com/YuanQiii
 * @Date: 2022-04-20 21:35:11
 * @FilePath: \SecurityCheck_Vue\src\views\YC\page\YCResult.vue
-->
<template>
  <div class="yc-result" v-show="pageShow">
    <div v-if="result == 'fake'">
      <img src="../../../images/yc/fake.png" alt="" class="image" />
    </div>
    <div v-else @click="popupShow = false">
      <div class="header" :class="queryCount == 1 ? 'real' : 'fake'">
        <div class="text">
          {{ headertext }}
        </div>
        <img src="../../../images/yc/header-0.png" alt="" class="image1" />
        <img src="../../../images/yc/header-1.png" alt="" class="image2" />
      </div>

      <div class="main">
        <div class="top">
          <img src="../../../images/yc/icon-0.png" alt="" class="image" />
          <span class="text">{{ mainText }}</span>
        </div>
        <div class="bottom">
          <img
            src="../../../images/yc/card.png"
            alt=""
            class="image"
            @load="pageShow = true"
          />
          <div class="tip">
            <div class="text">
              <img src="../../../images/yc/tip.png" alt="" class="image" />{{
                tipText
              }}
            </div>
          </div>
        </div>
      </div>

      <div class="foot">
        <div class="top">
          <img src="../../../images/yc/icon-1.png" alt="" class="image" />
          <div class="text">{{ infoText }}</div>
        </div>
        <div class="list">
          <div class="item">
            <div class="left">{{ item1Text }}</div>
            <div class="right">{{ queryCount }}</div>
          </div>
          <div class="item">
            <div class="left">{{ item2Text }}</div>
            <div class="right">{{ formatTime(firstQueryTime) }}</div>
          </div>
          <div class="item">
            <div class="left">{{ item3Text }}</div>
            <div class="right">{{ item6Text }}</div>
          </div>
          <div class="item">
            <div class="left">{{ item4Text }}</div>
            <div class="right">{{ item7Text }}</div>
          </div>
          <div class="item">
            <div class="left">{{ item5Text }}</div>
            <div class="right">95098</div>
          </div>
        </div>
      </div>

      <div class="mask" v-show="popupShow"></div>
      <popup class="popup" :queryCount="queryCount" v-show="popupShow" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Popup from "../components/Popup.vue";
export default {
  name: "YCResult",
  components: {
    Popup,
  },
  data() {
    return {
      queryCount: this.$route.query.queryCount,
      firstQueryTime: this.$route.query.firstQueryTime,
      result: this.$route.query.result,
      popupShow: true,
      pageShow: false,
    };
  },
  computed: {
    ...mapState("yc", ["languageIndex"]),
    headertext() {
      if (this.languageIndex == 0) {
        if (this.queryCount == 1) {
          return "当前为第1次查询，为正品的身份码！";
        } else {
          return `该身份码当前为第${this.queryCount}次查询。`;
        }
      }
      if (this.languageIndex == 1) {
        return "The identity code has been inquired for several times, please beware of fake!";
      }
      if (this.languageIndex == 2) {
        return "Mã thân phận này đã được tra tìm rất nhiều lần, vui lòng cẩn thận hàng giả!";
      }
      if (this.languageIndex == 3) {
        return "မည်သူမည်ဝါဖြစ်ကြောင်းကုဒ်နံပါတ်ကိုအကြိမ်ကြိမ်မေးမြန်းပြီး၊ အတုကိုသတိပြုပါ။";
      }
    },
    mainText() {
      if (this.languageIndex == 0) {
        return "玉柴正品配件防伪标签示意图";
      }
      if (this.languageIndex == 1) {
        return "Anti-counterfeiting label picture of Yuchai authentic parts";
      }
      if (this.languageIndex == 2) {
        return "Hình ảnh biểu thị nhãn mác chống hàng giả phụ tùng chính hãng Yuchai";
      }
      if (this.languageIndex == 3) {
        return "Yuchai ၏အစစ်အမှန်ပစ္စည်းများအတွက်ငွေအတုပြုလုပ်ထားသောတံဆိပ်များကိုသိထားသည့်ပုံ";
      }
    },
    tipText() {
      if (this.languageIndex == 0) {
        return "玉柴君提醒您：产品所贴防伪标签应与以上玉柴正品配件防伪标签示意图一致，如有差异，谨防假冒";
      }
      if (this.languageIndex == 1) {
        return "Warm prompt: anti-counterfeiting label affixed to the product shall be consistent with the anti-counterfeiting label picture of Yuchai authentic parts above, if there is any differences, beware of fake";
      }
      if (this.languageIndex == 2) {
        return "Yuchai nhắc nhở bạn: Nhãn mác chống hàng giả được dán trên sản phẩm giống với hình ảnh biểu thị chống hàng giả trên phụ tùng hàng chính hãng của Yuchai, nếu có khác biệt, vui lòng cẩn thận chống giả mạo";
      }
      if (this.languageIndex == 3) {
        return "Yuchai Jun ကသင့်အားသတိပေးသည်မှာထုတ်ကုန်တွင်ပါ ၀ င်သည့်အတုအယောင်ဆေးဝါးအတုသည်အထက်ပါ Yuchai ဆက်စပ်ပစ္စည်းများ၏အတုအယောင်တံဆိပ်ကပ်ခြင်းနှင့်တူညီသင့်ကြောင်းသတိပေးသည်။";
      }
    },
    infoText() {
      if (this.languageIndex == 0) {
        return "查询信息";
      }
      if (this.languageIndex == 1) {
        return "Search information";
      }
      if (this.languageIndex == 2) {
        return "Thông tin tra tìm";
      }
      if (this.languageIndex == 3) {
        return "သတင်းအချက်အလက်ရှာဖွေပါ";
      }
    },

    item1Text() {
      if (this.languageIndex == 0) {
        return "总共查询次数";
      }
      if (this.languageIndex == 1) {
        return "The total number of inquiries";
      }
      if (this.languageIndex == 2) {
        return "Tổng số lần tra tìm";
      }
      if (this.languageIndex == 3) {
        return "စုစုပေါင်းမေးမြန်းချက်များ";
      }
    },
    item2Text() {
      if (this.languageIndex == 0) {
        return "首次查询时间";
      }
      if (this.languageIndex == 1) {
        return "Time for the first inquiry";
      }
      if (this.languageIndex == 2) {
        return "Tổng số lần tra tìm";
      }
      if (this.languageIndex == 3) {
        return "စုစုပေါင်းမေးမြန်းချက်များ";
      }
    },
    item3Text() {
      if (this.languageIndex == 0) {
        return "企业名称";
      }
      if (this.languageIndex == 1) {
        return "Company Name";
      }
      if (this.languageIndex == 2) {
        return "Tên doanh nghiệp";
      }
      if (this.languageIndex == 3) {
        return "ကုမ္ပဏီအမည်";
      }
    },
    item4Text() {
      if (this.languageIndex == 0) {
        return "品牌名称";
      }
      if (this.languageIndex == 1) {
        return "Brand name";
      }
      if (this.languageIndex == 2) {
        return "Tổng số lần tra tìm";
      }
      if (this.languageIndex == 3) {
        return "ကုန်အမှတ်တံဆိပ်";
      }
    },
    item5Text() {
      if (this.languageIndex == 0) {
        return "客服热线";
      }
      if (this.languageIndex == 1) {
        return "Customer service hotline";
      }
      if (this.languageIndex == 2) {
        return "Đường dây nóng dịch vụ";
      }
      if (this.languageIndex == 3) {
        return "ဖောက်သည်ဝန်ဆောင်မှု Hotline";
      }
    },

    item6Text() {
      if (this.languageIndex == 0) {
        return "广西玉柴机器专卖发展有限公司";
      }
      if (this.languageIndex == 1) {
        return "Guangxi Yuchai Machinery Group Co., Ltd.";
      }
      if (this.languageIndex == 2) {
        return "Công ty HH phát triển phụ tùng cơ khí Yuchai Quảng Tây";
      }
      if (this.languageIndex == 3) {
        return "ယြိခြၽိဳင္ စက္ယႏၱရား သီးသန႔္ေရာင္းဝယ္ေရး ကုမၸဏီ";
      }
    },
    item7Text() {
      if (this.languageIndex == 0) {
        return "玉柴";
      }
      if (this.languageIndex == 1) {
        return "Yuchai";
      }
      if (this.languageIndex == 2) {
        return "Yuchai";
      }
      if (this.languageIndex == 3) {
        return "Yuchai";
      }
    },
  },
  methods: {
    formatTime(timeStr) {
      return timeStr
        .replace("-", "/")
        .replace("-", "/")
        .replace("T", " ")
        .replace("Z", "");
    },
  },
};
</script>

<style lang="less" scoped>
.yc-result {
  position: relative;
  background-color: #eee;
  width: 100vw;
  overflow: hidden;

  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
  }

  .popup {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -140px;
    margin-top: 2rem;
  }
  .header {
    position: relative;
    color: #fff;
    width: 100vw;
    padding: 15px 6vw;
    text-align: left;
    font-size: 0.9rem;
    display: flex;
    .text {
      width: 80vw;
    }
    .image1 {
      position: absolute;
      width: 37px;
      height: 37px;
      left: 1vw;
      top: 10px;
      display: block;
    }
    .image2 {
      position: absolute;
      width: 37px;
      height: 37px;
      left: 89vw;
      top: 9px;
      display: block;
      opacity: 0.7;
    }
  }

  .main {
    background-color: #fff;
    margin-top: 0.7rem;
    width: 100vw;
    text-align: left;
    padding-bottom: 0.6rem;
    .top {
      // display: flex;
      border-bottom: solid 1px #eee;
      font-size: 0.9rem;
      padding: 14px 20px;
      .image {
        display: inline-block;
        width: 14.5px;
        height: 14.5px;
        margin-top: -1px;
      }
      .text {
        margin-left: 10px;
      }
    }
    .bottom {
      .image {
        width: 100vw;
        margin-top: 2.9rem;
      }
      .tip {
        display: flex;
        margin-top: -2.4rem;
        padding-left: 5px;
        .image {
          width: 13px;
          height: 13px;
          margin-right: 5px;
        }
        .text {
          color: #a2ca43;
          font-size: 0.6rem;
          margin-top: 2.9rem;
          text-align: left;
          line-height: 1.2rem;
        }
      }
    }
  }
  .foot {
    margin-top: 0.4rem;
    background-color: #fff;
    .top {
      display: flex;
      padding: 15px 5vw;
      border-bottom: solid 1px #eee;
      .image {
        width: 14.5px;
        height: 14.5px;
      }
      .text {
        margin-left: 14px;
        font-size: 0.95rem;
        margin-top: 1px;
      }
    }
    .list {
      padding: 18px 20px;
      .item {
        font-size: 0.85rem;
        display: flex;
        line-height: 1.9rem;
        text-align: left;

        .left {
          color: #aaa;
          width: 58vw;
        }
        .right {
          width: 52vw;
        }
      }
    }
  }

  .real {
    background-color: #a2ca43;
  }
  .fake {
    background-color: #f75c2f;
  }
}
</style>