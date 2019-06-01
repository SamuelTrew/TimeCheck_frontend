<template>
  <section>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Add Members
          </h1>
        </div>
        <nuxt-link to="/newGroup">
          <div class="backArrow">
            <b-icon href="newGroup" icon="arrow-left" type="is-light" size="is-medium"></b-icon>
          </div>
        </nuxt-link>
      </div>
    </section>
    <section class="container is-fluid">
    <AddEmailContacts />
    </section>
  </section>
</template>

<script>
    import AddEmailContacts from "../components/AddEmailContacts";
    export default {
        name: "addGroupMembers",
      components: {AddEmailContacts}
    }
</script>

<style scoped>

  .backArrow {
    float: left;
  }

</style>



