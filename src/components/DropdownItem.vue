<script>

export default {
name: 'DropdownItem',
  props: {
  },
mounted() {
    // console.log('width:', width, 'type:' type);
},
}
</script>

<template>
<span
class="item"
v-bind="$attrs"
>
  <slot />
</span>
</template>
<style lang="css" scoped>
.item {
  width: inherit;
  background-color: lightgrey;
}

.item:hover{
  color: darkseagreen;
  background-color: white;
}
</style>