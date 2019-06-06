<template>
  <section>
    <TopAppBar title="Calendar" :has-back="true" parent="/dashboard" style="color: white"/>
    <!--dates functionality-->
    <div class="calendar-container">
      <div class="group-calendar-container">
        <h2>Group Calendar</h2>
        <v-calendar
          is-expanded
          :available-dates='availableDates'
          :attributes='groupAttributes'>
        </v-calendar>
      </div>

      <div class="personal-calendar-container">
        <h2>Personal Calendar</h2>
        <v-calendar
          class="personal-calendar"
          is-expanded
          :available-dates='availableDates'
          :attributes='personalAttributes'>
        </v-calendar>

        <h3>Add dates you are available</h3>
        <v-date-picker
          class="personal-calendar-container"
          :available-dates='availableDates'
          mode='multiple'
          v-model='pickedDates'
          :value="null"
          is-inline></v-date-picker>
      </div>
    </div>

  </section>
</template>

<script>
  import TopAppBar from "../components/TopAppBar";
  export default {
    name: "calendar",
    components: {TopAppBar},
    data() {
      return {
        startDate: new Date(),
        endDate: new Date(),
        availableDates: { start: new Date(), span: 14 },
        pickedDates: [],
        displayAttributes: [
          {
            key: 'Shared Availability',
            highlight: true,
            dates: [
              { start: new Date('6/10/2019'), span: 7 },
            ],
          }
        ],
        groupAttributes: [
          {
            key: 'Hao',
            highlight: true,
            dates: [
              { start: new Date('6/15/2019'), span: 3},
              { start: new Date('6/19/2019') },
            ]
          },
          {
            key: 'Sam',
            highlight: 'red',
            dates: [
              {start: new Date('6/12/2019'), span: 3},
              new Date('6/16/2019'),
            ]
          }
        ],
        personalAttributes: [
          {
            key: 'My Availability',
            highlight: true,
            dates: [
              { start: new Date('6/10/2019'), span: 7 },
            ],
          }
        ]
      }
    }
  }
</script>

<style scoped>
  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
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

