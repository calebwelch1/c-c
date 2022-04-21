<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="sidenav">
  <a href="#components">Components</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</div>
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

.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

</style>
