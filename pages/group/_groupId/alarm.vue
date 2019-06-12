<template>

  <section class="alarms">
    <div class="alarms-list">
      <div class="create-alarm" @click="makeNewAlarm" :class="{selected: createAlarm}">
        <b-icon icon="plus" size="is-medium"></b-icon>
      </div>
      <div class="alarms-list-inner">
        <div v-for="alarm in alarms" class="alarm-list-item" @click="selectedAlarm = alarm;  createAlarm = false" :class="{selected: selectedAlarm === alarm}" >
          <div class="content">
            {{ alarm.name }}
          </div>
        </div>
      </div>
    </div>

    <!-- ALARM DATA HERE -->
    <section class="section alarms-detail">
      <div v-if="selectedAlarm" class="alarm">
        <h1 class="title">{{this.selectedAlarm.name}}</h1>
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

      <div v-else>
        <div>
        <h4 class="title">New Group Reminder</h4>
        </div>
        <br />
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
        this.newAlarm = '';
      },
      addAlarm() {
        this.selectedAlarm = null;
        this.createAlarm = true;
        DUMMY_ALARMS_DATA.push({name: this.newAlarm})
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
  .alarms {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .alarms-list {
    width: 30%;
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
  }
  .create-alarm.selected,
  .alarm-list-item.selected {
    font-weight: 600;
    background-color: #ddd;
  }

  .alarm-option.selected .alarm-bar {
    opacity: 0.25;
  }
  .alarm-option.selected .alarm-option-name {
    font-weight: 600;
  }
</style>

