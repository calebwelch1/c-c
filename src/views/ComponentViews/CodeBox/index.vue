<script setup>
import BlogHeader from '@/components/BlogHeader.vue'
import CodeSnippet from '@/assets/background/code-snippet.jpg'
import CodeBox from '@/components/CodeBox.vue'
</script>

<template>
  <div class="container hide-scroll">
    <BlogHeader title="Code Box" description="HTML/CSS/JS for the CodeBox component" :img="CodeSnippet"/>
    <div class="content">
      <h2> Code Snippet Box </h2>
      <p>
      Found on many coding forums and websites the CodeBox is a staple for quickly sharing code snippets.
      </p>
      <!-- <CodeBox style="margin-right: 2rem;"/> -->
      <p>
      Really It's just a basic tab box, with some increased utility by adding a copy button.
      </p>
      <CodeBox style="margin-right: 2rem;"
      :tabsArr="[
        {
          title:'HTML',
          content:`
          <div id=&quot;code-box&quot;>
          The most fun Div
          </div>
          `,
        },
        {
          title: 'CSS',
          content: `
          #code-box{
            color: white;
              margin: 15px;
              width: auto;
          }
          `,
        },
        {
          title: 'JS',
          content: `
          while &#40;coding &#61;&#61;&#61; true&#41; {
              return &quot;this is awesome&quot;
              }
          `,
        }
      ]"/>
      <h2> HTML </h2>
      <div class="flex-col">
        <img src="./code-box-html.jpg" />
      </div>
      <h2> CSS </h2>
      <div class="flex-col">
      <img src="./code-box-css-1.jpg" style="transform: scale(0.6); margin-top: 0rem; margin-bottom: 0rem;"/>
      <img src="./code-box-css-2.jpg" style="transform: scale(0.6); margin-top: 0rem; margin-bottom: 0rem;"/>
      </div>
      <h2> JS </h2>
      <div class="flex-col">
      <img src="./code-box-js-1.jpg" style="transform: scale(0.6); margin-top: 0rem; margin-bottom: 0rem;"/>
      <img src="./code-box-js-2.jpg" style="transform: scale(0.6); margin-top: 0rem; margin-bottom: 0rem;"/>
      </div>
    </div>
  </div>
</template>

<style>
.content {
  margin-left: 15vw;
  padding-left: 6vw;
  margin-bottom: 5vh;
  padding-right: auto;
  overflow: hidden;
}

.code-img {
  transform:scale(0.8);
  margin-left:-8vw;
  display: block;
}

@media screen and (max-width: 650px) {
  .content{
    padding-left: 5vw;
    padding-right: auto;
    margin-left: auto;
    margin-right: auto;
  }

  .code-img {
  transform:scale(0.3);
  margin-left:-30rem;
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
