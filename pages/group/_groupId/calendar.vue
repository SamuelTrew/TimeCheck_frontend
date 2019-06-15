<template>
  <section class="calendar">
    <section class="calendar-displays">
      <div class="calendar-title">Calendars</div>

      <section class="calendar-settings">
      <div>
        <div class="calendar-sub-title">Available dates range</div>
        Set the potential dates people can pick from:
        <div class="calendar-range-picker">
          <v-date-picker
            mode='range'
            v-model='availableDates'></v-date-picker>
          <b-button @click="setAvailableDates">Set</b-button>
        </div>
      </div>
      </section>
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
      <div class="calendar-sub-title">Free Dates</div>
      Select the date of the event from the list of free dates:
      <br />
      <div class="select">
        <select>
          <option>Select Date</option>
          <option v-for="date in this.freedates">
          {{date.toDateString()}}
          </option>
        </select>
      </div>
      <br />
      <div>
        <b-button type="is-primary">Select Date</b-button>
      </div>

    </section>

  </section>
</template>

<script>
  import TopAppBar from "../../../components/TopAppBar";
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: 'GroupCalendarPage',
    components: {TopAppBar},
    computed: {
      ...mapGetters({
        availableDates: 'calendar/availableDates',
      }),
      sharedDates() {
        return this.groupDates.concat(this.pickedDates);
      },
      generateFreeDates() {
        let result = [];
        let cur = this.availableDates.start;
        do {
          if (!this.sharedDates.includes(cur)) {
            result.push(cur)
          }
        } while (cur !== this.availableDates.end)
        return result
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
      }),
      async setAvailableDates() {
        try {
          await this.$store.dispatch('calendar/setAvailableDate', this.availableDates)
        } catch (e) {
          console.error("Calendar available date error", e);
        }
      }
    },
    data() {
      return {
        startDate: new Date(),
        endDate: new Date(),
        availableDates: { start: new Date(2019, 5, 17), end: new Date(2019, 5, 21) },
        pickedDates: [],
        groupDates: [
          new Date('6/20/2019'),
          new Date('6/21/2019'),
        ],
        freedates: [
          new Date('6/20/2019'),
          new Date('6/21/2019'),
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
    margin: 1rem;
  }
</style>

