<template>
  <section class="next">
    <nuxt-link v-if="!end" class="button is-primary" :to="`/group/${group.id}/${next}`">
      Next
    </nuxt-link>

    <nuxt-link class="button is-info is-outlined" :to="`/group/${group.id}`" @click.native="setTutorial(false)">
      End Tutorial
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
      },
      end: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      async setTutorial(tutorial) {
        try {
          await this.$store.dispatch('tutorial/setTutorial', tutorial)
        } catch (e) {
          console.error("Tutorial setting error", e);
        }
      }
    }
  }
</script>

<style>
  @media only screen and (max-width: 768px) {
    .next {
      margin-top: 1rem;
    }
  }
</style>
