<script>
export default {
  name: 'ComponentsView',
  data() {
    return{
      components:[],
    };
  },
  methods: {
    routeComponentView(){
      this.$router.push('components');
    },
  },
}
</script>

<template>
<div class="main">
<h1 class="text-white title">
Components
</h1>
<router-link to="/buttons" class="text-white support-text">
&#149;   Buttons
</router-link>
<router-link to="/code-box" class="text-white support-text">
&#149;   Code-Box
</router-link>
</div>
</template>

<style lang="scss">

.title {
  font-size: 70px;
  font-weight: 400;
  margin-top: 25vh;
  margin-bottom: 2vh;
  text-align: center;
}
.support-text {
  font-size: 25px;
  font-weight: 200;
  margin-top: 5vh;
  margin-bottom: 2vh;
  text-align: center;
  margin-left: 4rem;
  margin-right: 4rem;
}

.start-button {
  font-size: 25px;
  font-weight: 200;
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-left: auto;
  margin-right: auto;
  width: 10rem;
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
display: flex;
flex-direction: column;
}

</style>