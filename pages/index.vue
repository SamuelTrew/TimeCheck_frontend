<template>
  <div>
    <section class="hero hero-image image-meeting is-large">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="title is-0">Cook. Save. Share.</h2>
        </div>
      </div>
    </section>

    <section class="hero is-light screenshot right">
      <svg
        class="wedge top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <polygon
          fill="whitesmoke"
          points="0,100 100,0 100,110 0,110"></polygon>
      </svg>

      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-7 text">
              <h3 class="title is-spaced is-1">Beautiful.</h3>
              <p class="subtitle">Recipea makes your creations look amazing.</p>
              <p class="subtitle">With a clean layout that works on any device, recipe instructions are easy to follow and details clearly presented.</p>
            </div>
            <div class="column is-5 img">
<!--              <img src="~assets/screenshots/view.png">-->
            </div>
          </div>
        </div>
      </div>

      <svg
        class="wedge bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <polygon
          fill="whitesmoke"
          points="0,0 100,100 100,-10 0,-10"></polygon>
      </svg>
    </section>

    <section class="hero hero-image image-notes is-medium features">
      <div class="hero-body">
        <div class="container">
          <nav class="columns has-text-centered">
            <div class="column">
              <p class="heading">
                <b-icon
                  size="is-large"
                  icon="stove"></b-icon>
              </p>
              <p class="title">Cook</p>
              <p class="subtitle">Prepare a delicious recipe</p>
            </div>
            <div class="column">
              <p class="heading">
                <b-icon
                  size="is-large"
                  icon="cloud-upload"></b-icon>
              </p>
              <p class="title">Save</p>
              <p class="subtitle">Store the details securely on Recipea</p>
            </div>
            <div class="column">
              <p class="heading">
                <b-icon
                  size="is-large"
                  icon="earth"></b-icon>
              </p>
              <p class="title">Share</p>
              <p class="subtitle">Let everyone benefit from your creation</p>
            </div>
          </nav>
        </div>
      </div>
    </section>

    <section class="hero is-light screenshot left">
      <svg
        class="wedge top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <polygon
          fill="whitesmoke"
          points="0,0 100,100 100,110 0,110"></polygon>
      </svg>

      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-5 img">
<!--              <img src="~assets/screenshots/cookbook.png">-->
            </div>

            <div class="column is-7 text">
              <h3 class="title is-spaced is-1">Personal.</h3>
              <p class="subtitle">Recipea makes organisation a thing of the past.</p>
              <p class="subtitle">View your content easily with a customisable layout and filter options to find exactly what you're looking for.</p>
            </div>
          </div>
        </div>
      </div>

      <svg
        class="wedge bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <polygon
          fill="whitesmoke"
          points="0,-10 0,100 100,0 100,-10"></polygon>
      </svg>
    </section>

    <section class="hero hero-image image-clocks is-medium features">
      <div class="hero-body">
        <div class="container">
          <div class="columns has-text-centered">
            <div class="column is-4">
              <p class="heading">
                <b-icon
                  size="is-large"
                  icon="account"></b-icon>
              </p>
              <p class="title">Private</p>
              <p class="subtitle">By default, your recipes are hidden and can only be viewed by you. We won't reveal the secret ingredients!</p>
            </div>
            <div class="column is-4">
              <p class="heading">
                <b-icon
                  size="is-large"
                  icon="account-multiple"></b-icon>
              </p>
              <p class="title">Public</p>
              <p class="subtitle">To let everyone enjoy your recipe, publish it to the world. Anyone will be able to find and create your masterpiece!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-light screenshot right">
      <svg
        class="wedge top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <polygon
          fill="whitesmoke"
          points="0,100 100,0 100,110 0,110"></polygon>
      </svg>

      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-7 text">
              <h3 class="title is-spaced is-1">Universal.</h3>
              <p class="subtitle">Recipea works across all of your devices.</p>
              <p class="subtitle">Your recipes are stored securely on our servers and accessible from anything with an internet connection..</p>
            </div>
            <div class="column is-5 img">
<!--              <img src="~assets/screenshots/devices.png">-->
            </div>
          </div>
        </div>
      </div>

      <svg
        class="wedge bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <polygon
          fill="whitesmoke"
          points="0,0 100,100 100,-10 0,-10"></polygon>
      </svg>
    </section>

    <section class="hero hero-image image-calendar is-large">
      <div class="hero-body">
        <div class="contianer has-text-centered">
          <template v-if="user.loggedIn">
            <h1 class="title is-1">Get started today</h1>
            <nuxt-link
              to="/cookbook"
              class="button is-primary is-large">
              Go to your cookbook
            </nuxt-link>
          </template>
          <template v-else>
            <h1 class="title is-1">Get started for free</h1>
            <button
              class="button is-primary is-large"
              @click="login">Create an account</button>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'IndexPage',
    computed: {
      ...mapGetters({
        user: 'auth/user'
      })
    },
    methods: {
      ...mapActions({
        login: 'auth/login'
      })
    }
  }
</script>

<style lang="scss">
  .screenshot {
    position: relative;
    z-index: 1;

    .text {
      text-align: center;
    }
  }

  .features {
    .columns {
      justify-content: space-evenly;
    }
  }

  @media screen and (max-width: 768px) {
    .features {
      .column:not(:last-child) {
        margin-bottom: 2rem;
      }
    }

    .screenshot {
      .columns {
        display: flex;
        flex-direction: column;
      }

      .img {
        order: 1;
      }
    }
  }

  @media screen and (min-width: 769px) {
    .screenshot {
      .hero-body {
        overflow: hidden;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      &.left {
        .text {
          text-align: left;
        }
        .img {
          direction: rtl;
        }
      }
      &.right {
        .text {
          text-align: right;
        }
        .img {
          direction: ltr;
        }
      }
      img {
        margin: -6rem;
        height: 668px;
        width: 1024px;
        max-width: none;
      }
    }
  }

  // Required to stop the background being jittery on mobile
  @media screen and (pointer: coarse) and (hover: none),
  screen and (-moz-touch-enabled) {
    .hero-image {
      background-attachment: unset;
    }
  }
</style>


<!--<template>-->
<!--  <div class="home">-->
<!--    &lt;!&ndash; add vue particle code if you have time by stripping the original stuff &ndash;&gt;-->
<!--    <nuxt-link class="button is-large is-light" to="/dashboard" v-if="user.loggedIn">Dashboard</nuxt-link>-->
<!--    <button @click="login" class="button is-large is-light" v-else>Login</button>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  import {mapActions, mapGetters} from 'vuex'-->

<!--  export default {-->
<!--    name: 'IndexPage',-->
<!--    computed: {-->
<!--      ...mapGetters({-->
<!--        user: 'auth/user'-->
<!--      })-->
<!--    },-->
<!--    methods: {-->
<!--      ...mapActions({-->
<!--        login: 'auth/login',-->
<!--      })-->
<!--    },-->
<!--    // TODO: Automatically redirect to dashboard if logged in (index will then be a splash page)-->
<!--    // beforeRouteEnter(to, from, next) {-->
<!--    //   console.info('Hello!')-->
<!--    //   next(vm => {-->
<!--    //     if (vm.user.ready && vm.user.loggedIn) {-->
<!--    //       vm.$router.push('/dashboard')-->
<!--    //     }-->
<!--    //   })-->
<!--    // }-->
<!--  }-->
<!--</script>-->

<!--<style>-->
<!--  .home {-->
<!--    background-image: -webkit-linear-gradient(309deg, #ee4266, #540d6e);-->
<!--    background-image: -o-linear-gradient(309deg, #ee4266, #540d6e);-->
<!--    background-image: linear-gradient(141deg, #ee4266, #540d6e);-->
<!--    background-position: center center;-->
<!--    background-size: cover;-->
<!--    background-repeat: repeat;-->
<!--    height: 100vh;-->

<!--    display: flex;-->
<!--    align-items: center;-->
<!--    justify-content: center;-->
<!--  }-->
<!--</style>-->
