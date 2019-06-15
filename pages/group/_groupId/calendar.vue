<template>
  <section class="calendar">
    <section class="calendar-displays">
      <div class="calendar-title">Calendars</div>

      <div class="calendar-page-container">
        <div class="calendar-container">
          <p class="calendar-sub-title">
            Select dates when you are busy:
          </p>
          <v-date-picker
            :available-dates='availableDates'
            :value="null"
            color="red"
            is-expanded
            is-inline
            mode='multiple'
            v-model='pickedDates'></v-date-picker>
        </div>

        <div class="calendar-container">
          <p class="calendar-sub-title">
            Dates when people are busy
          </p>
          <v-date-picker
            :available-dates='{end: new Date(1, 1, 1)}'
            :value='sharedDates'
            color="blue"
            is-expanded
            is-inline
            mode='multiple'></v-date-picker>
        </div>

      </div>
    </section>

    <section class="calendar-settings">
      <div>
        <div class="calendar-sub-title">Available dates range</div>
        Set the potential dates people can pick from:
        <div class="calendar-range-picker">
          <v-date-picker
            mode='range'
            v-model='availableDates'></v-date-picker>
        </div>
      </div>
    </section>

    <br />
    <br />

    <next :group="group" next="polls/new" style="float: right; margin-right: 2rem"/>

  </section>
</template>

<script>
  import TopAppBar from "../../../components/TopAppBar";
  import Next from "../../../components/next";
  import {mapActions} from 'vuex';

  export default {
    name: 'GroupCalendarPage',
    components: {TopAppBar, Next},
    computed: {
      sharedDates() {
        return this.groupDates.concat(this.pickedDates);
      }
    },
    props: {
      group: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions({
        toggleSidebar: 'nav/toggleSidebar'
      })
    },
    data() {
      return {
        startDate: new Date(),
        endDate: new Date(),
        availableDates: null,
        pickedDates: [],
        pickedDatesDummy: [
          new Date('6/10/2019'),
          new Date('6/11/2019'),
          new Date('6/12/2019'),
          new Date('6/13/2019'),
          new Date('6/14/2019'),
        ],
        groupDates: [],
        groupDatesDummy: [
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
    margin-bottom: 0.5rem;
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
      max-width: 540px;
      margin-left: auto;
      margin-right: auto;
      width: 45%;
    }
  }

  .calendar-settings {
    margin-left: 2rem;
  }

  .calendar-range-picker {
    max-width: 300px;
  }

  .tutorial-next {
    float: right;
    margin: 2rem;
  }
</style>

