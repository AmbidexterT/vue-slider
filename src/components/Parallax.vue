<template>
  <div class="card-parallaxs">
    <h3>Your steps</h3>
    <div class="card-parallax card-parallax__one">
      <img class="card-parallax__img" src="../assets/images/woman-design.jpg" />
      <div class="card-parallax__text">
        <p class="card-parallax__title">Chilling</p>
      </div>
    </div>
    <div class="card-parallax card-parallax__two ms-5 ">
      <img class="card-parallax__img" src="../assets/images/designers-team.jpg" />
      <div class="card-parallax__text">
        <p class="card-parallax__title">Be a part of professional team</p>
      </div>
    </div>
    <div class="card-parallax card-parallax__three ms-5 ">
      <img class="card-parallax__img" src="../assets/images/graphic-designer.jpg" />
      <div class="card-parallax__text">
        <p class="card-parallax__title">Be creative</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Parallax",
  mounted() {
    const card = document.querySelector(".card-parallaxs");
    const images = document.querySelectorAll(".card-parallax__img");
    const backgrounds = document.querySelectorAll(".card-parallax__bg");
    const range = 40;

    const calcValue = (a, b) => (a/b*range-range/2).toFixed(1);

    let timeout;
    document.addEventListener('mousemove', ({x, y}) => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);

        card.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

        [].forEach.call(images, (image) => {
          image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
        });

        [].forEach.call(backgrounds, (background) => {
          background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
        })
      })
    }, false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/styles/parallax.scss";
</style>
