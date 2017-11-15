<template>
  <div id="app">
    <img src="./assets/pet.jpg">
    <router-view></router-view>
    <ul>
      <li><a href="/dogs">Dogs</a></li>
      <li><a href="/cats">Cats</a></li>
      <li><a href="/other">Other Animals</a></li>
      <li><a href="/people">People</a></li>
      <li><a href="/about">About the Artist</a></li>
    </ul>
    <div class="panel-body">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>Title</th>
          <th>Type</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="arty in art">
          <td><a v-bind:href="arty.image">{{arty.title}}</a></td>
          <td>{{arty.type}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyBxLuaqiCDhk22aKrnSzvdVSaGAwtnSLFs',
  authDomain: 'pet-portraits-851a2.firebaseapp.com',
  databaseURL: 'https://pet-portraits-851a2.firebaseio.com',
  projectId: 'pet-portraits-851a2',
  storageBucket: 'pet-portraits-851a2.appspot.com',
  messagingSenderId: '990693861468'
}

let app = Firebase.initializeApp(config)
let db = app.database()

let artRef = db.ref('art')

export default {
  name: 'app',
  firebase: {
    art: artRef
  },
  data () {
    return {
      newArt: {
        title: '',
        image: '',
        type: ''
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
