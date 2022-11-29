<!-- button -->
<template>
    <button>
        <template v-if="loading">
            加载中
        </template>
        <span v-if="$slots.default">
            <slot />
        </span>
    </button>
</template>

<script lang="ts" setup>
import { buttonEmits, buttonProps } from './button'

defineOptions({
  name: 'whButton',
})

const props = defineProps(buttonProps)


</script>
<style lang='scss' scoped>

</style>