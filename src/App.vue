<script>
import NavBar from '@/components/NavBar'

export default {
  name: "App",
  components: {
    NavBar
  }
}
</script>
<template>
  <v-app>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
