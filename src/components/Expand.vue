<template>
  <div class="container-expand">
    <div class="panel active" style="background-image: url('../assets/images/designer.png');">
      <h3>I dont remember the name</h3>
    </div>
    <div
        class="panel" style="background-image: url('../assets/images/designer.png'); ">
      <h3>Sword art online</h3>
    </div>
    <div
        class="panel" style="background-image: url('../assets/images/designer.png');">
      <h3>Forgot the name tbh</h3>
    </div>
    <div
        class="panel" style="background-image: url('../assets/images/designer.png');">
      <h3>Demon Slayer: Tanjiro</h3>
    </div>
    <div
        class="panel" style="background-image: url('../assets/images/designer.png');">
      <h3>One and Only: Naruto</h3>
    </div>
  </div>


</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Expand",
  mounted() {
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });

    const removeActiveClasses = () => {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/styles/expand.css">
</style>
