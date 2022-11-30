<!-- button -->
<template>
    <button ref="_ref" @click="handleClick">
        <template v-if="loading">
            加载中
        </template>
        <span v-if="$slots.default">
            <slot />
        </span>
    </button>
</template>

<script lang="ts" setup name="WButton" >
import { computed, ref } from 'vue';
import { calculateDarken } from '../../utils/style';
import { buttonEmits, ButtonProps, buttonProps } from './button'


const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const setButtonStyle = (props: ButtonProps) => {
    // need to figure out the appropriate style when setting custom colors
    return computed(() => {
        const customColor = props.color
        // computed dark color
        if (customColor) {
            const bgColor = calculateDarken(customColor)
        }
    })
}

const _ref = ref<HTMLButtonElement>()

const handleClick = (e: MouseEvent) => {
    emit('click', e)
}

defineExpose({
    ref: _ref,
})

</script>