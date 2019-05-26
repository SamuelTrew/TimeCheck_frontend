<template>
  <div class="rainbow">
    <div width="15%">
    <h1>
       I am the dashboard
       </h1>
      <group_taskbar/>
    </div>
  </div>
</template>

<script>
  import group_taskbar from "../components/group_taskbar.vue";

  export default {
    name: 'dashboard',
    components: {
      group_taskbar,
    }
  }
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
