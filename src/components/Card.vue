<template>
    <div class="content">
      <a>
        <div class="content-overlay"></div>
        <img class="content-image" src="https://imageio.forbes.com/blogs-images/olliebarder/files/2019/06/evangelion_origins-1200x675.jpg?format=jpg&width=1200" />
        <div class="content-details fadeIn-top">
          <h3>e v a n g e l i o n</h3>
          <p>god's in his heaven.  all's right with the world.</p>
        </div>
      </a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f9f9f9;
  font-size: 16px;
  font-family: 'Bebas Neue', cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  width: 50%;
}

@media screen and (max-width: 640px) {
  .container{
    display: block;
    width: 100%;
  }
}

@media screen and (min-width: 900px) {
  .container {
    width: 33.33333%
  }
}

.content {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
}

.content-image, .content-overlay {
  border-radius: 20px;
}

.content .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
  opacity: 1
}

.content-image {
  width: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out 0s;
  top: 50%;
  left: 50%;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-top {
  top: 20%;
}
</style>
