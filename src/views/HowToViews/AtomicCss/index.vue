<script setup>
import BlogHeader from '@/components/BlogHeader.vue'
import rocket from './nasa-unsplash.jpg'
</script>

<template>
  <div class="container hide-scroll">
    <BlogHeader title="Make Your Own Atomic CSS with SASS" description="Atomic CSS and CSS frameworks like Tailwind have been defining the landscape of Front-End Development.
    Learn how to master Atomic CSS and make it your own!" :img="rocket"/>
    <div class="content">
      <p class="text-left" style="margin-left: auto; margin-top: 2vh;">
      Atomic CSS and premade Atomic CSS frameworks like Tailwind CSS have been making a big impact on modern Front-End development <br>
      and for good reason! Atomic CSS is a style of CSS architecture that breaks down CSS classes to their smallest, most atomic bits. <br>
      Meaning that each class carries a single purpose in styling. Something like this:
      </p>
      <div style="margin-left: 0rem; margin-top: 2vh; background-color: black; color: white; margin-right: auto; width: 70vw;">
      .text-white { <br>
        color: white; <br>
      }<br>
      <br>
      .mr-2px {<br>
        margin-right: 2px;<br>
      }<br>
      <br>
      .background-brand {<br>
        background-color: #EA4C3B;<br>
      }<br>
      </div>
      <p class="text-left" style="margin-left: auto; margin-top: 2vh; margin-bottom: 3vh;">
      Each class here has a single job whether it's specifying text color or fixing the margin. This makes these classes extremely reusable throughout your project, and when <br>
      reading a components styling it is immediately apparant what is being modified - as opposed to scrolling back and forth between the HTML and CSS in a BEM approach.
      </p>
      <p class="text-left" style="margin-left: auto; margin-top: 2vh; margin-bottom: 3vh;">
      One major downside of Atomic CSS is that with such granular classes it can be a pain to write out every single variation of a modifier. If we are using pixels in our project <br>
      imagine filling a css file with increments of .margin-right-1px all the way through to .margin-right-500px. My eyes and fingers hurt just thinking about it! That's where <br>
      Tailwind comes in. Tailwind CSS is a premade Atomic CSS framework that can easily be imported into many projects. Personally I love Tailwind and how easy and fast it has made <br>
      my development. However, it isn't perfect. Tailwind CSS takes some time to learn as not all of the classes are intuitive. Some approaches to CSS that I personally enjoy <br>
      are ignored &#40;	like using view-height and width &#41;. Not to mention I find that I use a core set of css classes everywhere, while about 60% of the classes that <br>
      come loaded in I almost never use or serve edge cases that I could easily make a class for myself. While Tailwind allows all sorts of modifications that allow you to <br>
      customize the provided styling I've found it easier to make my own Atomic CSS framework with SASS. All of the utility of Atomic CSS but tailored to my personal <br>
      development style or to the project I'm making. What could be better?
      </p>
      <h2> Starting Out </h2>
      <div class="flex-col">
        <img src="./sass-grid.jpg" style="height: 35rem; width: 40rem;"/>
      </div>
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
