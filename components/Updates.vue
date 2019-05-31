<template>
  <section class="section updates">
    <h3 v-if="group" class="title">Group Activity Feed</h3>
    <h3 v-else class="title">Overall Activity Feed</h3>
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
</template>

<script>
  export default {
    name: "Updates",
    props: ['group']
  }
</script>

<style>

</style>
