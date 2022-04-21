<script setup>
</script>

<template>
<div class="main">
<h1 class="text-white title">
Caleb's Components
</h1>
<p class="text-white support-text">
A free library of reusable components and css knowledge
</p>
</div>
</template>

<style lang="scss">

.title {
  font-size: 70px;
  font-weight: 400;
  position: absolute;
  top: 25%;
}
.support-text {
  font-size: 25px;
  font-weight: 200;
  position: absolute;
  top: 40%;
}

.main{
display: grid;
grid-template-columns: repeat(12, minmax(0, 1fr));
height: 100vh;
width:100vw;
margin:0;
justify-items: center;
background: rgb(33,36,143);
background: radial-gradient(circle, rgba(33,36,143,1) 0%, rgba(49,140,115,1) 100%);
position: relative;
}

</style>