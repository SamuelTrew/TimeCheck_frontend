<template>
  <section>
    <section>
      <TopAppBar title="Documents" :has-back="true" parent="/dashboard"/>
    </section>

    <div class="container">
      <div class="large-12 medium-12 small-12 cell">
        <label>File
          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        </label>
        <button v-on:click="submitFile()">Submit</button>
      </div>
    </div>
  </section>
</template>


<script>
  import TopAppBar from '../components/TopAppBar';

  export default {
    components: {
      TopAppBar,
    },
    methods: {
      handleFileUpload() {
        this.file = this.$refs.file.files[0];
      },
      submitFile() {

      }
    },
    data() {
      return {
        file: '',
      }
    }

  }
</script>
