<template>
  <div class="home">
    <!-- add vue particle code if you have time by stripping the original stuff -->
    <nuxt-link v-if="user.loggedIn" to="/dashboard" class="button is-large is-light">Dashboard</nuxt-link>
    <button v-else @click="login" class="button is-large is-light">Login</button>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'IndexPage',
    computed: {
      ...mapGetters({
        user: 'auth/user'
      })
    },
    methods: {
      ...mapActions({
        login: 'auth/login',
      })
    },
    // TODO: Automatically redirect to dashboard if logged in (index will then be a splash page)
    // beforeRouteEnter(to, from, next) {
    //   console.info('Hello!')
    //   next(vm => {
    //     if (vm.user.ready && vm.user.loggedIn) {
    //       vm.$router.push('/dashboard')
    //     }
    //   })
    // }
  }
</script>

<style>
  .home {
    background-image: -webkit-linear-gradient(309deg,#ee4266,#540d6e);
    background-image: -o-linear-gradient(309deg,#ee4266,#540d6e);
    background-image: linear-gradient(141deg,#ee4266,#540d6e);
    background-position: center center;
    background-size: cover;
    background-repeat: repeat;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
