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

    <div>
      {{ this.countdown }}
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
        intervalSetter: null
      }
    },
    methods: {
      setDateTime() {
        const temp = new Date();

        let seconds = this.time.getSeconds() - temp.getSeconds();
        let minutes = this.time.getMinutes() - temp.getMinutes();
        let hours = this.time.getHours() - temp.getHours();
        let days = this.date.getDate() - temp.getDate();

        seconds = this.negCheck(seconds, 60);
        minutes = this.negCheck(minutes, 60);
        hours = this.negCheck(hours, 60);

        this.countdown = {
          seconds: seconds,
          minutes: minutes,
          hours: hours,
          days: days,
        };
        this.intervalSetter = setInterval(this.decrement, 1000);
      },
      negCheck(time, num) {
        if (time < 0) {
          return num + time;
        }
        return time;
      },
      decrement() {
        if (this.countdown.seconds === 0) {
          if (this.countdown.minutes === 0) {
            if (this.countdown.hours === 0) {
              if (this.countdown.days === 0) {
                clearInterval(this.intervalSetter)
              } else {
                this.countdown.seconds = 59;
                this.countdown.minutes = 59;
                this.countdown.hours = 23;
                this.countdown.days--;
              }
            } else {
              this.countdown.seconds = 59;
              this.countdown.minutes = 59;
              this.countdown.hours--;
            }
          } else {
            this.countdown.seconds = 59;
            this.countdown.minutes--;
          }
        } else {
          this.countdown.seconds--;
        }
      },
      clear() {
        clearInterval(this.intervalSetter)
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
