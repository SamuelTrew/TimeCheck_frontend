<template>
  <section class="next">
    <nuxt-link :to="`/group/${group.id}`">
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
  }
</script>

<style>

</style>
