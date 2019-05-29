<template>
  <div v-if="group">
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            {{ group.name }}
          </h1>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="section">
    <div class="container has-text-centered">
      <h3 class="title">Loading group</h3>
      <p class="content">This should only take a moment</p>
      <Loading />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Loading from '~/components/Loading'

  export default {
    name: 'GroupViewPage',
    components: { Loading },
    data() {
      return {
        group: null
      }
    },
    computed: {
      ...mapGetters({
        ready: 'group/ready',
        getGroupById: 'group/getGroupById'
      })
    },
    watch: {
      ready: {
        handler(ready) {
          if (ready) {
            this.group = this.getGroupById(this.id)
          }
        },
        immediate: true
      }
    },
    asyncData ({ params }) {
      return { id: params.id }
    }
  }
</script>

<style>

</style>
