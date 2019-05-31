<template>
  <div>
    <section class="section">
      <h3 class="title">Invite to group</h3>
    </section>

    <section v-if="code" class="section">
      <h4 class="title is-4">Send this link to your friends:</h4>
      <p>https://dev.timecheck.app/invite/{{ code }}</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: "GroupInvitePage",
    props: ['group'],
    data() {
      return {
        code: null
      }
    },
    async mounted() {
      const data = await this.$axios.$get(`/group/${this.group.id}/generate_invite`)
      console.info(data)
      this.code = data.id
    }
  }
</script>

<style>

</style>
