<template>
  <section>
    <TopAppBar title="Polls" :has-back="true" parent="/dashboard"/>
    <section>
      <!--polls functionality-->
      <Poll />
    </section>
    <section>

    </section>
  </section>
</template>

<script>
  import TopAppBar from "../components/TopAppBar";
  import Poll from "../components/poll";

  export default {
    name: "polls",
    components: {
      TopAppBar,
      Poll,
    },
  }
</script>

<style scoped>

</style>

