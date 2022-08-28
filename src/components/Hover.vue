<template>
  <div class="layout">

    <div class="card-hover">
      <img src="../assets/images/be-vr.jpg" alt="Avatar" class="image">
      <div class="overlay">It's you way</div>
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
