<script>

export default {
name: 'Dropdown',
  data() {
    return {
      showDropdown: false,
    };
  },
mounted() {
    // console.log('width:', width, 'type:' type);
},
};
</script>

<template>
<div
class="dropdown"
v-bind="$attrs"
@click="showDropdown = !showDropdown"
>
  <slot name="label" />
  <transition
  name="fade"
  mode="out-in"
  >
    <div
    v-if="showDropdown"
    class="dropdown-content"
    >
    <slot />
    </div>
  </transition>
</div>
</template>
<style lang="css" scoped>
.dropdown {
  width: 100%;
  height: 2.5rem;
  background: grey;
  border-radius: 0.375rem;
  position: relative;
  cursor: pointer;
}

.dropdown-content {
  width: inherit;
  background: white;
  border-radius: 0.375rem;
  position: absolute;
  top: 4rem;
  z-index: 20;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-8px);
  opacity: 0;
}
</style>