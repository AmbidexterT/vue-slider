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
@font-face {
  font-family: 'Avenir Next';
  src: local('Avenir Next Regular'), local('Avenir-Next-Regular'),
  url('../src/assets/fonts/AvenirNextCyr-Regular.woff2') format('woff2'),
  url('../src/assets/fonts/AvenirNextCyr-Regular.woff') format('woff'),
  url('../src/assets/fonts/AvenirNextCyr-Regular.ttf') format('truetype');
  font-style: normal;
}
#app {
  font-family: Avenir Next,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
</style>
