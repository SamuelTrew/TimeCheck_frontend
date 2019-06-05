<template>
  <section class="alarms">
    <div class="alarms-list">
      <div class="create-alarm" @click="addAlarm" :class="{selected: createAlarm}">
        <b-icon icon="plus" size="is-medium"></b-icon>
      </div>
      <div class="alarms-list-inner">
        <div v-for="alarm in alarms" class="alarm-list-item" @click="selectedAlarm = alarm; createAlarm = false" :class="{selected: selectedAlarm === alarm}" >
          <div class="content">
            {{ alarm.name }}
          </div>
        </div>
      </div>
    </div>

    <!-- ALARM DATA HERE -->
    <section class="section alarms-detail">
      <div v-if="selectedAlarm" class="alarm">
        <h4 class="title is-4">New Group Reminder</h4>
        <section>
          <b-field>
            <b-input v-model="reminder"></b-input>
          </b-field>
        </section>
        <b-clockpicker
          v-model="time"
          inline
          :type="is-primary"
          :hour-format="format">
        </b-clockpicker>

        <b-datepicker
          v-model="date"
          inline
        >
        </b-datepicker>

        <b-button type="is-success" :disabled="reminder.length === 0" @click="addReminder">Set Reminder</b-button>
        <!--todo: ensure button only enabled when name, date and time(?) have been set.-->

        <b-button type="is-primary" @click="setDateTime">Set Timer</b-button>
        <b-button type="is-primary" @click="clear">Stop Timer</b-button>
      </div>

      <div v-else-if="createAlarm">
        <h4 class="title">New Alarm</h4>

        <div class="form">
          <b-field label="Name">
            <b-input v-model="newAlarm"></b-input>
          </b-field>
        </div>
      </div>
    </section>



    <section>
    <div class="timer">
      {{ `${this.displayTime.first}  ${this.displayTime.next}` }}
    </div>
    </section>
  </section>
</template>


<script>
  const DUMMY_ALARMS_DATA = [
    { name: 'morning' },
    { name: 'where is penny' },
    { name: 'meeting 72' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
  ];

  import TopAppBar from "../../../components/TopAppBar";
  export default {
    name: "alarm",
    components: {TopAppBar},
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
      addAlarm() {
        this.selectedAlarm = null;
        this.createAlarm = true;
        DUMMY_ALARMS_DATA.push({name: 'what is MaTt CoRp'})
      }
    },
    computed: {
      format() {
        return this.isAmPm ? '12' : '24'
      }
    },
    async addReminder() {
      try {
        //todo add reminders
      } catch (e) {
        console.error("Reminder error", e)
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
    width: 300px;
    background-color: #eee;
    border-right: 1px solid #aaa;
    display: flex;
    flex-direction: column;
  }
  .alarms-list-inner {
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .alarms-detail {
    flex: 1 1 0;
  }
  .create-alarm,
  .alarm-list-item {
    padding: 1rem;
    border-bottom: 1px solid #aaa;
    cursor: pointer;
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
