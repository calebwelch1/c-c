<script>
import { nextTick } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import useBreakpoints from '@/util/breakPoints.js'
import navIcon from '@/assets/icons/list_white.svg'

export default {
  name: 'App',
  mounted() {
    // console.log('width:', width, 'type:' type);
    console.log(useBreakpoints());
  },
  methods: {
    routeComponentView(){
      this.$router.push('components');
    },
    routeAboutView(){
      this.$router.push('about');
    },
    routeContactView(){
      this.$router.push('contact');
    },
    showNavButtons(){
      const navButtons = document.getElementsByClassName("nav-button");
      if (navButtons[0].style.display === "block") {
        for (let i = 0; i < navButtons.length; i++) {
          navButtons[i].style.display = "none";
        }
      }
      else {
        for (let i = 0; i < navButtons.length; i++) {
          navButtons[i].style.display = "block";
        }
      }
    },
  },
  data() {
    return {
      navIcon,
    }
  },
}
</script>

<template>
<div class="sidenav">
  <img class="nav-icon" @click="showNavButtons" style='color: #fff; height: 5rem; width: 3rem; margin-left: auto; margin-right: 2rem;' :src="navIcon"/>
  <button class="nav-button" @click="routeComponentView">Components</button>
  <button class="nav-button" @click="routeAboutView">About</button>
  <button class="nav-button" @click="routeContactView">Contact</button>
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
// sass
.try {
  &_sass{
    color: red;
  }
}

.text-white {
  color: white;
}

.display-block {
  display: block;
}

.display-none {
  display: none;
}
// nav
.sidenav {
  height: 100%;
  width: 15vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.nav-button {
  font-size: 30px;
  background: transparent;
  border: none;
  color: #fff;
  padding-top: 1vh;
  padding-bottom: 0.5vh;
  margin-left: 2vw;
  display: block;
}

.nav-button:hover{
  color: #99CCFF;
  cursor: pointer;
}

.nav-icon{
  display: none;
}
@media screen and (max-width: 600px) {
  .sidenav {
    width: 100%;
    height: auto;
  }

  .nav-icon {
    display: block;
  }
}

</style>
