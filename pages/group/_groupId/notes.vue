<template>
  <section class="notes">
    <section class="notes-displays">
      <div class="notes-title">Group Notes</div>
      <div class="notes-page-container">
        <div>
          <b-button @click="openModal" type="is-primary">New Note</b-button>
        </div>
        <br/>
        <div class="columns is-multiline">
          <div class="row" v-bind:key="note.id" v-for="note in notes">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    @{{note.creator.name}}
                  </p>
                  <div class="delete-button">
                    <b-button @click="deleteNote(note)" size="is-small-medium" type="is-danger">X</b-button>
                  </div>
                </header>
                <div class="card-content">
                  <div class="notes-sub-title">
                    {{note.title}}
                  </div>
                  <b-input rounded type="textarea" v-model="note.text"></b-input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TODO: Fix background issue -->
    <b-modal :active.sync="modalActive" has-modal-card>
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
          <b-button @click="modalActive = false" class="button" type="button">Close</b-button>
          <b-button :disabled="newNoteSaveDisabled" :loading="saving" @click="createNote" class="button is-primary">Save</b-button>
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

  export default {
    name: "notes",
    components: {
      TopAppBar,
      Updates,
      GroupFeatures,
    },
    data() {
      return {
        lines: [],
        blockRemoval: true,
        modalActive: false,
        newNote: {
          title: '',
          text: ''
        },
        saving: false
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
        notes: 'notes/list'
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
    },
    methods: {
      openModal() {
        this.newNote = {
          title: '',
          text: ''
        }
        this.saving = false
        this.modalActive = true
      },

      async createNote() {
        this.saving = true
        try {
          await this.$store.dispatch('notes/createNote', this.newNote)
        } catch (e) {
          console.error("Note creation error", e);
        } finally {
          this.modalActive = false
          this.saving = false
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

  .modal .animation-content #newNote {
    margin: 0 auto;
  }

  #newNote {
    max-width: 500px;
    width: 90%;
  }

  @media screen and (min-width: 769px) {
    #newNote {
      width: 500px;
    }
  }
</style>
