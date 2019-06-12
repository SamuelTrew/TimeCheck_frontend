<template>
  <section class="section updates">

    <div class="columns is-multiline">
      <div v-for="(line, index) in lines" v-bind:key="index" class="row">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title">Hello</p>
                  <p class="subtitle">{{line.date.toDateString()}}</p>
                  <p class="subtitle">{{line.date.toTimeString()}}</p>
                </div>
              </div>
              <div class="content">
                <b-field horizontal v-model="line.message" label="message">
                  <b-input type="textarea"></b-input>
                </b-field>

                <div class="block float-right">
                  <b-button type="is-primary" @click="removeLine(index)">Remove Note</b-button>
                </div>
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

</style>
