<template>
  <div>
    <Updates :group="group" />
    <section class="section">
      <h3 class="title">Members</h3>
      <p v-for="member in group.members" :key="member.id">{{ member.name }}</p>
    </section>
  </div>
</template>

<script>
  import Updates from "../../../components/Updates"

  export default {
    name: "GroupIndexPage",
    props: ['group'],
    components: { Updates }
  }
</script>

<style>

</style>
