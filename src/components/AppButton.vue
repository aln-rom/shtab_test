<template>
  <button
      :type="type"
      class="app-button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style lang="scss" scoped>
.app-button {
  border: none;
  cursor: pointer;
  width: 267px;
  left: 0;
  border-radius: 12px;
  height: 60px;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  background: #C9EB7F;

    &:hover,
    :focus {
      background: #A0D17A;
    }

    &:active {
      background: #87A96C;
    }
}
</style>
