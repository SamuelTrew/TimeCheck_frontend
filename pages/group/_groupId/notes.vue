<template>
  <section class="notes">
    <section class="notes-displays">
      <div class="notes-title">Group Notes</div>
      <div class="notes-page-container">
        <div>
          <b-button type="is-primary" @click="addLine"> Add Note </b-button>
        </div>
        <br />
    <div class="columns is-multiline">
      <div v-for="(line, index) in lines" v-bind:key="index" class="row">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                @User
              </p>
              <div class="delete-button">
                <b-button type="is-danger" size="is-small-medium" @click="removeLine(index)">X</b-button>
              </div>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="notes-sub-title">
                {{line.date.toLocaleString()}}
              </div>
                <b-input v-model="line.message" type="textarea" rounded></b-input>
              </div>
            </div>
          </div>
        </div>
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
          let checkEmptyLines = this.lines.filter(line => line.message === null)
          if (checkEmptyLines.length >= 1 && this.lines.length > 0) return

          this.lines.push({
            message: null,
            date: new Date()
          })
        },

        removeLine (lineId) {
          this.lines.splice(lineId, 1)
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

  .notes-header {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .notes-sub-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .delete-button {
    float: right;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }


</style>
