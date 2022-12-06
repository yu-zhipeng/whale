<!-- button -->
<template>
    <button :class="buttonClass" ref="_ref" @click="handleClick">
        <template v-if="loading">
            <!-- loading -->
        </template>
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script lang="ts" setup name="WButton" >
import { computed, ref } from 'vue';
import { calculateDarken, calculateAlphaColor } from '../../utils/style';
import { buttonEmits, ButtonProps, buttonProps } from './button'
import useComponentReady from '../../utils/hooks/useComponentReady'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const buttonInfo = useComponentReady('button', props)

const setButtonStyle = (props: ButtonProps) => {
    const { type, shape = 'default' } = props;
    return {
        [buttonInfo.classPrefix]: true,
        [`${buttonInfo.classPrefix}-${type}`]: type,
    }
}

let bgColor = computed(() => {
    const customColor = props.color
    if (customColor) {
        return calculateAlphaColor(customColor, props.type === 'primary' ? 1 : 0.2)
    }
})

let bgColorHover = computed(() => {
    const customColor = props.color
    if (customColor) {
        return calculateAlphaColor(customColor, 0.2)
    }
})

let borderColorHover = computed(() => {
    const customColor = props.color
    if (customColor) {
        return calculateAlphaColor(customColor, 0.5)
    }
})

// let borderColorFocus = computed(() => {
//     const customColor = props.color
//     if (customColor) {
//         return calculateAlphaColor(customColor, 0.8)
//     }
// })

// let bgColorFocus = computed(() => {
//     const customColor = props.color
//     if (customColor) {
//         return calculateAlphaColor(customColor, 0.4)
//     }
// })

let borderColorActive = computed(() => {
    const customColor = props.color
    if (customColor) {
        return calculateAlphaColor(customColor, 1)
    }
})

let bgColorActive = computed(() => {
    const customColor = props.color
    if (customColor) {
        return calculateAlphaColor(customColor, 0.3)
    }
})

const setButtonTheme = (props: ButtonProps) => {
    // need to figure out the appropriate style when setting custom colors
    const customColor = props.color
    // if (customColor) {
    //     bgColor.value = calculateBgColor(customColor)
    // }
    // return computed(() => {
    //     const customColor = props.color
    //     // computed dark color

    //     return {
    //         'w-button': true
    //     }
    // })
}

const buttonClass = setButtonStyle(props)
// const buttonTheme = setButtonTheme(props)

const _ref = ref<HTMLButtonElement>()

const handleClick = (e: MouseEvent) => {
    emit('click', e)
}

defineExpose({
    ref: _ref,
})

</script>

<style lang="scss" scoped >
// :link -> :visited -> :hover -> :active
.w-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    background-color: v-bind(bgColor);
    width: 100px;
    height: 30px;
    border-radius: 4px;
    border: 1px v-bind(color) solid;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
}

.w-button:hover {
    border-color: v-bind(borderColorHover);
    background: v-bind(bgColorHover);
}

.w-button:active {
    border-color: v-bind(borderColorActive);
    background: v-bind(bgColorActive);
    // box-shadow: 0px 0px 10px 0px rgba($color: #000000, $alpha: 0.3);
}
</style>