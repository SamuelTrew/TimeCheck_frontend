<template>
  <section class="section updates">
    <template v-if="group">
      <h3 class="title" v-if="group">Group Activity Feed</h3>

      <no-ssr>
        <div v-masonry transition-duration="0s" item-selector=".item" class="masonry-container">
          <div v-masonry-tile class="item activity-item" :key="item.id" v-for="item in activity">

            <!-- POLL -->
            <div class="card" v-if="item.type === 'poll'">
              <nuxt-link :to="`/group/${item.group}/polls/${item.id}`">
                <div class="card-header" :style="{backgroundColor: '#E91E63'}">
                  <p class="card-header-title">
                    {{item.data.question}}
                  </p>
                </div>
                <div class="card-content">
                  <div v-for="option in item.data.options" class="poll-option box">
                    <div class="poll-bar" :style="calcStyle(item.data, option)"></div>
                    <p class="poll-option-name">{{ option.text }}</p>
                  </div>
                </div>
              </nuxt-link>
            </div>

            <!-- NOTES -->
            <div class="card" v-else-if="item.type === 'note'">
              <nuxt-link :to="`/group/${item.group}/notes`">
                <div class="card-header" :style="{backgroundColor: '#009688'}">
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
                <div class="card-header" :style="{backgroundColor: '#3F51B5'}">
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
        <div v-masonry transition-duration="0s" item-selector=".item" class="masonry-container">
          <div v-masonry-tile class="item activity-item" :key="item.id" v-for="item in allActivity">

            <!-- POLL -->
            <div class="card" v-if="item.type === 'poll'">
              <nuxt-link :to="`/group/${item.group}/polls/${item.id}`">
                <div class="card-header" :style="{backgroundColor: '#E91E63'}">
                  <p class="card-header-title">
                    {{item.data.question}}
                  </p>
                </div>
                <div class="card-content">
                  <div v-for="option in item.data.options" class="poll-option box">
                    <div class="poll-bar" :style="calcStyle(item.data, option)"></div>
                    <p class="poll-option-name">{{ option.text }}</p>
                  </div>
                </div>
              </nuxt-link>
            </div>

            <!-- NOTES -->
            <div class="card" v-else-if="item.type === 'note'">
              <nuxt-link :to="`/group/${item.group}/notes`">
                <div class="card-header" :style="{backgroundColor: '#009688'}">
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
                <div class="card-header" :style="{backgroundColor: '#3F51B5'}">
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
.activity-item {
  width: 100%
}

@media screen and (min-width: 900px) {
  .activity-item {
    width: 50%;
  }
}

@media screen and (min-width: 1600px) {
  .activity-item {
    width: 33.33333333%;
    padding: 10px;
  }
}
</style>
