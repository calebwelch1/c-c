<script>

export default {
name: 'DropdownLabel',
  props: {
    label: {
      type: String,
      required: true,
    }
  },
mounted() {
    // console.log('width:', width, 'type:' type);
},
}
</script>

<template>
<span class="label">
  <div class="label-content">
  {{label}} <p style="margin-top: 0.05rem;">v</p>
  </div>
</span>
</template>
<style lang="scss">
.label{
  font-size: 24px;
  font-weight: 700;
  width: 100%;
}

.label-content{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-top: 0.3rem;
}
</style>