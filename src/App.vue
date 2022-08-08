<template>
  <NavBar/>
  <Main/>
  <Jumbotron/>
  <CTA/>
  <Footer/>
</template>
<script>
import Main from './components/Main.vue'
import NavBar from './components/NavBar.vue'
import Jumbotron from './components/Jumbotron.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Main,
    NavBar,
    Jumbotron,
    CTA,
    Footer
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
