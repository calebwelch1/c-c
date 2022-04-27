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
      <div class="initials h-30 w-30 flex-col" style="zIndex; 5;">
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
  padding-left: 4rem;
  padding-right: 4rem;
}

@media screen and (max-width: 650px) {
  .content{
    margin-left: 0vw;
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

.initials .initialspan {
  position: absolute;
  display: block;
  background: url('@/assets/animations/initialsgif.gif');
  width: 35rem;
  height: 35rem;
  background-repeat: no-repeat;
}
</style>
