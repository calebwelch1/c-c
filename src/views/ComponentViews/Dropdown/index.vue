<script setup>
import BlogHeader from '@/components/BlogHeader.vue'
import Dropdown from '@/components/Dropdown.vue'
import DropdownItem from '@/components/DropdownItem.vue'
import DropdownLabel from '@/components/DropdownLabel.vue'

const log = (id) => {
console.log(`clicked: ${id}`);
}
</script>

<template>
  <div class="container hide-scroll">
  <BlogHeader title="Dropdown" description=":)"/>
    <div class="content">
    <div style="width: 16rem; height: 20rem;">
      <Dropdown>
        <template #label>
          <DropdownLabel :label="'Dropdown'"/>
        </template>
        <DropdownItem>
        hi!
        </DropdownItem>
        <DropdownItem>
        hey!
        </DropdownItem>
        <DropdownItem>
        hello!
        </DropdownItem>
      </Dropdown>
    </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>
