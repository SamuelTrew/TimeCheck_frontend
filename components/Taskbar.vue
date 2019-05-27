<template>
  <div class="raisedbox">

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Taskbar extends Vue {}
</script>

<style>
  .raisedbox {
    padding: 10px;
    border: 1px solid #77aaff;
    box-shadow:  -1px 1px #77aaff,
    -2px 2px #77aaff,
    -3px 3px #77aaff,
    -4px 4px #77aaff,
    -5px 5px #77aaff;
  }
</style>
