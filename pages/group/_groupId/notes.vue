<template>
  <section>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">One</p>
        <p class="subtitle">Subtitle</p>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">Two</p>
        <p class="subtitle">Subtitle</p>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">Three</p>
        <p class="subtitle">Subtitle</p>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">Four</p>
        <p class="subtitle">Subtitle</p>
      </article>
    </div>
  </div>

      <div>
        <div v-for="(line, index) in lines" v-bind:key="index" class="row">
                <!--<div class="tile is-parent">-->
                  <!--<article class="tile is-child box">-->
                    <!--<p class="title">Three</p>-->
                    <b-field horizontal v-model="line.message" label="message">
                      <b-input type="textarea"></b-input>
                    </b-field>
                  <!--</article>-->
                <!--</div>-->
              <!--</div>-->
            </div>
      </div>
          <div class="col-lg-2">
            <div class="block float-right">
              <b-button type="is-primary" @click="removeLine(index)">remove</b-button>
            </div>
            <div>
              <b-button type="is-primary" @click="addLine"> Add </b-button>
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
