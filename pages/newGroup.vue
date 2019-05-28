<template>
  <section>

    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div style="float: left;">
          <b-icon href="dashboard" icon="arrow-left" type="is-light" size="is-medium"></b-icon>
        </div>
        <div class="container has-text-centered">
          <h1 class="title is-1">
            New Group
          </h1>
        </div>
      </div>
    </section>

    <section>
      <div class="pic">
        <div v-if="!image">
          <img src="../assets/camera.svg" alt="temp"/>
        </div>
        <div v-else>
          <img :src="image" alt="Image"/>
        </div>
      </div>

      <div v-if="!image">
        <input type="file" @change="onFileChange">
      </div>
      <div v-else>
        <button @click="removeImage">Remove image</button>
      </div>
    </section>


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
.pic {
}
</style>
