<template>
  <section>
    <TopAppBar title="Calendar" :has-back="true" parent="/dashboard"/>
    <div class="calendar">
      <!--dates functionality-->
      <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FLondon&amp;src=cjBzNzk1dDB1MGI3Y25taGtsb21iNnBqdGxwMHMzdm9AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23D81B60&amp;showTitle=0&amp;mode=WEEK&amp;showNav=1&amp;showTabs=1" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
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
  .calendar {
    height: 20em;
  }
</style>

