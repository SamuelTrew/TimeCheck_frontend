<template>
  <section class="notes">
    <section class="notes-displays">
      <div class="notes-title">Group Notes</div>
      <div class="notes-page-container">
    <div class="columns is-multiline">
      <div v-for="(line, index) in lines" v-bind:key="index" class="row">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <div class="delete-button">
                    <b-button type="is-danger" size="is-small-medium" @click="removeLine(index)">X</b-button>
                  </div>
                  <p class="title">Note</p>
                  <p class="notes-sub-title">{{line.date.toLocaleString()}}</p>
                </div>
              </div>
              <div class="content">
                <b-input v-model="line.message" type="textarea"></b-input>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  <div class="col-lg-2">
    <div>
      <b-button type="is-primary" @click="addLine"> Add Note </b-button>
    </div>
  </div>
      </div>
    </section>
  </section>
</template>

<script>
    export default {
        name: "notes",
      data () {
        return {
          lines: [],
          blockRemoval: true,
        }
      },
      watch: {
        lines () {
          this.blockRemoval = this.lines.length <= 1
        }
      },
      methods: {
        addLine () {

          this.lines.push({
            message: null,
            date: new Date()
          })
        },

        removeLine (lineId) {
          if (!this.blockRemoval) this.lines.splice(lineId, 1)
        }
      },
      mounted () {
        this.addLine()
      }
    }
</script>


<style scoped>

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
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .delete-button {
    float: right;
  }
  .notes-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
  }

</style>
