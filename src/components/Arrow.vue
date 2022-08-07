<template>

  <div class="container">
    <div class="arrow"></div>
    <div class="arrow"></div>
    <div class="arrow"></div>

  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "arrow",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: center;
  bottom: 5%;
  top: 95%;
}

.arrow {
  position: absolute;
  width: 2.1rem;
  height: 0.48rem;
  opacity: 0;
  transform: scale(0.3);
  animation: move-arrow 3s ease-out infinite;
}

.arrow:first-child {
  animation: move-arrow 3s ease-out 1s infinite;
}

.arrow:nth-child(2) {
  animation: move-arrow 3s ease-out 2s infinite;
}

.arrow:before,
.arrow:after {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: #971924;
}

.arrow:before {
  left: 0;
  transform: skewY(30deg);
}

.arrow:after {
  right: 0;
  width: 50%;
  transform: skewY(-30deg);
}

@keyframes move-arrow {
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    transform: translateY(2.28rem);
  }
  66.6% {
    opacity: 1;
    transform: translateY(3.12rem);
  }
  100% {
    opacity: 0;
    transform: translateY(4.8rem) scale(0.5);
  }
}
</style>
