<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div class="try">
  <p class="try_sass">
  hi
  </p>
  </div>
</template>

<style lang="scss">
@import './stylesheets/index.css';

* {
  font-family: 'Avenir', 'Arial', 'sans-serif' !important
}

body{
  margin:0 !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: slate-grey;
  background-color: transparent;
}

.try {
  &_sass{
    color: red;
  }
}

</style>
