<template>
  <div class="particles">
    <!-- add vue particle code if you have time by stripping the original stuff -->
    <button>
    <nuxt-link to="dashboard">dashboard page</nuxt-link>
    </button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'


  // Don't think this stuff is necessary - creating a page (.vue file in the page directory) with the
  // relevant name (i.e. dashboard.vue) will do the routing automatically
  const Dashboard = { template: '<p>Dashboard</p>'};
  const Splashscreen = { template: '<p>Splashscreen</p>'};

  const routes = {
    '/': Splashscreen,
    '/dashboard': Dashboard,
  };


  @Component
  export default class IndexPage extends Vue {}
</script>

<style>
  .particles {
    background-image: -webkit-linear-gradient(309deg,#ee4266,#540d6e);
    background-image: -o-linear-gradient(309deg,#ee4266,#540d6e);
    background-image: linear-gradient(141deg,#ee4266,#540d6e);
    background-position: center center;
    background-size: cover;
    background-repeat: repeat;
    height: 100vh;
  }
</style>
