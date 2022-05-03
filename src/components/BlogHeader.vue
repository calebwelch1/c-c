<script>
import candy from '@/assets/background/candy.jpg'

export default {
name: 'BlogHeader',
  props: {
    img: {
        type: String,
        required: false,
        default: candy,
    },
    title: {
        type: String,
        required: false,
        default: 'A TITLE TEXT',
    },
    description: {
        type: String,
        required: false,
        default: 'Secondary Title Text that explains it, also its really long like aesthetically long'
    },
  },
mounted() {
    // console.log('width:', width, 'type:' type);
},
}
</script>

<template>
<div class="container container-nav-margin">
  <div class="col-span-12 flex-col justify-between" style="background: black; width: 100%; height: auto; min-height: 40vh;">
  <p class="text-white" style="font-size: 40px; font-weight: 500; margin-left: auto; margin-right: auto; margin-top: 2vh; margin-bottom: 1vh;"> Caleb's Components </p>
  <div style="border-bottom: 1px solid white; width: 75%; margin-left: auto; margin-right: auto; margin-bottom: 1vh;"/>
  <div class="title-row">
        <p class="title-text text-white mx-auto"  style="margin: 5rem;">{{title}}</p>
        <p class="title-text-secondary text-white" style="margin: 5rem;">{{description}}</p>
  </div>
  </div>
  <div class="col-span-12" :style="`background: url(${img}); height: auto; min-height: 60vh; width: 100%;`"/>
  </div>
</template>
<style lang="scss">
.title-text{
    font-size: 80px;
    font-weight: 700;
    text-align: center;
}

.title-text-secondary{
    font-size: 25px;
    font-weight: 100;
    font-family: 'Arial';
    text-align: center;
}

.container-nav-margin{
  width: 85vw;
  margin-left: 15vw;
}

.title-row{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media screen and (max-width: 650px) {
  .container-nav-margin{
    width: 100vw;
    margin-left: 0vw;
  }

  .title-row{
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr))
  }
}
</style>