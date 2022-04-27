<script setup>
import BlogHeader from '../BlogHeader.vue'
</script>

<template>
  <div class="container">
    <BlogHeader title="ANIMATED SIGNATURE" description="A custom animated signature, also covers how to use anime js for other custom animation needs"/>
    <div class="content">
      <p class="text-left" style="margin-left: auto; margin-top: 2vh;">
      Adding a personalized animated signature can add a custom flair to a personal website or social media profile.<br>
      But making one yourself is tedious right?
      WRONG! I'm going to show you how to whip up a personalized animation and host it on your own website.
      </p>
      <div class="initials" style="margin-top: auto; margin-bottom: auto; background: black;">
        <span class="initialspan"/>
      </div>
      <p style="margin-top: 2vh;">
      What you'll need:<br>
      * An image editing or digital painting software with animation capabilities.<br>
      * A place to host your animation.
      </p>
    </div>
  </div>
</template>

<style>
.content{
  margin-left: 15vw;
  padding-left: 10vw;
  padding-right: auto;
  overflow: hidden;
}

@media screen and (max-width: 650px) {
  .content{
    padding-left: 5vw;
    padding-right: auto;
    margin-left: auto;
    margin-right: auto;
  }
}

.initials .initialspan {
  position: absolute;
  display: block;
  background: url('@/assets/animations/initialsgif.gif');
  margin:0;
  margin-left: -6rem;
  width: 27rem;
  height: 20rem;
  background-repeat: no-repeat;
}
</style>
