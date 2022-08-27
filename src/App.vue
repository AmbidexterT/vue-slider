<template>
    <Stars/>
  <div id="app">
    <NavBar/>
    <Main/>
    <Jumbotron/>
    <CTA/>
    <Footer/>
  </div>
</template>
<script>
import Main from './components/Main.vue'
import NavBar from './components/NavBar.vue'
import Jumbotron from './components/Jumbotron.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
import Stars from './components/Stars.vue'

export default {
  name: 'App',
  components: {
    Main,
    NavBar,
    Jumbotron,
    CTA,
    Footer,
    Stars
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
</style>
