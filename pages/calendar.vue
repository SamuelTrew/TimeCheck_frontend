<template>
  <section>
    <TopAppBar title="Calendar" :has-back="true" parent="/dashboard"/>
    <section>
      <!--dates functionality-->
    </section>
  </section>
</template>

<script>
  import TopAppBar from "../components/TopAppBar";
  export default {
    name: "calendar",
    components: {TopAppBar},
  }
</script>

<style scoped>

</style>

