<template>
  <section class="section form">
    <h3 class="title">Group Settings</h3>
    <br/>
    <div>
      <!-- Changing the Group Name -->
      <h4 class="title is-4">Rename Group</h4>
      <b-field>
        <b-input v-model="name"></b-input>
      </b-field>
      <b-button :disabled="name.length === 0" @click="updateName" type="is-primary">Rename</b-button>

      <br/>
      <br/>
      <br/>

      <!-- Changing the Group Profile Image -->
      <h4 class="title is-4">Change Profile Image</h4>
      <b-message type="is-info">
        Your image must be no larger than 10MB - we accept PNG and JPEG images
      </b-message>
      <b-button disabled type="is-primary">Change</b-button>

      <br/>
      <br/>
      <br/>

      <!-- Changing the Group Colour -->
      <h4 class="title is-4">Group Colour</h4>
      <b-message type="is-info">
        Enter any colour name, RGB, HEX or HSL in the input below to test<br/>
        Click Change to confirm the changes
      </b-message>
      <div class="color-box" v-bind:style="bgc"></div>
      <div>
        <input type="text" v-on:input="bgc.backgroundColor = $event.target.value"/>
      </div>
      <br/>
      <b-button @click="updateColour" type="is-primary">Change</b-button>

      <br/>
      <br/>
      <br/>

      <!-- Leaving the Group -->
      <h4 class="title is-4">Leave Group</h4>
      <b-message type="is-info">
        If you are the only admin then a random group member will be made an admin<br/>
        If you are the only member then the group (and all associated data) will be deleted
      </b-message>
      <b-button @click="leaveGroup" type="is-primary">Leave</b-button>

      <br/>
      <br/>
      <br/>

      <!-- Deleting the Group -->
      <h4 class="title is-4">Delete Group</h4>
      <b-message type="is-danger">
        <b>Warning!</b> This action cannot be undone - only proceed if you are sure that you want to permanently delete
        the group and all associated data
      </b-message>
      <b-button @click="deleteGroup" type="is-danger">Delete</b-button>

      <br/>
      <br/>
      <br/>

      <!-- Starting the tutorial mode again -->
      <h4 class="title is-4">Start Tutorial</h4>
      <b-message type="is-info">
        Here we will begin taking you through the group features so that you can understand and use them in the manner
        intended
      </b-message>
      <nuxt-link :to="`calendar`" @click.native="startTutorial">
        <b-button type="is-primary">Start</b-button>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'GroupSettingsPage',
    props: {
      group: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        name: '',
        bgc: {
          backgroundColor: ''
        },
      }
    },
    computed: {
      ...mapGetters({
        tutorial: 'tutorial/tutorial'
      }),
    },
    methods: {
      deleteGroup() {
        this.$dialog.confirm({
          title: 'Deleting group',
          message: `Are you sure you want to <b>delete</b> the group "${this.group.name}? This action cannot be undone.`,
          confirmText: 'Delete Group',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: async () => {
            try {
              await this.$axios.$delete(`/group/${this.group.id}`)
              this.$store.dispatch('groups/fetchGroups')
              console.info('Going dashboard - group deletion')
              this.$router.push('/dashboard')
              this.$snackbar.open({
                message: 'Group deleted'
              })
            } catch (e) {
              // TODO: Handle error on delete (can't delete - group may not exist)
              console.error("Delete error", e)
            }
          }
        })
      },
      async leaveGroup() {
        try {
          await this.$axios.$get(`/group/${this.group.id}/leave`)
          this.$store.dispatch('groups/fetchGroups')
          console.info('Going dashboard - left group')
          this.$router.push('/dashboard')
          this.$snackbar.open({
            message: 'Group left'
          })
        } catch (e) {
          // TODO: Handle error on leave (can't leave - group may not exist)
          console.error("Leave error", e)
        }
      },
      async updateName() {
        try {
          const group = await this.$axios.$patch(`/group/${this.group.id}`, {name: this.name})
          this.$store.dispatch('groups/updateName', {id: this.group.id, name: this.name})
        } catch (e) {
          // TODO: Handle error on update (can't update - group may not exist)
          console.error("Update name error", e)
        }
      },
      async updateColour() {
        try {
          this.$store.dispatch('groups/updateColour', {id: this.group.id, colour: this.bgc})
        } catch (e) {
          console.error("Update colour error", e)
        }
      },
      async startTutorial() {
        try {
          this.$store.dispatch('tutorial/setTutorial', {tutorial: true})
        } catch (e) {
          console.error("Tutorial Starting Error", e)
        }
      }
    }
  }
</script>

<style>
  .color-box {
    height: 1em;
    width: 1em;
  }
</style>
