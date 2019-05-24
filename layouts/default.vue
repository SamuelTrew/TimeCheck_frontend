<template>
  <div>
    <p class="title is-4">User: {{ auth }}</p>
    <div class="debug" v-if="auth.ready">
      <button class="button is-primary is-large" @click="logout" v-if="auth.loggedIn">Log out, {{ auth.details.name }}</button>
      <button class="button is-primary is-large" @click="login" v-else>Log in</button>
    </div>
    <nuxt />
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'DefaultLayout',
    computed: {
      ...mapGetters({
        auth: 'auth/user'
      })
    },
    mounted() {
      this.$store.dispatch('auth/init')
    },
    methods: {
      ...mapActions({
        login: 'auth/login',
        logout: 'auth/logout'
      })
    }
  }
</script>

<style lang="scss">
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .debug {
    button {
      margin: 1rem;
    }
  }
</style>
