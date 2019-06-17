<template>
  <section class="section updates">
    <template v-if="group">
      <h3 class="title" v-if="group">Group Activity Feed</h3>

      <no-ssr>
        <div v-masonry transition-duration="0s" item-selector=".item" class="masonry-container">
          <div v-masonry-tile class="item activity-item" :key="item.id" v-for="item in activity">

            <!-- POLL -->
            <div class="card" v-if="item.type === 'poll'">
              <nuxt-link :to="`${group.id}/polls/${item.id}`">
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
              <nuxt-link :to="`${group.id}/notes`">
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
              <nuxt-link :to="`${group.id}/calendar`">
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

    <template v-else>
      <h3 class="title">Overall Activity Feed</h3>
      <div class="columns is-multiline">
        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img alt="Placeholder image"
                         class="is-rounded"
                         src="https://spectator.imgix.net/content/uploads/2018/06/l.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Group 15's End of Year Night Out ;)</p>
                  <p class="subtitle is-6">@Reminder</p>
                </div>
              </div>
              <div class="content">
                Meeting <b>Today</b> at <b>The Slug Club</b> in Fulham - Don't be late!
                <br>
                <b>10:30 PM - Wednesday 19th June 2019</b>
              </div>
              <div>
                <div>
                  Let your group know your status by checking in below!
                </div>
                <br/>
                <div>
                  <a class="button is-success is-rounded">Arrived :)</a>
                </div>
                <br/>
                <div>
                  <a class="button is-warning is-rounded">On my way!</a>
                </div>
                <br/>
                <div>
                  <a class="button is-danger is-rounded">Gonna be late :(</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img alt="Placeholder image"
                         class="is-rounded"
                         src="https://spectator.imgix.net/content/uploads/2018/06/l.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Group 15's End of Year Night Out ;)</p>
                  <p class="subtitle is-6">@Calendar</p>
                </div>
              </div>
              <div class="content">
                The <b>Calendar Results</b> are Out:
                <br>
                When are you free next week?
                <br>
                - <b>Wednesday</b>: 100%
                <br>
                - Friday: 80%
                <br>
                - Thursday: 60%
                <br>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              <p class="title">
                And the location has been decided! - The Slug At Fulham :) </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
        <span>
          View Location on <a href="https://goo.gl/maps/CCRPJWUrndcKuuth8" target="_blank">Google Maps</a>
        </span>
              </p>
              <p class="card-footer-item">
        <span>
          View Location on <a href="https://www.facebook.com/TheSlugAtFulham/" target="_blank">Facebook</a>
        </span>
              </p>
            </footer>
          </div>
        </div>

        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img alt="Placeholder image"
                         class="is-rounded"
                         src="https://spectator.imgix.net/content/uploads/2018/06/l.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Group 15's End of Year Night Out ;)</p>
                  <p class="subtitle is-6">@Poll</p>
                </div>
              </div>
              <div class="content">
                The <b>Poll Results</b> are Out:
                <br>
                Which club should we go to?
                <br>
                - <b>Slug</b>: 9 votes
                <br>
                - Xoyo: 3 votes
                <br>
                - Roxy: 1 votes
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        activity: 'activity/list'
      })
    },
    mounted () {
      if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry()
      }
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
