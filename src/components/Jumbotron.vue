<template>
  <div class="container my-5">
    <div class="row">
      <input type="checkbox" id='theme-switch' class='theme-switch button' v-model="darkMode"/>
      <div class="center-block"><img src="../assets/images/main.png"  width="600" height="600" alt=""></div>
      <div ><img src="../assets/images/mooner.png"  width="500" height="500" alt=""></div>
      <h1 class="bg-gradient">Availability.</h1>
      </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'Jumbotron',
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
</style>
