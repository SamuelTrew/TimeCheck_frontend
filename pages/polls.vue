<template>
  <section>
    <TopAppBar title="Polls" :has-back="true" parent="/dashboard"/>
    <section>
      <!--polls functionality-->
    </section>
  </section>
</template>

<script>
  import TopAppBar from "../components/TopAppBar";
  export default {
    name: "polls",
    components: {TopAppBar},
  }
</script>

<style scoped>

</style>

