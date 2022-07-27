<script>
export default {
  emits: ["update:modelValue"],

  props: {
    error: {
      type: Boolean,
      default: false,
    },

    errorMessage: {
      type: String,
    },

    type: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      default: "",
    },

    placeholder: {
      type: String,
    },

    modelValue: {
      type: String,
    },

    required: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      showPass: false,
    };
  },
};
</script>

<template>
  <div class="app-input">
    <label v-if="label" class="app-input__label">
      {{ label }}
    </label>
    <input
        :class="[{ 'app-input__input_error': error }, 'app-input__input']"
        :type="showPass ? 'text' : type"
        :placeholder="placeholder"
        :value="modelValue"
        :required="required"
        @input="$emit('update:modelValue', $event.target.value)"
    />
    <span
        v-if="type === 'password'"
        :class="[
        showPass
          ? 'app-input__password-control_close'
          : 'app-input__password-control_open',
        'app-input__password-control',
      ]"
        @click="showPass = !showPass"
    >
    </span>
    <div v-if="error" class="app-input__error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-input {
  align-items: flex-start;
  position: relative;
  margin: 8px 0;
  font-size: 16px;
  font-weight: normal;

  ::placeholder {
    color: #EAEAEA;
    font-weight: normal;
  }

  &__label {
    display: block;
    color: #414141;
    margin-bottom: 4px;
    float: left;
  }

  &__input {
    padding: 14px 12px;
    width: 100%;
    height: 40px;
    color: #414141;
    background: #F4F4F4;
    border-radius: 12px;
    border: none;
    font-size: 16px;
    line-height: 140%;

    &:hover {
      background: #EAEAEA;
    }

    &:active,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px #87A96C;
    }

    &_error {
      box-shadow: 0 0 0 1px #CF6767 !important;
    }
  }

  &__password-control {
    right: 12px;
    bottom: 19px;
    cursor: pointer;
    position: absolute;
    width: 24px;
    height: 24px;

    &_open {
      background: url("../assets/eye_open.svg");
    }

    &_close {
      background: url("../assets/eye_closed.svg");
    }
  }

  &__error {
    color: #87A96C;
  }
}
</style>
