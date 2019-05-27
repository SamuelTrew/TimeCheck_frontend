<template>
  <div class="rainbow">
    <div width="15%">
    <h1>
       I am the dashboard
       </h1>
      <Taskbar/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import Taskbar from '../components/Taskbar.vue'

  @Component({
    components: {
      Taskbar,
    }
  })
  export default class DashboardPage extends Vue {}
</script>

<style>
  .rainbow {
    background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
    background-position: center center;
    background-size: cover;
    background-repeat: repeat;
    height: 100vh;
  }
</style>
