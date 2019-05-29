<template>
  <div>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            New Group
          </h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2 form">
            <b-field label="Name">
              <b-input v-model="name"></b-input>
            </b-field>

            <b-field label="Profile image">
              <b-upload disabled v-model="file" drag-drop>
                <section class="section">
                  <div class="content has-text-centered">
                    <p>
                      <b-icon
                        icon="upload"
                        size="is-large">
                      </b-icon>
                    </p>
                    <p>Drop your files here or click to upload</p>
                  </div>
                </section>
              </b-upload>
            </b-field>

            <div>You will be able to invite members in the next step</div>

            <button
              class="button is-primary"
              :disabled="name.length === 0"
              @click="createGroup">Create group</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  export default {
    name: 'NewGroupPage',
    data() {
      return {
        name: '',
        file: null
      }
    },
    methods: {
      async createGroup() {
        const group = await this.$axios.$post('/group', { name: this.name })
        console.info(group)
        this.$store.dispatch('group/fetchGroups')
      },
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
  .form > :not(:last-child) {
    margin-bottom: 2rem;
  }
</style>
