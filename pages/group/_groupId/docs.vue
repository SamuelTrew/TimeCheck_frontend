<template>
  <section class="docs">
    <h2 class="docs-title">Docs</h2>

    <b-field>
      <b-upload v-model="dropFiles"
                multiple
                drag-drop>
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

    <div class="tags">
            <span v-for="(file, index) in dropFiles"
                  :key="index"
                  class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                        type="button"
                        @click="deleteDropFile(index)">
                </button>
            </span>
    </div>

    <br />

  </section>
</template>

<script>
  import TopAppBar from '../../../components/TopAppBar';

  export default {
    components: {
      TopAppBar
    },
    data() {
      return {
        dropFiles: []
      }
    },
    methods: {
      deleteDropFile(index) {
        this.dropFiles.splice(index, 1)
      }
    }
  }
</script>

<style>
  .docs {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .docs-title {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    padding: 1rem;
  }
</style>
