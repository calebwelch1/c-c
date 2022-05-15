<script setup>
import BlogHeader from '@/components/BlogHeader.vue'
</script>

<template>
  <div class="container hide-scroll">
  <BlogHeader title="Buttons" description="Buttons for all of your clicking needs"/>
  <div class="content">
    <div class="flex-row" style="margin-top: 3rem; margin-bottom: 3rem;">
      <button class="orange-box-button">
        Button
      </button>
      <button class="orange-box-button pill" style="margin-left: 20px;">
        Button
      </button>
      <button class="orange-box-button rounded-edge" style="margin-left: 20px;">
        Button
      </button>
    </div>
  </div>
  </div>
</template>
<style lang="scss">
.content {
  margin-left: 15vw;
  padding-left: 6vw;
  margin-bottom: 5vh;
  padding-right: auto;
  overflow: hidden;
}

.orange-box-button {
  border: 0 solid;
  color: white;
  background-color:#DA4232;
  width: 5.5rem;
  height: 2.2rem;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  box-shadow: 0px 5px 20px 1px #D0D0D0;
}

.orange-box-button:hover {
  cursor: pointer;
  box-shadow: 2px 2px 20px 1px #A9A9A9;
  background-color:#EA4C3B;
}

.orange-box-button:focus {
  background-color: #C43425;
}

.pill {
  border-radius: 99px;
}

.rounded-edge {
  border-radius: 8px;
}
</style>
