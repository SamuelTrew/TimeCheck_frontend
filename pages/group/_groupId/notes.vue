<template>
  <section class="notes">
    <div v-if="tutorial">
      <b-message type="is-info">
        <p><b>Tutorial</b></p>
        Here is where you and your friends or colleagues can:
        <li>View the group's notes</li>
        <li>Create and delete notes</li>
        <li>Edit notes</li>
        <next :group="group" next="polls" :end="true" style="float: right"/>
      </b-message>
    </div>
    <section class="notes-displays">
      <div class="notes-title">Notes</div>
      <div class="notes-page-container">
        <div>
          <b-button @click="openNewModal" type="is-primary">New Note</b-button>
        </div>
        <br/>
        <div class="columns is-multiline">
          <div class="row" v-bind:key="note.id" v-for="note in notes">
            <div class="column">
              <div class="card">
                <div class="card-header">
                  <p class="card-header-title">
                    @{{note.creator.name}}
                  </p>
                  <div class="delete-button">
                    <b-button @click="openEditModal(note)" size="is-small-medium" type="is-primary">
                      <b-icon icon="pencil"></b-icon>
                    </b-button>
                    <b-button @click="deleteNote(note)" size="is-small-medium" type="is-danger">
                      <b-icon icon="delete"></b-icon>
                    </b-button>
                  </div>
                </div>
                <div class="card-content">
                  <div class="notes-sub-title">
                    <b>{{note.title}}</b>
                  </div>
                  <p>{{note.text}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TODO: Fix background issue -->
    <b-modal :active.sync="newModalActive" has-modal-card>
      <div class="modal-card" id="newNote">
        <div class="modal-card-head">
          <p class="modal-card-title">New Note</p>
        </div>

        <div class="modal-card-body">
          <b-field label="Title">
            <b-input
              required
              v-model="newNote.title">
            </b-input>
          </b-field>

          <b-field label="Note">
            <b-input
              required
              type="textarea"
              v-model="newNote.text">
            </b-input>
          </b-field>
        </div>

        <div class="modal-card-foot">
          <b-button @click="newModalActive = false" class="button" type="button">Close</b-button>
          <b-button :disabled="newNoteSaveDisabled" :loading="newSaving" @click="createNote" class="button is-primary">Save</b-button>
        </div>
      </div>
    </b-modal>

    <b-modal :active.sync="editModalActive" has-modal-card>
      <div class="modal-card" id="editNote">
        <div class="modal-card-head">
          <p class="modal-card-title">Edit Note</p>
        </div>

        <div class="modal-card-body">
          <b-field label="Title">
            <b-input
              required
              v-model="editNote.title">
            </b-input>
          </b-field>

          <b-field label="Note">
            <b-input
              required
              type="textarea"
              v-model="editNote.text">
            </b-input>
          </b-field>
        </div>

        <div class="modal-card-foot">
          <b-button @click="editModalActive = false" class="button" type="button">Close</b-button>
          <b-button :disabled="editNoteSaveDisabled" :loading="editSaving" @click="updateNote" class="button is-primary">Update</b-button>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  import GroupFeatures from '../../../components/GroupFeatures.vue'
  import Updates from "../../../components/Updates";
  import TopAppBar from "../../../components/TopAppBar";
  import Next from "../../../components/next";

  export default {
    name: "notes",
    components: {
      TopAppBar,
      Updates,
      GroupFeatures,
      Next
    },
    props: {
      group: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        lines: [],
        blockRemoval: true,
        newModalActive: false,
        newNote: {
          title: '',
          text: ''
        },
        newSaving: false,
        editModalActive: false,
        editNote: {
          title: '',
          text: ''
        },
        editSaving: false
      }
    },
    watch: {
      lines() {
        this.blockRemoval = this.lines.length <= 1
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/user',
        notes: 'notes/list',
        tutorial: 'tutorial/tutorial'
      }),
      getUserName() {
        // TODO: This shouldn't be necessary... (should not be in notes if no user details)
        if (this.user.details) return this.user.details.name.split(" ")[0]
        return "Unknown User"
      },
      orderedNotes() {
        return this.notes
      },
      newNoteSaveDisabled() {
        return !this.newNote.title || !this.newNote.text
      },
      editNoteSaveDisabled() {
        return !this.editNote.title || !this.editNote.text
      },
    },
    methods: {
      openNewModal() {
        this.newNote = {
          title: '',
          text: ''
        }
        this.newSaving = false
        this.newModalActive = true
      },

      openEditModal(note) {
        this.editNote = {...note}
        this.editSaving = false
        this.editModalActive = true
      },

      async createNote() {
        this.newSaving = true
        try {
          await this.$store.dispatch('notes/createNote', this.newNote)
          this.$snackbar.open({
            message: `Note \"${this.newNote.title}\" added.`
          })
        } catch (e) {
          console.error("Note creation error", e);
        } finally {
          this.newModalActive = false
          this.newSaving = false
        }
      },

      async updateNote() {
        this.editSaving = true
        try {
          await this.$store.dispatch('notes/updateNote', this.editNote)
          this.$snackbar.open({
            message: `Note \"${this.editNote.title}\" updated.`
          })
        } catch (e) {
          console.error("Note edit error", e);
        } finally {
          this.editModalActive = false
          this.editSaving = false
        }
      },

      async deleteNote(note) {
        this.$dialog.confirm({
          title: 'Delete Note',
          message: `Are you sure you want to delete '<b>${note.title}</b>'? This action cannot be undone.`,
          confirmText: 'Delete Note',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: async () => {
            try {
              await this.$store.dispatch('notes/deleteNote', note)
              this.$snackbar.open({
                message: `Note \"${note.title}\" deleted.`
              })
            } catch (e) {
              console.error("Note deletion error", e);
            }
          }
        })
      },

      addLine() {
        let checkEmptyLines = this.lines.filter(line => line.message === null)
        if (checkEmptyLines.length >= 1 && this.lines.length > 0) return

        this.lines.push({
          message: null,
          date: new Date()
        })
      },

      removeLine(lineId) {
        this.lines.splice(lineId, 1)
      }
    },
    mounted() {
      this.addLine()
    }
  }
</script>


<style lang="scss">
  .notes {
    padding: 1rem;

    .card-content {
      word-break: break-word;
    }
  }

  .notes-page-container {
    max-width: 1440px;
    margin: 0 auto 1rem;
  }

  .notes-title {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
  }

  .notes-sub-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
  }

  .delete-button {
    float: right;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  .modal-card-title {
    font-weight: 600;
  }

  .modal .animation-content #newNote,
  .modal .animation-content #editNote {
    margin: 0 auto;
  }

  #newNote,
  #editNote {
    max-width: 500px;
    width: 90%;
  }

  @media screen and (min-width: 769px) {
    #newNote,
    #editNote {
      width: 500px;
    }

    .notes .card {
      max-width: 300px;
      width: 300px;
    }
  }
</style>
