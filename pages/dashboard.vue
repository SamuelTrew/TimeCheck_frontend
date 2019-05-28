<template>
  <section>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            {{ user.details.name.split(" ")[0] }}'s Dashboard
          </h1>
        </div>
      </div>
    </section>

    <div class="columns">
      <aside class="column is-narrow">
        <header class="menu-label">
          Features
        </header>
        <ul class="menu-list">
          <li><a>
            <img src="../assets/alarm.svg" alt="Alarms">
          </a></li>
          <li><a>
            <img src="../assets/poll.svg" alt="Polls">
          </a></li>
          <li><a>
            <img src="../assets/location.svg" alt="Location">
          </a></li>
          <li><a>
            <img src="../assets/calendar.svg" alt="Calendar">
          </a></li>
          <li><a>
            <img src="../assets/documents.svg" alt="Documents">
          </a></li>
        </ul>
      </aside>
      <div class="column"></div>
      <div class="column is-two-thirds">
        <section class="section updates">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Girls Night Out</p>
                  <p class="subtitle is-6">@reminder</p>
                </div>
              </div>
              <div class="content">
                Meeting at The Slug Club in Fulham - Don't be late!
                <a>@TheSlugAtFulham</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">10:30 PM - 1 Jan 2019</time>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    components: {
    },
    computed: {
      ...mapGetters({
        user: 'auth/user'
      })
    }
  }
</script>

<style>
  .updates{
    background: #f7f8fb;
    background-position: center center;
    background-size: cover;
    background-repeat: repeat;
  }

</style>
