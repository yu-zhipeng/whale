import { ExtractPropTypes } from 'vue'

export const ButtonType = ['default', 'text']

export const ButtonSize = ['large', 'normal', 'small', 'mini'];

export const ButtonShape = ['default', 'round', 'circle']

export const ButtonNativeType = ['button', 'submit', 'reset']


export const buttonProps = {
    type: {
        type: String,
        values: ButtonType
    },
    size: {
        type: String,
        values: ButtonSize
    },
    loading: {
        type: Boolean,
    },
    round: {
        type: Boolean,
    },
    shape: {
        type: String,
        values: ButtonShape
    },
    color: {
        type: String,
    },
    disabled: {
        type: Boolean,
    },
    // icon: {
    //     type: String,
    // },
    autofocus: {
        type: Boolean,
    },
    dark: {
        type: Boolean,
    },
    'native-type': {
        type: String,
        values: ButtonNativeType
    }
}

export const buttonEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
  }

export type ButtonProps = ExtractPropTypes<typeof buttonProps>