<template>
  <div class="container-expand">
    <div>
      <img class="panel active" src="../assets/images/designer.png" />
      <h3>Demon Slayer: Tanjiro</h3>
    </div>
    <div>
      <img class="panel" src="../assets/images/designer.png" />
      <h3>Demon Slayer: Tanjiro</h3>
    </div>
    <div>
      <img class="panel" src="../assets/images/designer.png" />
      <h3>Demon Slayer: Tanjiro</h3>
    </div>
    <div>
      <img class="panel" src="../assets/images/designer.png" />
      <h3>Demon Slayer: Tanjiro</h3>
    </div>
    <div>
      <img class="panel" src="../assets/images/designer.png" />
      <h3>Demon Slayer: Tanjiro</h3>
    </div>
  </div>


</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ExpandCard",
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
