<template >
  <div class="main">
    <div class="container">
      <div class="flex-parent">
        <div class="flex-child me-2">
          <div class="wrapper">
            <div class="images">
              <div class="img-1"></div>
              <div class="img-2"></div>
            </div>
            <div class="slider">
              <div class="drag-line">
                <span></span>
              </div>
              <input type="range" min="0" max="100" value="50">
            </div>
          </div>
        </div>
          <div class="flex-child ms-2">
            <h1>Possibility. Availability.</h1>
            <br/>
            <h1>To everyone!</h1>
          </div>
        <input type="checkbox" id='theme-switch' class='theme-switch button' v-model="darkMode"/>

        <label for='theme-switch'>
                        <span v-if="darkMode === true">
                            <img alt="logo" src="../assets/images/sun.png" width="40">
                        </span>
          <span v-else>
                            <img alt="logo" src="../assets/images/moon.png" width="40">
                        </span>
        </label>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  /* eslint-disable */
  name: "#main",
  data: () => ({
    slider: null,
    darkMode: false
  }),
  mounted() {
    let slider = document.querySelector(".slider input");
    const img = document.querySelector(".images .img-2");
    const dragLine = document.querySelector(".slider .drag-line");
    slider.oninput = () => {
      let sliderVal = slider.value;
      dragLine.style.left = sliderVal + "%";
      img.style.width = sliderVal + "%";
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-parent {
  display: flex;
}
.flex-child {
  text-align: center;
  box-sizing: border-box;
  width: 50%;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
}
.wrapper {
  position: relative;
  height: 410px;
  width: 720px;
  overflow: hidden;
  background: #fff;
  border: 0px solid #ffffff;
  box-shadow: 0px 0px 0px rgba(2, 2, 2, 0.15);
}

.wrapper .images {
  height: 100%;
  width: 100%;
  display: flex;
}

.wrapper .images .img-1 {
  height: 100%;
  width: 100%;
  background: url("../assets/images/background-text.jpg") no-repeat;

}

.wrapper .images .img-2 {
  position: absolute;
  height: 100%;
  width: 50%;
  background: url("../assets/images/background-modified.jpg") no-repeat;
}

.wrapper .slider {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 99;
}

.wrapper .slider input {
  width: 100%;
  outline: none;
  background: none;
  -webkit-appearance: none;
}

.slider input::-webkit-slider-thumb {
  height: 486px;
  width: 3px;
  background: none;
  -webkit-appearance: none;
  cursor: col-resize;
}

.slider .drag-line {
  width: 3px;
  height: 486px;
  position: absolute;
  left: 49.85%;
  pointer-events: none;
}

.slider .drag-line::before,
.slider .drag-line::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 222px;
  background: #fff;
}

.slider .drag-line::before {
  top: 0;
}

.slider .drag-line::after {
  bottom: 0;
}

.slider .drag-line span {
  height: 42px;
  width: 42px;
  border: 3px solid #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.slider .drag-line span::before,
.slider .drag-line span::after {
  position: absolute;
  content: "";
  top: 50%;
  border: 10px solid transparent;
  border-bottom-width: 0px;
  border-right-width: 0px;
  transform: translate(-50%, -50%) rotate(45deg);
}

.slider .drag-line span::before {
  left: 40%;
  border-left-color: #fff;
}

.slider .drag-line span::after {
  left: 60%;
  border-top-color: #fff;
}
</style>
