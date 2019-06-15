<template>
  <div>
    <TopAppBar :has-back="true" parent="/dashboard" style="color: white" title="New Group"/>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2 form">
            <b-field label="Name">
              <b-input v-model="name"></b-input>
            </b-field>

            <b-field label="Description (optional)">
              <b-input v-model="description"></b-input>
            </b-field>

            <div>You will be able to invite members in the next step</div>

            <b-button :disabled="name.length === 0"
                      :loading="loading"
                      @click="createGroup"
                      type="is-primary">
              Next
            </b-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  import TopAppBar from "../../components/TopAppBar"

  export default {
    name: 'NewGroupPage',
    components: {TopAppBar},
    data() {
      return {
        name: '',
        description: '',
        file: null,
        loading: false
      }
    },
    methods: {
      async createGroup() {
        this.loading = true
        const group = await this.$axios.$post('/group', {name: this.name})
        await this.$store.dispatch('groups/fetchGroups')
        this.loading = false
        this.$router.push(`/group/${group.id}/invite`)
      },
      onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files
        if (!files.length)
          return
        this.createImage(files[0])
      },
      createImage(file) {
        let image = new Image()
        let reader = new FileReader()
        let vm = this

        reader.onload = (e) => {
          vm.image = e.target.result
        }
        reader.readAsDataURL(file)
      },
      removeImage: function (e) {
        this.image = ''
      }
    }
  }
</script>


<style>

</style>
