<template>
  <div id="main">
    <Sidebar />
    <nuxt id="page" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { mapActions, mapGetters } from 'vuex'
  import Sidebar from "~/components/Sidebar.vue"

  @Component({
    components: {Sidebar},
    computed: {
      ...mapGetters({
        auth: 'auth/user'
      })
    },
    methods: {
      ...mapActions({
        login: 'auth/login',
        logout: 'auth/logout'
      })
    }
  })
  export default class DefaultLayout extends Vue {
    mounted() {
      this.$store.dispatch('auth/init')
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

  #main {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
  }

  #page {
    flex: 1 1 auto;
  }
</style>
