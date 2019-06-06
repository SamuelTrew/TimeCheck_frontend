<template>
  <section class="section updates">
    <h3 v-if="group" class="title">Group Activity Feed</h3>
    <h3 v-else class="title">Overall Activity Feed</h3>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img class="is-rounded" src="https://spectator.imgix.net/content/uploads/2018/06/l.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Group 15's Night Out ;)</p>
            <p class="subtitle is-6">@Reminder</p>
          </div>
        </div>
        <div class="content">
          Meeting Today at The Slug Club in Fulham - Don't be late!
          <a href="https://www.the-slug.co.uk/fulham">@TheSlugAtFulham</a>.
          <br>
          <time datetime="2016-1-1">10:30 PM - Wednesday 19th June 2019</time>
        </div>
        <div>
          <div>
          Let your group know your status by checking in below!
          </div>
          <br />
          <a class="button is-success is-rounded">Arrived :)</a>
          <a class="button is-warning is-rounded">On my way!</a>
          <a class="button is-danger is-rounded">Going to be late :(</a>
        </div>
      </div>
    </div>
    <br />
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Group 15's Night Out ;)</p>
            <p class="subtitle is-6">@Calendar</p>
          </div>
        </div>
        <div class="content">
          The Calendar Results are Out:
          <a href="https://www.the-slug.co.uk/fulham">@TheSlugAtFulham</a>.
          <br>
          Availabilty Dates Result:
          <br>
          - Wednesday: 100%
          <br>
          - Thursday: 60%
          <br>
          - Friday: 80%
          <br>
        </div>
      </div>
    </div>
    <br />
    <div class="card">
      <div class="card-content">
        <p class="title">
          And the location has been decided! - The Slug At Fulham :) </p>
        <p class="subtitle">
          <a href="https://www.the-slug.co.uk/fulham">@TheSlugAtFulham</a>.
        </p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
      <span>
        View Location on <a href="https://goo.gl/maps/CCRPJWUrndcKuuth8">Google Maps</a>
      </span>
        </p>
        <p class="card-footer-item">
      <span>
        View Location on <a href="https://www.facebook.com/TheSlugAtFulham/">Facebook</a>
      </span>
        </p>
      </footer>
    </div>
  <br />

    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Group 15's Night Out ;)</p>
            <p class="subtitle is-6">@Poll</p>
          </div>
        </div>
        <div class="content">
          The Calendar Results are Out:
          <a href="https://www.the-slug.co.uk/fulham">@TheSlugAtFulham</a>.
          <br>
          Location Poll Result:
          <br>
          - Slug: 9 votes
          <br>
          - Xoyo: 3 votes
          <br>
          - Roxy: 0 votes
          <br>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Updates",
    props: ['group']
  }
</script>

<style>

</style>
