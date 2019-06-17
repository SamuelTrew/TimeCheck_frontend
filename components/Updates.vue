<template>
  <section class="section updates">
    <template v-if="group">
      <h3 class="title" v-if="group">Group Activity Feed</h3>

      <no-ssr>
        <div class="masonry-container" item-selector=".item" transition-duration="0s" v-masonry>
          <div :key="item.id" class="item activity-item" v-for="item in activity" v-masonry-tile>

            <!-- POLL -->
            <div class="card" v-if="item.type === 'poll'">
              <nuxt-link :to="`/group/${item.group}/polls/${item.id}`">
                <div class="card-header">
                  <b-icon class="group-feature-icon" icon="poll" size="is-medium" type="is-info" :style="{paddingTop: '15px', paddingLeft: '15px'}"></b-icon>
                  <p class="card-header-title">
                    {{item.data.question}}
                  </p>
                </div>
                <div class="card-content">
                  <div class="poll-option box" v-for="option in item.data.options">
                    <div :style="calcStyle(item.data, option)" class="poll-bar"></div>
                    <p class="poll-option-name">{{ option.text }}</p>
                  </div>
                </div>
              </nuxt-link>
            </div>

            <!-- NOTES -->
            <div class="card" v-else-if="item.type === 'note'">
              <nuxt-link :to="`/group/${item.group}/notes`">
                <div class="card-header">
                  <b-icon class="group-feature-icon" icon="file-document" size="is-medium" type="is-danger" :style="{paddingTop: '15px', paddingLeft: '15px'}"></b-icon>
                  <p class="card-header-title">
                    {{item.data.title}}
                  </p>
                  <p>
                    {{'@' + item.creator.name}}
                  </p>
                </div>
                <div class="card-content">
                  <div class="content">
                    {{item.data.text}}
                  </div>
                </div>
              </nuxt-link>
            </div>

            <!-- CALENDAR -->
            <div class="card" v-else-if="item.type === 'calendar'">
              <nuxt-link :to="`/group/${item.group}/calendar`">
                <div class="card-header">
                  <b-icon class="group-feature-icon" icon="file-document" size="is-medium" type="is-warning" :style="{paddingTop: '15px', paddingLeft: '15px'}"></b-icon>
                  <p class="card-header-title">

                  </p>

                </div>
                <div class="card-content">
                  <div class="content">

                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </no-ssr>
    </template>

    <template v-else>
      <h3 class="title">Overall Activity Feed</h3>
      <no-ssr>
        <div class="masonry-container" item-selector=".item" transition-duration="0s" v-masonry>
          <div :key="item.id" class="item activity-item" v-for="item in allActivity" v-masonry-tile>

            <!-- POLL -->
            <div class="card" v-if="item.type === 'poll'">
              <nuxt-link :to="`/group/${item.group}/polls/${item.id}`">
                <div class="card-header">
                  <b-icon class="group-feature-icon" icon="poll" size="is-medium" type="is-info" :style="{paddingTop: '15px', paddingLeft: '15px'}"></b-icon>
                  <p class="card-header-title">
                    {{item.data.question}}
                  </p>
                </div>
                <div class="card-content">
                  <div class="poll-option box" v-for="option in item.data.options">
                    <div :style="calcStyle(item.data, option)" class="poll-bar"></div>
                    <p class="poll-option-name">{{ option.text }}</p>
                  </div>
                </div>
              </nuxt-link>
            </div>

            <!-- NOTES -->
            <div class="card" v-else-if="item.type === 'note'">
              <nuxt-link :to="`/group/${item.group}/notes`">
                <div class="card-header">
                  <b-icon class="group-feature-icon" icon="file-document" size="is-medium" type="is-danger" :style="{paddingTop: '15px', paddingLeft: '15px'}"></b-icon>
                  <p class="card-header-title">
                    {{item.data.title}}
                  </p>
                  <p>
                    {{'@' + item.creator.name}}
                  </p>
                </div>
                <div class="card-content">
                  <div class="content">
                    {{item.data.text}}
                  </div>
                </div>
              </nuxt-link>
            </div>

            <!-- CALENDAR -->
            <div class="card" v-else-if="item.type === 'calendar'">
              <nuxt-link :to="`/group/${item.group}/calendar`">
                <div class="card-header">
                  <b-icon class="group-feature-icon" icon="file-document" size="is-medium" type="is-warning" :style="{paddingTop: '15px', paddingLeft: '15px'}"></b-icon>
                  <p class="card-header-title">

                  </p>

                </div>
                <div class="card-content">
                  <div class="content">

                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </no-ssr>
    </template>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  import NoSSR from 'vue-no-ssr'

  export default {
    name: 'Updates',
    props: {
      group: {
        type: Object
      }
    },
    components: {
      'no-ssr': NoSSR
    },
    computed: {
      ...mapGetters({
        activity: 'activity/list',
        allActivity: 'activity/all'
      })
    },
    data() {
      return {
        interval: null
      }
    },
    mounted() {
      if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry()
      }
      if (!this.group) {
        this.interval = setInterval(() => {
          this.$store.dispatch('activity/fetchAllActivity', this.groupId)
        }, 2000)
        this.$store.dispatch('activity/fetchAllActivity')
      }
    },
    beforeDestroy() {
      if (this.interval) clearInterval(this.interval)
    },
    methods: {
      calcStyle(poll, option) {
        let total = 0;
        poll.options.forEach(opt => {
          total += opt.votes
        });
        let percentage = option.votes / total * 100;
        return {width: `${percentage}%`}
      },

      totalVotes(poll) {
        let total = 0;
        if (!poll.options) return;
        poll.options.forEach(opt => {
          total += opt.votes
        });
        return total
      },
    }
  }
</script>

<style>
  .updates .card:hover {
    background-color: whitesmoke;
  }

  .card-header,
  .card-content {
    color: initial;
  }

  .activity-item {
    width: 100%;
    padding: 10px;
  }

  @media screen and (min-width: 900px) {
    .activity-item {
      width: 50%;
    }
  }

  @media screen and (min-width: 1600px) {
    .activity-item {
      width: 33.33333333%;
    }
  }
</style>
