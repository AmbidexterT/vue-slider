<template>
  <div class="container my-5">
    <div class="row">
      <div class="center-block">
        <Logo/>
        <arrow/>
        <img src="../assets/images/main.png" width="600" height="600" alt=""></div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="left-block">
          <img src="../assets/images/mooner.png" width="500" height="500" alt="">
        </div>
      </div>
      <div class="col-md-5">
        <h1>
          Hello
        </h1>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="row">
          <h1>
            Hello
          </h1>
        </div>
      </div>
      <div class="col-md-5">
        <div class="row">
          <div class="right-block"><img src="../assets/images/pc-lover.png" width="500" height="500" alt=""></div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="left-block">
          <img src="../assets/images/pc-mooner.png" width="500" height="500" alt="">
        </div>
      </div>
      <div class="col-md-5">
        <h1>
          Hello
        </h1>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="row">
          <h1>
            Hello
          </h1>
        </div>
      </div>
      <div class="col-md-5">
        <div class="row">
          <div class="right-block"><img src="../assets/images/pener.png" width="500" height="500" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import arrow from './Arrow.vue'
import Logo from './Logo.vue'

export default {

  /* eslint-disable */
  name: 'Jumbotron',
  components: {
    Logo,
    arrow
  },
  data: () => ({
    darkMode: false
  }),
  mounted() {
    let theme = localStorage.getItem("theme");
    if (theme === 'dark') {
      this.darkMode = true
    } else {
      this.darkMode = false
    }
  },
  watch: {
    darkMode: function () {
      if (this.darkMode) {
        localStorage.setItem("theme", 'dark');
      } else {
        localStorage.setItem("theme", 'light');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-block {
  text-align: center;
  margin-top: 100px;
}

.left-block {
  text-align: left;
  margin-top: 100px;
}

.right-block {
  text-align: right;
  margin-top: 100px;
}
</style>
