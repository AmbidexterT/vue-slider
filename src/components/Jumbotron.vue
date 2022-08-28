<template>
  <div class="container my-5">
    <div class="row">

      <Logo/>
      <arrow/>
      <div class="box">
          <img src="../assets/images/main.png" width="600" height="600" alt="">
        <div class="my-5">
          <Glass/>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <img src="../assets/images/mooner.png" width="500" height="500" alt="">
      </div>
      <div class="col-sm-6">
          <Glass/>
    </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <Card/>
      </div>
      <div class="col-sm-6"><img src="../assets/images/pc-lover.png" width="500" height="500" alt=""></div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <img src="../assets/images/pc-mooner.png" width="500" height="500" alt="">
      </div>
      <div class="col-sm-6">
        <Hover/>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <Expand/>
      </div>
      <div class="col-sm-6"><img src="../assets/images/pener.png" width="500" height="500" alt=""></div>
    </div>
  </div>
</template>

<script>

import arrow from './Arrow.vue'
import Logo from './Logo.vue'
import Card from './Card.vue'
import Hover from './Hover.vue'
import Expand from "@/components/Expand";
import Glass from "@/components/Glass";

export default {

  /* eslint-disable */
  name: 'Jumbotron',
  components: {
    Glass,
    Expand,
    Logo,
    arrow,
    Card,
    Hover
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
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
}


.col-sm-6 {
  text-align: left;
  margin-top: 100px;
}

.col-sm-6 {
  text-align: right;
  margin-top: 100px;
}
</style>
