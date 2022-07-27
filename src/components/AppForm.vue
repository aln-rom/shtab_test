<script>
export default {
  emits: ["submitForm"],

  props: {
    title: {
      type: String,
    },
  },

  methods: {
    submitForm: function (e) {
      this.$emit("submitForm");
      e.preventDefault();
    },
  },
};
</script>

<template>
  <form class="app-form" @submit="submitForm">

    <h2 v-if="title" class="app-form__title">{{ title }}</h2>

    <div class="app-form__wrapper">
      <slot></slot>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.app-form {
  background-color: #FFFFFF;
  border-radius: 16px;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.08);
  padding: 32px 32px;
  position: relative;
  min-width: 500px;

  @media (max-width: 476px) {
    width: 100%;
  }

  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: #414141;
    margin-bottom: 8px;
  }

  &__wrapper {
    margin-top: 32px;
    display: grid;
    padding: 0 32px 0 0;
  }
}
</style>
