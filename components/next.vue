<template>
  <section class="next">
    <nuxt-link :to="`/group/${group.id}`">
      <b-button type="is-info" outlined @click="endTutorial">
        Skip
      </b-button>
    </nuxt-link>

    <nuxt-link :to="`/group/${group.id}/${next}`">
      <b-button type="is-primary">
        Next
      </b-button>
    </nuxt-link>
  </section>
</template>

<script>
  export default {
    name: 'Next',
    props: {
      group: {
        type: Object,
        required: true
      },
      next: {
        type: String,
        required: true,
      }
    },
    methods: {
      async endTutorial() {
        try {
          await this.$store.dispatch('tutorial/setTutorial', false)
        } catch (e) {
          console.error("Tutorial ending error", e);
        }
      }
    }
  }
</script>

<style>

</style>
