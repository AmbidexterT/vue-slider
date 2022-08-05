<template>
  <div id="nav">
    <nav v-bind:class="active" v-on:click.prevent>
      <a href="#main" class="home" v-on:click="makeActive('home')">Home</a>
      <a href="#projects" class="projects" v-on:click="makeActive('projects')">Projects</a>
      <a href="#services" class="services" v-on:click="makeActive('services')">Services</a>
      <a href="#contact" class="contact" v-on:click="makeActive('contact')">Contact</a>
    </nav>

  </div>

</template>

<script>
export default {
  name: 'NavBar',
  el: '#nav',
  data() {
    return {
      active: 'home'
    }
  },
  methods: {
    makeActive: function (item) {
      this.active = item;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-align: center;
}

body {
  font: 15px/1.3 'Open Sans', sans-serif;
  color: #5e5b64;
  text-align: center;
}

a, a:visited {
  outline: none;
  color: #389dc1;
}

a:hover {
  text-decoration: none;
}

section, footer, header, aside, nav {
  display: block;
}

nav {
  display: inline-block;
  margin: 20px auto 15px;
  background-color: #5597b4;
}

nav a {
  display: inline-block;
  padding: 18px 30px;
  color: #fff !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;

  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
}

nav a:first-child {
  border-radius: 2px 0 0 2px;
}

nav a:last-child {
  border-radius: 0 2px 2px 0;
}

nav.home .home,
nav.projects .projects,
nav.services .services,
nav.contact .contact {
  background-color: #e35885;
}


</style>
