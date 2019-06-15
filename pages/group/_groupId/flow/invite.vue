<template>
  <div>
    <section class="section">
      <h3 class="title">Invite to group</h3>
    </section>
    <section class="section" v-if="code">
      <h4 class="title is-4">Send this link to your friends:</h4>
      <p>https://dev.timecheck.app/invite/{{ code }}</p>
    </section>

    <section>
      <a :href="'https://www.facebook.com/sharer/sharer.php?u=https%3A//dev.timecheck.app/invite/' + code">
        <b-icon icon="facebook-box" size="is-medium"></b-icon>
        Share on Facebook</a>
    </section>
    <br />

    <section>
      <a :href="'https://wa.me/?text=https://dev.timecheck.app/invite/' + code">
        <b-icon icon="whatsapp" size="is-medium"></b-icon>
        Share via WhatsApp
      </a>
    </section>

    <br />
    <br />

    <next :group="group" next="flow/calendar" style="float: right; margin-right: 2rem"/>
  </div>
</template>

<script>
  import Next from "../../../../components/next";

  export default {
    name: 'GroupInvitePage',
    components: {
      Next,
    },
    props: {
      group: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        code: null,
      }
    },
    async mounted() {
      const data = await this.$axios.$get(`/group/${this.group.id}/generate_invite`)
      this.code = data.id
    }
  }
</script>

<style>

</style>
