<template>
  <section class="section">
    <h3 class="title">Invite to group</h3>
    <div  v-if="code">
      <h4 class="title is-4">Send this link to your friends:</h4>
      <p>https://dev.timecheck.app/invite/{{ code }}</p>
      <br/>
      <section>
        <a :href="'https://www.facebook.com/sharer/sharer.php?u=https%3A//dev.timecheck.app/invite/' + code">
          <b-icon icon="facebook-box" size="is-medium"></b-icon>
          Share on Facebook</a>
      </section>
      <br />
      <section>
        <a :href="'https://wa.me/?text=Come join my group on Meetuppi! https://dev.timecheck.app/invite/' + code">
          <b-icon icon="whatsapp" size="is-medium"></b-icon>
          Share via WhatsApp
        </a>
      </section>
    </div>

    <br />
    <br />
    <div v-if="tutorial">
      <next :group="group" next="calendar" :end="false" style="float: left; margin-right: 2rem"/>
    </div>
  </section>
</template>

<script>
  import Next from '../../../components/next';
  import {mapGetters} from 'vuex';

  export default {
    name: 'GroupInvitePage',
    props: {
      group: {
        type: Object,
        required: true
      }
    },
    components: {
      Next
    },
    computed: {
      ...mapGetters({
        tutorial: 'tutorial/tutorial'
      })
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
