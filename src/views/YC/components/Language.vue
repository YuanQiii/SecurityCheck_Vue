<template>
  <div class="language">
    <div
      class="item"
      :class="languageIndex == index || languageIndex > 0 ? 'active' : ''"
      v-for="(item, index) in list"
      :key="index"
      @click="change(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Language",
  data() {
    return {
      defaultList: ["中文", "English", "Tiếng Việt", "ျမန္မာ ဘာသာ"],
    };
  },
  computed: {
    ...mapState("yc", ["languageIndex"]),
    list() {
      if (this.languageIndex) {
        return [this.defaultList[this.languageIndex]];
      } else {
        return this.defaultList;
      }
    },
  },
  methods: {
    ...mapMutations("yc", ["UPDATE_LANGUAGE_INDEX"]),
    change(index) {
      this.UPDATE_LANGUAGE_INDEX(index);
      this.$i18n.locale = "en";
    },
  },
};
</script>

<style lang="less">
.language {
  text-align: center;
  width: 90px;
  background-color: #ccc;
  font-size: 0.9rem;
  .item {
    line-height: 20px;
  }
  .active {
    background-color: yellow;
  }
}
</style>