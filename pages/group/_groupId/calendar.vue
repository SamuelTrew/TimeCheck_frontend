<template>
  <section class="calendar">
    <section class="calendar-displays">
      <div v-if="tutorial">
        <b-message type="is-info">
          Here is where you and your friends or colleagues can:
          <li>Select the range of available dates</li>
          <li>Choose which dates you are busy</li>
          <li>View when everyone in your group is busy</li>
        </b-message>
        <next :group="group" next="polls" :end="false" style="float: left; margin-right: 2rem"/>
        <br/>
        <br/>
      </div>

      <div class="calendar-title">Calendars</div>

      <section class="calendar-settings">
      <div>
        <div class="calendar-sub-title">Available dates range</div>
        Set dates people can pick from:
        <div class="calendar-range-picker">
          <v-date-picker
            mode='range'
            v-model='availableDates'></v-date-picker>
          <br/>
          <br/>
          <b-button type="is-primary" @click="setAvailableDates" :disabled="!availableDates">
            Set Available Dates
          </b-button>
        </div>
      </div>
      </section>
      <div class="calendar-page-container">
        <div class="calendar-container">
          <p class="calendar-sub-title">
            When are you busy?
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
            When people are busy:
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
        <select v-model="selectedDate">
          <option disabled value="">Select Date</option>
          <option v-for="date in this.getFreeDates(this.availableDates)">
          {{date.toDateString()}}
          </option>
        </select>
      </div>
      <div>
        <b-button type="is-primary" :disabled="!selectedDate" @click="pickDate">Pick Date</b-button>
      </div>
    </section>

  </section>
</template>

<script>
  import TopAppBar from "../../../components/TopAppBar";
  import Next from "../../../components/next";
  import {mapActions, mapGetters} from 'vuex';

  let moment = require('moment');

  export default {
    name: 'GroupCalendarPage',
    components: {TopAppBar, Next},
    computed: {
      ...mapGetters({
        tutorial: 'tutorial/tutorial'
      }),
      sharedDates() {
        return this.groupDates.concat(this.pickedDates);
      },
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
          this.$snackbar.open({
            message: `Date range from ${this.formatDate(this.availableDates.start)}
                        to ${this.formatDate(this.availableDates.end)}.`
          });
          await this.$store.dispatch('calendar/setAvailableDate', this.availableDates)
        } catch (e) {
          console.error("Calendar available date error", e);
        }
      },
      async pickDate() {
        this.$snackbar.open({
          message: `Event date set to ${this.formatDate(this.selectedDate)}.`
        });
      },
      getAllDatesInBetween(start, end) {
        let dates = [];
        let startDate = moment(start);
        let endDate = moment(end).add(1, 'day');
        while(this.formatDate(startDate) !== this.formatDate(endDate)) {
          dates.push(startDate.toDate());
          startDate = startDate.add(1, 'days');
        }
        return dates;
      },
      getFreeDates(availableDates) {
        let dates = [];
        let startDate = moment(availableDates.start);
        let endDate = moment(availableDates.end).add(1, 'day');
        while(this.formatDate(startDate) !== this.formatDate(endDate)) {
          if (this.dateIsFree(startDate)) {
            dates.push(startDate.toDate());
          }
          startDate = startDate.add(1, 'days');
        }
        return dates;
      },
      dateIsFree(date) {
        let free = true;
        let dateWrapper = moment(date);
        this.sharedDates.forEach(d => {
          let dWrapper = moment(d);
          if (this.formatDate(dateWrapper) === this.formatDate(dWrapper)) {
            free = false
          }
        });
        return free
      },
      formatDate(date) {
        return moment(date).format(this.dateFormat)
      }
    },
    data() {
      return {
        moment: moment,
        dateFormat: 'D/M/YYYY',
        selectedDate: '',
        availableDates: { start: new Date(2019, 5, 17), end: new Date(2019, 5, 21) },
        pickedDates: [],
        groupDates: [
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
  .calendar-range-picker {
    max-width: 250px;
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

  .select {
    margin-bottom: 1rem;
  }
</style>

