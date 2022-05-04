<script setup>
import BlogHeader from '@/components/BlogHeader.vue'
import CodeSnippet from '@/assets/background/code-snippet.jpg'
import CodeBox from '@/components/CodeBox.vue'
</script>

<template>
  <div class="container hide-scroll">
    <BlogHeader title="Code Box" description="HTML/CSS/JS for the CodeBox component" :img="CodeSnippet"/>
    <div class="content">
      <h2> Starting Out </h2>
      <p>
      Found on many coding forums and websites the CodeBox is a staple for quickly sharing code snippets.
      </p>
      <CodeBox style="margin-right: 10rem;"/>
    </div>
  </div>
</template>

<style>
.content {
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
