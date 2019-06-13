<template>
  <section class="docs">
    <h2 class="docs-title">Docs</h2>

    <b-field>
      <b-upload drag-drop
                multiple
                v-model="dropFiles">
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
            <span :key="index"
                  class="tag is-primary"
                  v-for="(file, index) in dropFiles">
                {{file.name}}
                <button @click="deleteDropFile(index)"
                        class="delete is-small"
                        type="button">
                </button>
            </span>
    </div>

    <br/>

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
