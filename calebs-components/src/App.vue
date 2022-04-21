<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import './stylesheets/index.css';
@import url('https://fonts.googleapis.com/css2?family=Akshar:wght@300&display=swap');

* {
  font-family: 'Akshar', 'Avenir', 'Arial', 'sans-serif' !important
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

.text-white {
  color: white;
}

</style>
