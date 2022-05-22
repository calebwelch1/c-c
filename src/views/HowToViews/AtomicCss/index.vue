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
      <h2> Grid </h2>
      <p class="text-left" style="margin-left: auto; margin-top: 2vh; margin-bottom: 3vh;">
      For reference be sure to read up a little on SCSS using the <a target="_blank" href="https://sass-lang.com/documentation/syntax">SCSS docs</a>
      </p>
      <p class="text-left" style="margin-left: auto; margin-top: 2vh; margin-bottom: 3vh;">
      As an introduction let's make our own custom grid css. Using the grid model is useful for aligning elements on a page, but it can be tedious to type out every single <br>
      modifier. With SCSS we can use for loops to compile a series of classes. SCSS for loops act like normal for loops in javascript. We give the function a <br>
      beginning and end point and specify a task for the function to complete in each loop. We instantiate a variable with the $ icon. So here $i indicates that $i will stand <br>
      in for the number our for loop is on. Inside the brackets we define the .grid-col-? class, with #{} being how we instantiate an SCSS template literal. This will <br>
      compile .grid-col-1 with a grid-template-column of 1, .grid-col-2 with a grid-template-column of 2 and so on.
      </p>
      <div class="flex-col">
        <img src="./sass-grid.jpg" style="height: 35rem; width: 40rem;"/>
      </div>
      <p class="text-left" style="margin-left: auto; margin-top: 2vh; margin-bottom: 3vh;">
      Example
      </p>
      <div class="grid-col-12" style="width: 30vw; height: 20rem; background-color: black; margin-top: 3rem;">
        <div class="col-span-12" style="background-color: black; color: white; height: 2px;">
        parent div class="grid-col-12"
        </div>
        <div class="col-span-3" style="background-color: blue; color: white;">
          class=col-span-3
        </div>
        <div class="col-span-6" style="background-color: yellow; color: black;">
          class=col-span-6
        </div>
        <div class="col-span-3" style="background-color: blue; color: white;">
          class=col-span-3
        </div>
      </div>
      <h2 class="text-left" style="margin-left: auto; margin-top: 2vh; margin-bottom: 3vh;">
      Colors
      </h2>
      <p class="text-left" style="margin-left: auto; margin-top: 3vh; margin-bottom: 2vh;">
      Similarly we can define a set of colors as a color palette and then use them throughout our project as a defined set of classes. Imagine a company has hired us <br>
      to update their company ui and they want their brand colors to be used throughout. These colors can be very specific, and typing out a set of classes for each color <br>
      in the palette would take us a long time. By setting a few colors as variables in the beginning of the project, we can re-use them anywhere else we use color.
      </p>
      <p class="text-left" style="margin-left: auto; margin-top: 3vh; margin-bottom: 2vh;">
      Here we set an array of colors as defined by $colors(...colors). The @each symbol denotes an each loop, $name <br> stands in for the name of the color, and $color stands in for
      the color value. Here I've created a series of <br> classes that will assign the background color of an html element to the colors we've defined in the $colors array.<br>
      This could easily be used to create a series of classes that set text-colors and so on.
      </p>
      <div class="flex-col">
        <img src="./scss_colors.jpg" style="height: 35rem; width: 40rem; margin-top: 3rem;"/>
      </div>
      <p class="text-left" style="margin-left: auto; margin-top: 2vh; margin-bottom: 3vh;">
      Example
      </p>
      <div class="grid-col-12" style="width: 30vw; height: 20rem; background-color: black; margin-top: 3rem;">
        <div class="col-span-12" style="background-color: black; color: white; height: 2px;">
        parent div class="grid-col-12"
        </div>
        <div class="col-span-3 bg-primary" style="color: white;">
          class=col-span-3 bg-primary
        </div>
        <div class="col-span-3 bg-secondary" style="color: black;">
          class=col-span-3 bg-secondary
        </div>
        <div class="col-span-3 bg-tertiary" style="color: white;">
          class=col-span-3 bg-tertiary
        </div>
        <div class="col-span-3 bg-support" style="color: white;">
          class=col-span-3 bg-support
        </div>
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
