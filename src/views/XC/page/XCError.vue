<!--
 * @Author: YuanQiii
 * @GitHub: https://github.com/YuanQiii
 * @Date: 2022-05-15 23:15:33
 * @FilePath: \SecurityCheck_Vue\src\views\XC\page\XCError.vue
-->
<template>
  <div class="xc-error">
    <img class="image" src="../../../images/xc/warning.png" alt="" />
    <div class="text">
      你所查询的防伪码不存在，防伪码应是不含空格的纯数字编码，请再次核实且谨防假冒！
    </div>
    <div class="footer">
      <div>超级码</div>
      <div>产品的超级身份证</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XCError",
};
</script>

<style lang="less" scoped>
.xc-error {
  .image {
    width: 78px;
    margin-top: 8.6rem;
  }
  .text {
    margin: 0 auto;
    width: 86vw;
    font-size: 0.85rem;
    color: #808080;
    margin-top: 1.7rem;
    line-height: 1.1rem;
  }
  .footer {
    margin-top: 30.3rem;
    text-align: center;
    font-size: 0.3rem;
    color: #aaaaaa;
    bottom: 1.2rem;
    width: 100%;
    letter-spacing: 0.5rem;
    line-height: 1.1rem;
  }
}
</style>