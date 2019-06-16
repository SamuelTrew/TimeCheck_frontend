<template>
  <div class="home">
    <h3 class="title">Welcome</h3>
    <nuxt-link class="button is-large is-light" to="/dashboard" v-if="user.loggedIn">Dashboard</nuxt-link>
    <button @click="login" class="button is-large is-light" v-else>Login</button>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

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
    background-image: -webkit-linear-gradient(309deg, #ee4266, #540d6e);
    background-image: -o-linear-gradient(309deg, #ee4266, #540d6e);
    background-image: linear-gradient(141deg, #ee4266, #540d6e);
    background-position: center center;
    background-size: cover;
    background-repeat: repeat;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
