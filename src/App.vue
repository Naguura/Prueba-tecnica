<template>
  <v-app dark>
    <v-app-bar
      color="blue-grey"
      dark
      align-center
      app
      clipped-left
    >
      <div class="d-flex align-center">
        <h2 class="title">Last Launch: Space-X</h2>
      </div>
    </v-app-bar>
    <v-main class="info-container">
      <v-container>
        <v-layout row wrap align-center>
          <v-flex xs8  offset-md2>
            <v-card class="my-3" hover>
              <v-img
                src="https://live.staticflickr.com/65535/49956396622_975c116b71_o.jpg"
                height="100%"
                class="space-x"
              > 
              </v-img>
              <v-container fill-height fluid>
                <v-layout>
                  <v-flex xs12 align-center d-flex>
                    <span class="headline">Launch {{lastLaunch.data.name}}</span>
                  </v-flex>
                </v-layout>
                <v-card-text>
                  <h4 class="subtitle">Launch details</h4>
                  <p>{{lastLaunch.data.details}}</p>
                  <h4 class="subtitle">Launch name:</h4>
                  <p>{{lastLaunch.data.name}}</p>
                  <h4 class="subtitle">Local date launch:</h4>
                  <p>{{lastLaunch.data.date_local}}</p>
                </v-card-text>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'App',

    data(){
      return { 
        lastLaunch: { data:''}
      }
    },

    async created() {
      axios
        .get('https://api.spacexdata.com/v4/launches/latest')
        .then(response => (this.lastLaunch = response))
    },
  }
</script>

<style>
  .title {
    text-align: center;
    padding: 10px;
  }

  .info-container {
    padding: 20px;
    border: 5px;
  }

  .subtitle {
    padding: 10px;
    padding-top: 20px;
  }

  .imgs {
    padding: 10px;
    padding-top: 25px;
  }

  .space-x {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
</style>