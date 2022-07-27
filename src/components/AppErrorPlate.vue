<template>
  <div class="app-error-plate">{{ errorMessage }}</div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.app-error-plate {
  background: #CF6767;
  border-radius: 12px;
  align-items: flex-start;
  padding: 16px;
  color: #F7FFF1;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;

  &:not(:first-child) {
    margin-top: 16px;
  }
}
</style>
