<template>
<section>

  <div @click="init">
    <b-icon icon="plus" size="is-medium"></b-icon>
  </div>
  <div @click="notifyMe">
    <b-icon icon="plus" size="is-medium"></b-icon>
  </div>
</section>
</template>

<script>
    export default {
      name: "reminders",

      methods: {
    notifyMe() {
      if (Notification.permission !== "granted")
        Notification.requestPermission();
      else {
        var notification = new Notification('Notification title', {
          icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
          body: "Hey there! You've been notified!",
        });

        notification.onclick = function() {
          window.open("http://stackoverflow.com/a/13328397/1269037");
        };
      }
    }
      }
    }



</script>

<style scoped>

</style>
