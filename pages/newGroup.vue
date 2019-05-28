<template>
  <section>

    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div style="float: left;">
          <b-icon icon="arrow-left" type="is-light" size="is-medium"></b-icon>
        </div>
        <div class="container has-text-centered">
          <h1 class="title is-1">
            New Group
          </h1>
        </div>
        <nuxt-link to="/dashboard">
          <div style="float: left;">
            <b-icon href="dashboard" icon="arrow-left" type="is-light" size="is-medium"></b-icon>
          </div>
        </nuxt-link>
        <nuxt-link to="/addGroupMembers">
        <div style="float: left;">
          <b-icon href="addGroupMembers" icon="arrow-right" type="is-light" size="is-medium"></b-icon>
        </div>
        </nuxt-link>
      </div>
    </section>

    <section class="pic">
      <div class="file has-name">
        <label class="file-label">
          <input class="file-input" type="file" name="resume">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a file…
            </span>
          </span>
          <span class="file-name">
            Your Group Photo
          </span>
        </label>
      </div>
    </section>
    <input class="input is-Rounded" type="text" placeholder="Group Name">

  </section>
</template>


<script>
  export default {
    components: {
      image: ''
    },
    methods: {
      onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
      },
      createImage(file) {
        let image = new Image();
        let reader = new FileReader();
        let vm = this;

        reader.onload = (e) => {
          vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      removeImage: function (e) {
        this.image = '';
      }
    }
  }
</script>


<style>
.name {
  justify-content: center;
  align-items: center;
  float: right;
}

.pic {
  justify-content: center;
  align-items: center;
  float: left;
}
</style>
