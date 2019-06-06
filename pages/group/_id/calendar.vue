<template>
  <section>
    <div class="calendar-container">
      <div class="group-calendar-container">
        <h2>Group</h2>
        Dates when people are busy
        <v-date-picker
          is-expanded
          class="personal-calendar-container"
          :available-dates='availableDates'
          mode='multiple'
          :value='sharedDates'
          color="blue"
          is-inline></v-date-picker>
      </div>

      <div class="personal-calendar-container">
        <h2>Personal</h2>
        Select dates when you are busy
        <v-date-picker
          is-expanded
          is-dark
          class="personal-calendar-container"
          :available-dates='availableDates'
          mode='multiple'
          v-model='pickedDates'
          :value="null"
          color="red"
          is-inline></v-date-picker>
      </div>
    </div>

  </section>
</template>

<script>
  import TopAppBar from "../../../components/TopAppBar";
  export default {
    name: "calendar",
    components: {TopAppBar},
    computed: {
      sharedDates() {
        return this.groupDates.concat(this.pickedDates);
      }
    },
    data() {
      return {
        startDate: new Date(),
        endDate: new Date(),
        availableDates: { start: new Date(), span: 14 },
        pickedDates: [
          new Date('6/10/2019'),
          new Date('6/11/2019'),
          new Date('6/12/2019'),
          new Date('6/13/2019'),
          new Date('6/14/2019'),
        ],
        groupDates: [
          new Date('6/6/2019'),
          new Date('6/7/2019'),
          new Date('6/13/2019'),
          new Date('6/14/2019'),
        ],
      }
    }
  }
</script>

<style scoped>
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .calendar-container {
    padding: 1rem;
    max-width: 768px;
    margin: 0 auto;
  }
  .group-calendar-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .personal-calendar-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .personal-calendar {
    margin-bottom: 0.5rem;
  }
</style>

