<script setup>
import BlogHeader from '../BlogHeader.vue'
</script>

<template>
  <div class="container hide-scroll">
    <BlogHeader title="ANIMATED SIGNATURE" description="A custom animated signature, also covers how to use anime js for other custom animation needs"/>
    <div class="content">
      <p class="text-left" style="margin-left: auto; margin-top: 2vh;">
      Adding a personalized animated signature can add a custom flair to a personal website or social media profile.<br>
      But making one yourself is tedious right?
      WRONG! I'm going to show you how to whip up a personalized animation and host it on your own website.
      </p>
      <p style="margin-top: 2vh; margin-bottom: 3vh;">
      What you'll need:<br>
      * An image editing or digital painting software with animation capabilities.<br>
      * A place to host your animation.
      </p>
      <video width="400" controls>
      <source src="../Animations/InitialsAnimWhite.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
      </video>
      <p> An example of what we'll be creating </p>

      <p> To make this animation I used the Procreate app on ipad, though any software that supports animation will work. Photoshop is a great option, though if you're <br>
      looking for something free <a href="" target="_blank">OpenToonz</a> or <a href="https://www.pencil2d.org/" target="_blank">Pencil2D</a> will work, though the steps
      will be a bit different than if you use Procreate or Photoshop.
      </p>
      <h2> Starting Out </h2>
    </div>
  </div>
</template>

<style>
.content{
  margin-left: 15vw;
  padding-left: 6vw;
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
  transform: scale(0.7);
}

.hide-scroll{
  overflow-x: hidden !important;
}
</style>
