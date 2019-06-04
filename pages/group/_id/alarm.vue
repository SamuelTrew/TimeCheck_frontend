<template>
  <section>
    <section>
      <!--alarm functionality-->
      <b-field label="Select Alarm Time/Date">
        <b-timepicker
          placeholder="Type or select a date..."
          icon="clock"
          @input="test"
        >
        </b-timepicker>
      </b-field>
      <b-datepicker
        v-model="date"
        inline
      >
      </b-datepicker>
    </section>

    <div class="timer">
      {{ `${this.displayTime.first}  ${this.displayTime.next}` }}
    </div>

    <b-button type="is-primary" @click="setDateTime">Set Timer</b-button>
    <b-button type="is-primary" @click="clear">Stop Timer</b-button>
  </section>
</template>


<script>
  import TopAppBar from "../../../components/TopAppBar";
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
        displayTime: {
          first: ``,
          next: ``,
        },
        intervalSetter: null
      }
    },
    methods: {
      test (value) {
        console.info(value)
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
        }
      }
    }
  }
</script>


<style>
  .timer {
    font-size: 50px;
  }
</style>
