<template>
  <section>
    <TopAppBar title="Documents" :has-back="true" parent="/dashboard"/>
  </section>
</template>


<script>
  import TopAppBar from '../components/TopAppBar';

  export default {
    components: {
      TopAppBar,
    }

  }
</script>
