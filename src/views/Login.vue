<template>
    <div class="login">
      <div class="login__logo">

      </div>
      <app-form
          class="login__form"
          title="Авторизация"
          @submitForm="loginRequest"
      >

        <app-input
            v-model.trim="username"
            label="Логин"
            type="email"
            :required="true"
            :error="authError"
        />

        <app-input
            v-model.trim="password"
            label="Пароль"
            type="password"
            :required="true"
            :error="authError"
        />

        <app-error-plate
            v-if="authError"
            error-message="Неверный логин или пароль"
        />

        <app-button type="submit">Войти</app-button>
      </app-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import AppForm from '@/components/AppForm'
import AppInput from "@/components/AppInput";
import AppButton from "@/components/AppButton";
import AppErrorPlate from "@/components/AppErrorPlate";
export default {
  name: 'Login',
  components: {
    AppForm,
    AppButton,
    AppInput,
    AppErrorPlate
  },
  data () {
    return {
      username: "",
      password: "",

      authError: false,
    };
  },
  methods: {

    ...mapActions({
      loginUser: "auth/login",
    }),


    loginRequest() {
      this.authError = false;

      this.loginUser({ username: this.username, password: this.password })
          .then(() => {
            window.location = "/home";
          })
          .catch(() => {
            this.password = "";
            this.authError = true;
          });
    },
  }
}
</script>


<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  margin-top: 100px;

  &__form {
    width: 440px;

    .app-button:first-of-type {
      margin-top: 14px;
      margin-bottom: 32px;
    }
  }
}
</style>

