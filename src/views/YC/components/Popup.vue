<!--
 * @Author: YuanQiii
 * @GitHub: https://github.com/YuanQiii
 * @Date: 2022-04-21 22:18:54
 * @FilePath: \SecurityCheck_Vue\src\views\YC\components\Popup.vue
-->
<template>
  <div class="popup">
    <div class="top">
      <div class="circle">
        <img src="../../../images/yc/close.png" alt="" class="close" />
        <div class="count real" v-if="queryCount == 1">正</div>
        <div class="count" v-else>{{ queryCount }}</div>
        <div class="info">{{ info }}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="tip">{{ text }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Popup",
  props: {
    queryCount: {
      type: String,
      default: "1",
    },
  },
  computed: {
    ...mapState("yc", ["languageIndex"]),
    info() {
      if (this.languageIndex == 0) {
        if (this.queryCount == 1) {
          return "当前为第1次查询，为正品的身份码！";
        } else {
          return `该身份码当前为第${this.queryCount}次查询。`;
        }
      }
      if (this.languageIndex == 1) {
        return "The identity code has been inquired for several";
      }
      if (this.languageIndex == 2) {
        return "Mã thân phận này đã được tra tìm rất nhiều lần, ";
      }
      if (this.languageIndex == 3) {
        return "မည်သူမည်ဝါဖြစ်ကြောင်းကုဒ်နံပါတ်ကိုအကြိမ်ကြိမ်";
      }
    },
    text() {
      if (this.languageIndex == 0) {
        return "尊敬的客户您好，您所查询的是广西玉柴机器专卖发展有限公司生产销售的玉柴正品配件，是正牌产品的身份码，欢迎再次选购。";
      }
      if (this.languageIndex == 1) {
        return "Dear customer, what you are inquiring is Yuchai authentic parts produced by Guangxi Yuchai Machinery Group Co., Ltd., it is the identity code of authentic products. Welcome to buy again.";
      }
      if (this.languageIndex == 2) {
        return "Kính chào khách hàng thân mến, sản phẩm bạn tra tìm là phụ tùng chính hãng Yuchai được sản xuất và tiêu thụ bởi Công ty TNHH Phát triển Độc quyền Máy móc Yuchai Quảng Tây, là mã thân phận của hàng chính hãng, hoan nghênh bạn quay lại mua.";
      }
      if (this.languageIndex == 3) {
        return "သင်ရှာဖွေနေသည်မှာ Guangxi Yuchai Machinery Monopoly Development Co. , Ltd. မှထုတ်လုပ်ပြီးရောင်းချသည့်စစ်မှန်သော Yuchai ဆက်စပ်ပစ္စည်းများဖြစ်သည်။ ၎င်းသည်စစ်မှန်သောထုတ်ကုန်၏အမှတ်အသားဖြစ်သည်။ ထပ်မံဝယ်ယူရန်ကြိုဆိုပါသည်။";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.popup {
  position: relative;
  .top {
    display: block;
    width: 296px;
    height: 95px;
    background-color: #a9c859;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding-top: 10px;
    .close {
      position: absolute;
      right: 1rem;
      top: 0.7rem;
      width: 1rem;
    }
    .circle {
      width: 4rem;
      height: 4rem;
      text-align: center;
      line-height: 1.6rem;
      color: #fff;
      border: 0.25rem solid #fff;
      border-radius: 4rem;
      margin: 0 auto;
    }
    .count {
      width: 50px;
      color: #fff;
      text-align: center;
      position: absolute;
      left: 41.5%;
      top: 33px;
      font-size: 45px;
    }
    .real {
      font-size: 2rem;
      margin-left: 1px;
    }
    .info {
      width: 100%;
      position: absolute;
      left: 0;
      top: 85px;
      text-align: center;
      color: #fff;
      font-size: 13.5px;
    }
  }
  .bottom {
    width: 261px;
    padding-left: 15px;
    padding-right: 20px;
    padding-top: 15px;
    padding-bottom: 10px;
    background-color: #fff;
    text-align: left;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 0.85rem;
    line-height: 1.8rem;
  }
}
</style>