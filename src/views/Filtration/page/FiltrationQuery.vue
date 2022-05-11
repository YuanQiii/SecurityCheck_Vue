<template>
  <div class="auman-query">
    <div class="header">
      <img
        class="logo"
        alt="Logo"
        src="../../../images/auman/Filtration-LOGO.png"
      />
    </div>
    <div class="container">
      <span class="title-direction" style="line-height: 1.7rem">
        请选择产品类别，产品名称并刮开刮刮墨后输入序列码验证真伪并获取积分.</span
      >
      <span class="product-selection">
        <select name="catagory" class="large-input">
          <option value="">产品类别</option>
          <option
            v-for="(value, index) in catagory"
            :key="index"
            :value="value"
          >
            {{ value }}
          </option>
        </select>
      </span>
      <span class="product-selection">
        <select name="product" class="large-input">
          <option value="">产品名称</option>
          <optgroup
            v-for="(value1, index1) in catagory"
            :key="index1"
            :label="value1"
          >
            <option
              v-for="(value2, index2) in product[index1]"
              :key="index2"
              :data-category="value1"
              :value="value2"
            >
              {{ value2 }}
            </option>
          </optgroup>
        </select>
      </span>
      <div>
        <input
          type="text"
          name="S"
          v-model="value"
          placeholder="输入序列号"
          class="large-input code"
        />
        <input
          type="submit"
          value="确认"
          class="large-input btn"
          @click="query"
        />
      </div>
      <p class="instruction" style="clear: both">备注：序列号码区分大小写</p>
      <div style="color: #d80303; font-size: 18px; margin-top: 1.3rem">
        如何鉴别弗列加品牌滤清器的真伪？
      </div>
      <p class="instruction" style="clear: both; margin-top: 0.7rem">
        第一步：查看防伪标二维码底部序列号是否被激活
      </p>
      <div class="title-block">
        <span class="serial-location">
          <img src="../../../images/auman/val_images_izonseriallocation.jpg" />
        </span>
        <query-resuult :code="codeValue" :result="result" />
      </div>
      <p class="instruction">第二步：检查产品或包装表面防伪标是否完整无损坏</p>
      <div class="title-block" style="padding-bottom: 0.5rem">
        <div style="line-height: 1.2rem; margin-top: 1px">
          请检查防伪标是否完整无损坏或存在任何被二次利用的痕迹。
        </div>

        <div style="padding-top: 10px; line-height: 1.2rem">
          新旧标签均使用该防伪设计，请遵照同样的验证说明来鉴别真伪
          <div style="text-align: center">
            <span
              class="tilt_image"
              style="
                display: inline-block;
                text-align: center;
                margin-bottom: 0;
              "
            >
              <img
                alt="Horizontal Label Design"
                src="../../../images/auman/val_images_2020design.png"
                style="height: auto; width: 250px"
              /><br />
              新
            </span>
            <span
              class="tilt_image"
              style="display: inline-block; text-align: center"
            >
              <img
                alt="Vertical Label Design"
                src="../../../images/auman/val_images_2018design.png"
                style="height: 250px; width: auto"
              /><br />
              旧
            </span>
          </div>
        </div>
      </div>
      <p class="instruction" style="clear: both">
        第三步：倾斜正品滤清的防伪标签，使其处于不同的角度时，您将清晰地观察到分别隐藏于弗列加品牌四周的1，2，3，4个光点。在点光源照射下可以获得最佳观测效果。
      </p>

      <div class="title-block" style="text-align: center">
        <span class="tilt_image">
          <img
            alt="Tilt Animation"
            src="../../../images/auman/val_images_animation61134-30.gif"
            style="height: auto; width: 250px"
          />
        </span>
      </div>

      <div class="block">
        <div class="tilt_block">
          <span class="tilt_image">
            <img
              alt="Tilt Right"
              src="../../../images/auman/val_images_tilt_right.jpg"
          /></span>
          <span class="tilt_text">
            <span class="tilt_direction">向右倾斜</span><br />
            <span class="tilt_dot_count">可见1个光点</span>
          </span>
        </div>
        <div class="tilt_block" style="margin-left: 2.5%">
          <span class="tilt_image">
            <img
              alt="Tilt Back"
              src="../../../images/auman/val_images_tilt_back.jpg"
          /></span>
          <span class="tilt_text">
            <span class="tilt_direction">向后倾斜</span><br />
            <span class="tilt_dot_count">可见2个光点</span>
          </span>
        </div>
      </div>
      <div class="block" style="margin-top: -1.5%">
        <div class="tilt_block">
          <span class="tilt_image">
            <img
              alt="Tilt Left"
              src="../../../images/auman/val_images_tilt_left.jpg"
          /></span>
          <span class="tilt_text">
            <span class="tilt_direction">向左倾斜</span><br />
            <span class="tilt_dot_count">可见3个光点</span>
          </span>
        </div>
        <div class="tilt_block" style="margin-left: 2.5%">
          <span class="tilt_image">
            <img
              alt="Tilt Forward"
              src="../../../images/auman/val_images_tilt_forward.jpg"
          /></span>
          <span class="tilt_text">
            <span class="tilt_direction">向前倾斜</span><br />
            <span class="tilt_dot_count">可见4个光点</span>
          </span>
        </div>
      </div>

      <p class="instruction" style="margin-top: 1.5%">
        第四步：发现或疑似假件，联系我们
      </p>
      <div class="title-block">
        <p>
          康明斯滤清系统中国 <span style="color: #0000ee">400 821 6168</span>
        </p>
        <p>上海市浦东新区川沙新镇物流大道268号</p>
        <p style="font-weight: bold; color: red">长按关注官方微信</p>
        <span class="qr_image" style="height: 50%; width: 50%">
          <img
            style="margin-top: -1rem"
            alt="QR Code"
            src="../../../images/auman/val_images_platform_qr.jpg"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
import QueryResuult from "../components/QueryResuult.vue";
import { filtrationQueryApi } from "@/api/query";
export default {
  components: { QueryResuult },
  name: "FiltrationQuery",
  data() {
    return {
      catagory: [
        "燃油滤清器",
        "油水分离器",
        "机油滤清器",
        "空气滤清器",
        "油气分离器",
      ],
      product: [
        [
          "FF266",
          "FF42058 NN",
          "FF5706",
          "FF5963",
          "FF5969",
          "FF5978",
          "FF5979",
          "FF63013 NN",
          "FF63046 NN",
        ],
        [
          "FS01098",
          "FS19925",
          "FS20161",
          "FS20165",
          "FS20180",
          "FS20181",
          "FS20196",
          "FS20197",
          "FS20198",
          "FS36279",
          "FS53016 NN",
          "FS53040 NN",
          "FS53041 NN",
          "FS53048 NN",
        ],
        [
          "LF14004 NN",
          "LF16016",
          "LF16352",
          "LF16393",
          "LF16394",
          "LF16396",
          "LF16397",
          "LF16400",
          "LF16403",
          "LF16410",
          "LF16411",
          "LF17356",
          "LF17535",
          "LF17559",
          "LF17579",
        ],
        ["AF2772700JX"],
        ["AS0251400MX", "AS0252000MX", "AS0252100MX"],
      ],
      value: this.$route.query.sequenceCode,
      codeValue: "",
      result: null,
      duration: 1000 * 60 * 30,
    };
  },
  methods: {
    query() {
      this.codeValue = this.value;
      if (this.check()) {
        filtrationQueryApi({ sequenceCode: this.value }).then((response) => {
          if (response.data.result == "real") {
            this.result = {
              type: 1,
              count: response.data.count,
            };
          } else {
            this.result = {
              type: 3,
              count: 1,
            };
          }
        });
      } else {
        this.result = {
          type: 2,
          count: 1,
        };
      }
      // this.clearCheck();
    },
    check() {
      let queryTime = localStorage.getItem("queryTime");
      let queryCount = localStorage.getItem("queryCount");

      // 首次查询
      if (queryTime == "undefined" && queryCount == "undefined") {
        this.initCheck();
        return true;
      } else {
        let nowTime = new Date().getTime();
        if (nowTime - queryTime > this.duration) {
          this.initCheck();
          return true;
        } else {
          if (queryCount < 3) {
            localStorage.setItem("queryCount", Number(queryCount) + 1);
            return true;
          } else {
            return false;
          }
        }
      }
    },
    initCheck() {
      localStorage.setItem("queryTime", new Date().getTime());
      localStorage.setItem("queryCount", 1);
    },
    clearCheck() {
      localStorage.setItem("queryTime", undefined);
      localStorage.setItem("queryCount", undefined);
    },
  },
};
</script>

<style lang="less" scoped>
.auman-query {
  background-color: #333;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  font-size: 14px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .header {
    border-bottom: solid 2px #000;
    background: #b61020;
    height: 4.5rem;
    width: 98%;
    margin-left: auto;
    margin-right: auto;

    .logo {
      margin: 0px;
      cursor: pointer;
      border: 0;
      height: 73px;
    }
  }
  .container {
    background-color: #fff;
    margin: 0 auto;
    width: 93%;
    padding: 2.5%;
    padding-top: 10px;
    padding-bottom: 1.3rem;
    .title-direction {
      display: block;
      width: 100%;
      color: #d80303;
      font-size: 150%;
    }
    .product-selection {
      margin-right: 4px;
    }
    .large-input {
      font-size: 14pt;
    }
    .btn {
      height: 1.9rem;
      margin-left: -1px;
    }
    .code {
      width: 8.7rem;
      margin-right: 1px;
      transform: translateY(0.1rem);
    }
    .instruction {
      font-weight: bold;
    }
    .title-block {
      text-align: center;
      width: 91%;
      border: solid 1px gray;
      margin-top: -0.7rem;
      padding-left: 10px;
      padding-top: 10px;
      padding-right: 12px;
      padding-bottom: 1.2%;
      margin-bottom: -7px;
      margin-left: 1%;
      .serial-location {
        margin-right: 10px;
        margin-bottom: 10px;
        img {
          display: block;
          max-width: 180px;
          max-height: 180px;
        }
      }
    }
    .block {
      // background-color: red;

      margin-left: 1%;
      .tilt_block {
        width: 47.5%;
        display: inline-block;
        border: 1px solid gray;
        margin-top: 0.85rem;
        text-align: center;
        padding-bottom: 7px;
        padding-top: 10px;
        .tilt_direction {
          color: #d80303;
          font-size: 150%;
        }
        .tilt_text {
          line-height: 1.3rem;
        }
        img {
          width: 86%;
          margin-left: 4px;
          padding-right: 2px;
        }
      }
    }
  }
}
</style>