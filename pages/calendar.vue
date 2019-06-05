<template>
  <section>
    <TopAppBar title="Calendar" :has-back="true" parent="/dashboard" style="color: white"/>
    <!--dates functionality-->
    <iframe class="calendar" src="https://calendar.google.com/calendar/embed?height=1000&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FLondon&amp;src=ZW4udWsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23009688&amp;mode=MONTH" width="800" height="1000" frameborder="0" scrolling="no"></iframe>
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
    border-width: 0;
    height: 90%;
    width: 100%;
  }
</style>

