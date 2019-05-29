https://alligator.io/vuejs/vue-google-maps/ is what I'm using to base it off, this is just
a start

<template>
  <section>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            <nuxt-link to="/dashboard">
              <div style="float: left;">
                <b-icon href="dashboard" icon="arrow-left" type="is-light" size="is-medium"></b-icon>
              </div>
            </nuxt-link>
            Maps
          </h1>
        </div>
      </div>
    </section>

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
</template>


<script>
  export default {
    name: "GoogleMap",
    data() {
      return {
        // default to Montreal to keep it simple
        // change this to whatever makes sense
        center: { lat: 45.508, lng: -73.587 },
        markers: [],
        places: [],
        currentPlace: null
      };
    },

    mounted() {
      this.geolocate();
    },

    methods: {
      // receives a place object via the autocomplete component
      setPlace(place) {
        this.currentPlace = place;
      },
      addMarker() {
        if (this.currentPlace) {
          const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
          };
          this.markers.push({ position: marker });
          this.places.push(this.currentPlace);
          this.center = marker;
          this.currentPlace = null;
        }
      },
      geolocate: function() {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      }
    }
  };
</script>


<style>

</style>
