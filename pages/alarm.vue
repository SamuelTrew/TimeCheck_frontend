<template>
  <section>
    <TopAppBar title="Alarm" :has-back="true" parent="/dashboard"/>
    <section>
      <!--alarm functionality-->
      <b-field label="Select Alarm Time/Date">
        <b-timepicker
          placeholder="Type or select a date..."
          icon="clock"
          editable
          v-model="time"
        >
        </b-timepicker>
      </b-field>
      <b-datepicker
        v-model="date"
        inline
      >
      </b-datepicker>
    </section>

    <div >
      {{ `${this.countdown.days}:${this.countdown.hours}:${this.countdown.minutes}:${this.countdown.seconds}` }}
    </div>

    <b-button type="is-primary" @click="setDateTime">Set Timer</b-button>
    <b-button type="is-primary" @click="clear">Stop Timer</b-button>
  </section>
</template>


<script>
  import TopAppBar from "../components/TopAppBar";
  export default {
    name: "alarm",
    components: {TopAppBar},
    data() {
      return {
        time: new Date(),
        date: new Date(),
        countdown: {
          seconds: 0,
          minutes: 0,
          hours: 0,
          days: 0
        },
        diff: 0,
        intervalSetter: null
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
      },
      clear() {
        clearInterval(this.intervalSetter);
        this.countdown = {
          seconds: 0,
          minutes: 0,
          hours: 0,
          days: 0
        }
      }
    }
  }
</script>


<style>

</style>
