<template>
  <div>
    <Updates :group="group"/>
    <section class="section">
      <h3 class="title">Members</h3>
      <p :key="member.id" v-for="member in group.members">{{ member.name }}</p>
    </section>
  </div>
</template>

<script>
  import Updates from "../../../components/Updates"

  export default {
    name: 'GroupIndexPage',
    props: {
      group: {
        type: Object,
        required: true
      }
    },
    components: {Updates}
  }
</script>

<style>

</style>
