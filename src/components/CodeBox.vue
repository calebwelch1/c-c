<script>
import candy from '@/assets/background/candy.jpg'

export default {
name: 'CodeBox',
  props: {
    content: {
        type: Object,
        required: true,
        default(rawProps) {
            return {title: 'generic', content: 'generic content',}
        }
    },
    },
}
</script>

<template>
<div>
codebox
  </div>
</template>
<style lang="scss">
</style>