<template>
  <div id="main">
    <nav v-bind:class="active" v-on:click.prevent>
      <a href="#main" class="home" v-on:click="makeActive('home')">Home</a>
      <a href="#projects" class="projects" v-on:click="makeActive('projects')">Projects</a>
      <a href="#services" class="services" v-on:click="makeActive('services')">Services</a>
      <a href="#contact" class="contact" v-on:click="makeActive('contact')">Contact</a>
    </nav>

    <input type="checkbox" id='theme-switch' class='theme-switch' v-model="darkMode"/>
    <label for='theme-switch'>
                        <span v-if="darkMode === true">
                            <img alt="logo" src="../assets/images/sun.png" width="40">
                        </span>
      <span v-else>
                            <img alt="logo" src="../assets/images/moon.png" width="40">
                        </span>
    </label>

  </div>

</template>

<script>
export default {
  name: 'NavBar',
  el: '#main',
  data() {
    return {
      active: 'home',
      darkMode: false
    }
  },
  methods: {
    makeActive: function (item) {
      this.active = item;
    }
  },
  mounted() {
    let bodyElement = document.body;
    bodyElement.classList.add("app-background");
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem("theme");
    if (theme === 'dark') {
      htmlElement.setAttribute('theme', 'dark')
      this.darkMode = true
    } else {
      htmlElement.setAttribute('theme', 'light');
      this.darkMode = false
    }
  },
  watch: {
    darkMode: function () {
      let htmlElement = document.documentElement;
      if (this.darkMode) {
        localStorage.setItem("theme", 'dark');
        htmlElement.setAttribute('theme', 'dark');
      } else {
        localStorage.setItem("theme", 'light');
        htmlElement.setAttribute('theme', 'light');
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
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
  box-shadow: 0 1px 1px #ccc;
  border-radius: 1px;
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
