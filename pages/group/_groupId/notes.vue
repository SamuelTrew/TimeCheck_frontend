<template>
  <section>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div v-for="(line, index) in lines" v-bind:key="index" class="row">
      <article class="tile is-child box">
        <p class="title">hello</p>
        <p class="subtitle">{{line.date.toDateString()}}</p>
        <p class="subtitle">{{line.date.toTimeString()}}</p>

        <b-field horizontal v-model="line.message" label="message">
          <b-input type="textarea"></b-input>
        </b-field>

        <div class="block float-right">
          <b-button type="is-primary" @click="removeLine(index)">Remove Note</b-button>
        </div>

      </article>
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
