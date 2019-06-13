<template>
  <div class="loading"></div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style lang="scss">
  // Loading spinner
  .loading {
    width: 80px;
    height: 80px;
    margin: 100px auto;
    background-color: #540d6e;
    border-radius: 100%;
    -webkit-animation: load-anim 1.2s infinite ease-in-out;
    animation: load-anim 1.2s infinite ease-in-out;
  }

  @-webkit-keyframes load-anim {
    0% {
      -webkit-transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes load-anim {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }
</style>
