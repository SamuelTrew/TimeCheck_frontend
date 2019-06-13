<template>

  <section class="alarms">
    <div v-if="!listItemSelected" class="alarms-list">
      <h2 class="reminders-title">Reminders</h2>
      <div class="create-alarm" @click="makeNewAlarm" :class="{selected: createAlarm}">
        <b-icon icon="plus" size="is-medium"></b-icon>
      </div>
      <div class="alarms-list-inner">
        <div v-for="alarm in alarms" class="alarm-list-item" @click="selectAlarm(alarm)" :class="{selected: selectedAlarm === alarm}" >
          <div class="content">
            {{ alarm.name }}
          </div>
        </div>
      </div>
    </div>

    <!-- ALARM DATA HERE -->
    <section v-else class="section alarms-detail">
      <div v-if="selectedAlarm" class="alarm">

        <h1 class="title">
          <button class="reminders-back-button" @click="toggleListItemSelected">
            <b-icon class="icon" icon="arrow-left" type="is-dark" size="is-medium"></b-icon>
          </button>
          {{this.selectedAlarm.name}}
        </h1>

        <div class="form">
          <b-field label="On this date">
            <b-datepicker
              placeholder="07/06/19"
              icon="calendar-today">
            </b-datepicker>
          </b-field>

          <b-field label="At this time">
            <b-timepicker
              rounded
              placeholder="10:30"
              icon="clock">
            </b-timepicker>
          </b-field>
        </div>

      </div>

      <div v-else class="reminder-new-page">
        <div class="reminder-new-page-title">
          <h4 class="title">
            <button class="reminders-back-button" @click="toggleListItemSelected">
              <b-icon class="icon" icon="arrow-left" type="is-dark" size="is-medium"></b-icon>
            </button>
            New Group Reminder
          </h4>
        </div>

        <br />

        <div class="reminder-new-page-body">
          <div class="form">
            <b-field label="Name">
              <b-input v-model="newAlarm"></b-input>
            </b-field>
          </div>

          <br />

          <b-field label="Select date">
            <b-datepicker
              v-model="date"
              inline>
            </b-datepicker>
          </b-field>

          <br />

          <b-field label="Select Time">
            <b-clockpicker
              v-model="time"
              inline
              type="is-primary"
              :hour-format="format">
            </b-clockpicker>
          </b-field>

          <br />

          <div>
            <b-button type="is-primary"
                      :disabled="newAlarm.length === 0"
                      @click="addAlarm">Create Reminder
            </b-button>
          </div>
        </div>
      </div>
    </section>

    <!--<section>-->
    <!--<div class="timer">-->
    <!--{{ `${this.displayTime.first}  ${this.displayTime.next}` }}-->
    <!--</div>-->
    <!--</section>-->
  </section>
</template>


<script>

  const DUMMY_ALARMS_DATA = [
    { name: 'Meet at South Ken Station' },
    { name: 'Find penny' },
    { name: 'Party 21 charles lane' },
    { name: 'Dinner with Radhika' },
    { name: 'Slug Pres' },
    { name: 'Get Bubble Tea' },
  ];

  import TopAppBar from "../../../components/TopAppBar";
  export default {
    name: 'GroupAlarmPage',
    components: { TopAppBar },
    data() {
      return {
        newAlarm: '',
        selectedAlarm: null,
        listItemSelected: false,
        createAlarm: false,
        alarms: DUMMY_ALARMS_DATA,
        reminder: '',
        time: new Date(),
        date: new Date(),
        countdown: {
          seconds: 0,
          minutes: 0,
          hours: 0,
          days: 0
        },
        diff: 0,
        displayTime: {
          first: ``,
          next: ``,
        },
        intervalSetter: null,
        isAmPm: false,
      }
    },
    methods: {
      makeNewAlarm() {
        this.selectedAlarm = null;
        this.createAlarm = true;
        this.listItemSelected = true;
        this.newAlarm = '';
      },
      addAlarm() {
        this.selectedAlarm = null;
        this.createAlarm = true;
        this.listItemSelected = false;
        DUMMY_ALARMS_DATA.push({name: this.newAlarm});
      },
      selectAlarm(alarm) {
        this.selectedAlarm = alarm;
        this.createAlarm = false;
        this.listItemSelected = true;
      },
      toggleListItemSelected() {
        this.listItemSelected = !this.listItemSelected;
      },
      setDateTime() {
        const temp = new Date();
        const alarmTime = this.getDateTime(this.time, this.date);
        let diff = alarmTime.getTime() - temp.getTime();
        if (diff < 0) {
          return;
        }
        this.diff = diff = Math.floor(diff/1000);

        this.decrement();
        this.intervalSetter = setInterval(this.decrement, 1000);
      },
      getDateTime(time, date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(),
          time.getHours(), time.getMinutes(), time.getSeconds());
      },
      decrement() {
        if (this.diff < 0) {
          this.clear();
          return;
        }
        this.countdown.seconds = this.diff % 60;
        this.countdown.minutes = Math.floor(this.diff/60) % 60;
        this.countdown.hours = Math.floor(this.diff/3600) % 24;
        this.countdown.days = Math.floor(this.diff/86400);
        this.diff--;

        if (this.diff > 86400) {
          this.displayTime.first = `${this.countdown.days} days`;
          this.displayTime.next = `${this.countdown.hours} hours`;
        } else if (this.diff > 3600) {
          this.displayTime.first = `${this.countdown.hours} hours`;
          this.displayTime.next = `${this.countdown.minutes} minutes`;
        } else {
          this.displayTime.first = `${this.countdown.minutes} minutes`;
          this.displayTime.next = `${this.countdown.seconds} seconds`;
        }
      },
      clear() {
        clearInterval(this.intervalSetter);
        this.countdown = {
          seconds: 0,
          minutes: 0,
          hours: 0,
          days: 0
        };
        this.displayTime = {
          first: ``,
          next: ``
        }
      },
    },
    computed: {
      format() {
        return this.isAmPm ? '12' : '24'
      }
    },
  }
</script>


<style>
  .timer {
    font-size: 50px;
  }
  .reminders-title {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    padding: 1rem;
  }
  .alarm {
    align-items: center;
  }
  .alarms {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .alarms-list {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .alarms-list-inner {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .alarms-detail {
    flex: 1 1 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .create-alarm,
  .alarm-list-item {
    padding: 1rem;
    border-bottom: 1px solid #dddddd;
    cursor: pointer;
    display: block;
    color: inherit;
  }
  .create-alarm {
    text-align: center;
    border-top: 1px solid #dddddd;
  }
  .create-alarm.selected,
  .alarm-list-item.selected {
    font-weight: 600;
    background-color: #ddd;
  }

  .alarm-option.selected,
  .alarm-bar {
    opacity: 0.25;
  }
  .alarm-option.selected,
  .alarm-option-name {
    font-weight: 600;
  }
  .reminders-back-button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    align-items: center;
  }
  .reminder-new-page-body {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
</style>

