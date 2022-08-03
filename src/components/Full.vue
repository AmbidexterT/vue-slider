<template>
  <div class="container">
  <card data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
    <template v-slot:header><h1>Lakes</h1></template>
    <template v-slot:content><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></template>
  </card>
  <card data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
    <template v-slot:header><h1>Lakes</h1></template>
    <template v-slot:content><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></template>
  </card>
  <card data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
    <template v-slot:header><h1>Lakes</h1></template>
    <template v-slot:content><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></template>
  </card>
  <card data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=">
    <template v-slot:header><h1>Lakes</h1></template>
    <template v-slot:content><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></template>
  </card>
</div>
</template>

<script>
import card from '@/components/Cards.vue'
export default {
  /* eslint-disable */
  name: 'Full',
  components: {
    card
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/styles/style.scss';
</style>
