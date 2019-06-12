<template>
  <section class="section updates">
    <h3 v-if="group" class="title">Group Activity Feed</h3>
    <h3 v-else class="title">Overall Activity Feed</h3>
    <div class="columns is-multiline">
      <div class="column is-6">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img class="is-rounded" src="https://spectator.imgix.net/content/uploads/2018/06/l.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550" alt="Placeholder image">
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
              <br />
              <div>
                <a class="button is-success is-rounded">Arrived :)</a>
              </div>
              <br />
              <div>
                <a class="button is-warning is-rounded">On my way!</a>
              </div>
              <br />
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
                  <img class="is-rounded" src="https://spectator.imgix.net/content/uploads/2018/06/l.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550" alt="Placeholder image">
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
                  <img class="is-rounded" src="https://spectator.imgix.net/content/uploads/2018/06/l.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550" alt="Placeholder image">
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
  </section>
</template>

<script>
  export default {
    name: 'Updates',
    props: {
      group: {
        type: Object
      }
    }
  }
</script>

<style>

</style>
