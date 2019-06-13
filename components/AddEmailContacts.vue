<template>
  <section class="container is-fluid addPeopleForm">
    <div class="field container is-fluid">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" placeholder="Text input" type="text">
      </div>
    </div>
    <div class="field container is-fluid">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" placeholder="Email input" type="email" value="">
        <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
        <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
      </div>
      <p class="help is-danger">This email is invalid</p>
    </div>
  </section>
</template>


<script>
  export default {
    name: "addEmailContacts"
  }
</script>

<style scoped>

  .addPeopleForm {
    background-color: #f7f8fb;
  }

</style>
