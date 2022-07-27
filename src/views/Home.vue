<template>
  <div class="home">
    <div class="home__user">Добро пожаловать, {{name}}</div>
    <app-button type="submit" @click="logout">Выйти</app-button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AppButton from "@/components/AppButton";
export default {
  name: 'Home',
  components: {
    AppButton
  },
  data() {
    return {
      name: "",
    }
  },

  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },

  methods: {
    ...mapActions({
      getUser: "auth/getUser",
    }),

    logout() {
      localStorage.clear()
      window.location = "/";
    },
  },

  mounted() {
    this.getUser()
      .then(() => {
        this.name = this.user.first_name + ' ' + this.user.last_name
      })
  }
}
</script>

<style lang="scss" scoped>
.home {
  justify-content: center;
  align-items: center;
  font-weight: 500;
  display: grid;

  &__user {
    font-size: 24px;
    margin: 10px 0;
    display: block;
    text-align: center;
  }
}
</style>
