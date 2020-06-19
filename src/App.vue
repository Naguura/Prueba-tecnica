<template>
  <div>
    <div class="info-container">
      <h2 class="title">Last Launch: Space-X</h2>

      <h4 class="subtitle">Launch details</h4>
      <p>{{lastLaunch.data.details}}</p>
      <h4 class="subtitle">Launch name:</h4>
      <p>{{lastLaunch.data.name}}</p>
      <h4 class="subtitle">Local date launch:</h4>
      <p>{{lastLaunch.data.date_local}}</p>
    </div>
    <div class="imgs">
      <img src="https://live.staticflickr.com/65535/49956396622_975c116b71_o.jpg" height="600" class="space-x">
    </div>
  </div>
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
    padding-bottom: 10px;
    padding-top: 15px;
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
    width: 80%;
  }
</style>