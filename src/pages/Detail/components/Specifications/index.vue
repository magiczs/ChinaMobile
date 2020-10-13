<template>
  <div>
    <p v-for="item in wareNormalAttr" :key="item.normalAttrDefinitionName">
      <span>{{ item.normalAttrDefinitionName }}：</span>
      <span>{{ item.normalAttrValue }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Specifications",
  props: {
    wareNormalAttr: Array,
  },
};
</script>

<style lang="less" scoped>
p {
  font-size: 15px;
  line-height: 2.5;
  color: #030303;
}
</style>
