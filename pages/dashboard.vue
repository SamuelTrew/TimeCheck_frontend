<template>

  <section class = "page">
  <body>
  <section class="hero is-warning is-bold">    <!-- Hero head: will stick at the top -->
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand ">
        <a class="navbar-item" href="https://timecheck.app">
          <img src="../assets/tc_logo.png" alt="Logo" width="150" height="100">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>
          <a class="navbar-item">
            Dashboard
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Radhika's Dashboard
        </h1>
      </div>
    </div>
  </section>
</body>
    <aside class="menu icons">
      <header class="menu-label">
        My Groups
      </header>
      <ul class="menu-list">
        <li><a>
          <div class="media">
            <figure class="image is-64x64">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
        </a></li>
        <li><a>
          <div class="media">
            <figure class="image is-64x64">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
        </a></li>
      </ul>
    </aside>

    <body>
    <aside class="menu">
      <header class="menu-label">
        Features
      </header>
      <ul class="menu-list">
        <li><a>
          Hello
        </a></li>
        <li><a>
          Hello
        </a></li>
        <li><a>
          Hello
        </a></li>
        <li><a>
          Hello
        </a></li>
        <li><a>
          Hello
        </a></li>
      </ul>
    </aside>
    </body>




  <body>
    <section class="section updates">
      <div class="container">
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
      </div>
    </section>
  </body>
  </section>
</template>

<style>

  .headformat {
    float: right;
  }

  .menu {
    float: left;
  }

  .icons {
  }

  .updates{
    float: right;
    background: #f7f8fb;
    background-position: center center;
    background-size: cover;
    background-repeat: repeat;
    height: 100vh;
  }
  .title{
    font-family: sans-serif;
    font-size: 350%;
  }

</style>
