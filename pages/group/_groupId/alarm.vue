<template>

  <section class="alarms">
    <div class="alarms-list" v-if="!listItemSelected">
      <h2 class="reminders-title">Reminders</h2>
      <div :class="{selected: createAlarm}" @click="makeNewAlarm" class="create-alarm">
        <b-icon icon="plus" size="is-medium"></b-icon>
      </div>
      <div class="alarms-list-inner">
        <div :class="{selected: selectedAlarm === alarm}" @click="selectAlarm(alarm)" class="alarm-list-item"
             v-for="alarm in alarms">
          <div class="content">
            {{ alarm.name }}
          </div>
        </div>
      </div>
    </div>

    <!-- ALARM DATA HERE -->
    <section class="section alarms-detail" v-else>
      <div class="alarm" v-if="selectedAlarm">

        <h1 class="title">
          <button @click="toggleListItemSelected" class="reminders-back-button">
            <b-icon class="icon" icon="arrow-left" size="is-medium" type="is-dark"></b-icon>
          </button>
          {{this.selectedAlarm.name}}
        </h1>

        <div class="form">
          <b-field label="On this date">
            <b-datepicker
              icon="calendar-today"
              placeholder="07/06/19">
            </b-datepicker>
          </b-field>

          <b-field label="At this time">
            <b-timepicker
              icon="clock"
              placeholder="10:30"
              rounded>
            </b-timepicker>
          </b-field>
        </div>

      </div>

      <div class="reminder-new-page" v-else>
        <div class="reminder-new-page-title">
          <h4 class="title">
            <button @click="toggleListItemSelected" class="reminders-back-button">
              <b-icon class="icon" icon="arrow-left" size="is-medium" type="is-dark"></b-icon>
            </button>
            New Group Reminder
          </h4>
        </div>

        <br/>

        <div class="reminder-new-page-body">
          <div class="form">
            <b-field label="Name">
              <b-input v-model="newAlarm"></b-input>
            </b-field>
          </div>

          <br/>

          <b-field label="Select date">
            <b-datepicker
              inline
              v-model="date">
            </b-datepicker>
          </b-field>

          <br/>

          <b-field label="Select Time">
            <b-clockpicker
              inline
              type="is-primary"
              v-model="time">
            </b-clockpicker>
          </b-field>

          <br/>

          <div>
            <b-button :disabled="newAlarm.length === 0"
                      @click="addAlarm"
                      type="is-primary">
              Create Reminder
            </b-button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>


<script>

  const DUMMY_ALARMS_DATA = [
    {name: 'Meet at South Ken Station'},
    {name: 'Find penny'},
    {name: 'Party 21 charles lane'},
    {name: 'Dinner with Radhika'},
    {name: 'Slug Pres'},
    {name: 'Get Bubble Tea'},
  ];

  import TopAppBar from "../../../components/TopAppBar";

  export default {
    name: 'GroupAlarmPage',
    components: {TopAppBar},
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
        today: new Date(),
      }
    },
    methods: {
      notifyMe() {
        if (this.today.getDay() === this.date.getDay()) {
          if (Notification.permission !== "granted")
            Notification.requestPermission();
          else {
            var notification = new Notification('Notification title', {
              icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
              body: "Hey there! You've been notified!",
            })
            notification.onclick = function () {
              window.open("https://dev.timecheck.com");
            }
          }
        }
      },

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
        this.notifyMe()
      },
      selectAlarm(alarm) {
        this.selectedAlarm = alarm;
        this.createAlarm = false;
        this.listItemSelected = true;
      },
      toggleListItemSelected() {
        this.listItemSelected = !this.listItemSelected;
      },

    }
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

