<template>
  <div v-if="user.ready">
    <div id="main">
      <Sidebar v-if="user.loggedIn" />
      <nuxt id="page" />
    </div>
  </div>

  <div v-else class="section">
    <div class="container has-text-centered">
        <h3 class="title">Loading TimeCheck</h3>
        <p class="content">This should only take a moment</p>
        <Loading />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Sidebar from '~/components/Sidebar'
  import Loading from '~/components/Loading'

  export default {
    name: 'DefaultLayout',
    components: { Loading, Sidebar },
    computed: {
      ...mapGetters({
        user: 'auth/user'
      })
    },
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
    overflow-y: auto;
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
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1;
  }

  @media only screen and (max-width: 767px) {
    #page {
      position: absolute;
      width: 100vw;
    }
  }

  @media only screen and (min-width: 768px) {
    #page {
      flex: 1 1 auto;
    }
  }


</style>
