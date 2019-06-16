<template>
  <section class="next">
    <nuxt-link :to="`/group/${group.id}`" @click.native="setTutorial(false)">
      <b-button type="is-info" outlined>
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
      async setTutorial(tutorial) {
        try {
          console.log('WHAT EVEN IS ' + tutorial)
          await this.$store.dispatch('tutorial/setTutorial', tutorial)
        } catch (e) {
          console.error("Tutorial setting error", e);
        }
      }
    }
  }
</script>

<style>

</style>
