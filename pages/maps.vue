https://alligator.io/vuejs/vue-google-maps/ is what I'm using to base it off, this is just
a start

<template>
  <section>
    <TopAppBar :has-back="true" parent="/dashboard" style="color: white" title="Maps"/>
    <iframe allowfullscreen
            class="map"
            frameborder="0" height="450" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d317730.66577390715!2d-0.1237726!3d51.5265923!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1559589389352!5m2!1sen!2suk" width="600"></iframe>
    <!--
    <section>
      <div>
        <div>
          <h2>Search and add a pin</h2>
          <label>
            <gmap-autocomplete
              @place_changed="setPlace">
            </gmap-autocomplete>
            <button @click="addMarker">Add</button>
          </label>
          <br/>

        </div>
        <br>
        <gmap-map
          :center="center"
          :zoom="12"
          style="width:100%;  height: 400px;"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
      </div>
    </section>
    -->
  </section>
</template>


<script>
  import TopAppBar from "../components/TopAppBar"

  export default {
    name: 'GoogleMapPage',
    components: {TopAppBar},
    data() {
      return {
        // default to Montreal to keep it simple
        // change this to whatever makes sense
        center: {lat: 45.508, lng: -73.587},
        markers: [],
        places: [],
        currentPlace: null
      }
    },

    mounted() {
      this.geolocate()
    },

    methods: {
      // receives a place object via the autocomplete component
      setPlace(place) {
        this.currentPlace = place
      },
      addMarker() {
        if (this.currentPlace) {
          const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
          }
          this.markers.push({position: marker})
          this.places.push(this.currentPlace)
          this.center = marker
          this.currentPlace = null
        }
      },
      geolocate: function () {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      }
    }
  }
</script>


<style>
  .map {
    border: 0;
    height: 90%;
    width: 100%;
  }
</style>


