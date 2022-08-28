<template>
  <div class="layout">

    <div class="card-hover">
      <img src="https://i.pinimg.com/736x/a5/5a/31/a55a3167f0a068894620b8ef69fd9040.jpg" alt="Avatar" class="image">
      <div class="overlay">It's a Test</div>
    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hover",
  mounted() {
    const card = document.querySelector('.card')

    function clickRotate() {
      card.classList.toggle('rotated')
    }

    card.addEventListener('click', clickRotate)

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/styles/hover.scss';
</style>
