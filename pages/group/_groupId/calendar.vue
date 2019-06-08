<template>
  <section class="calendar">
    <section class="calendar-displays">
      <div class="calendar-title">Calendars</div>

      <div class="calendar-page-container">
        <div class="calendar-container">
          <p class="calendar-sub-title">
            Group
          </p>
          <p> Dates when people are busy </p>
          <v-date-picker
            is-expanded
            :available-dates='{end: new Date(1, 1, 1)}'
            mode='multiple'
            :value='sharedDates'
            color="blue"
            is-inline></v-date-picker>
        </div>

        <div class="calendar-container">
          <p class="calendar-sub-title">
            Personal
          </p>
          <p> Select dates when you are busy </p>
          <v-date-picker
            is-expanded
            is-dark
            :available-dates='availableDates'
            mode='multiple'
            v-model='pickedDates'
            :value="null"
            color="red"
            is-inline></v-date-picker>
        </div>
      </div>
    </section>

    <section class="calendar-settings">
      <div class="calendar-title">Calendar Settings</div>

      <div>
        <div class="calendar-sub-title">Available dates range</div>
        <v-date-picker
          mode='range'
          v-model='availableDates'></v-date-picker>
      </div>
    </section>
  </section>
</template>

<script>
  import TopAppBar from "../../../components/TopAppBar";
  export default {
    name: 'GroupCalendarPage',
    components: { TopAppBar },
    computed: {
      sharedDates() {
        return this.groupDates.concat(this.pickedDates);
      }
    },
    data() {
      return {
        startDate: new Date(),
        endDate: new Date(),
        availableDates: null,
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
  .calendar {
    padding: 1rem;
  }

  .calendar-page-container {
    max-width: 1440px;
    margin: 0 auto 1rem;
  }

  .calendar-title {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
  }
  .calendar-sub-title {
    font-size: 1.5rem;
  }

  .calendar-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  /* Desktop */
  @media only screen and (min-width: 1024px) {
    .calendar-page-container {
      display: flex;
    }

    .calendar-container {
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      width: 45%;
    }
  }

</style>

