import { ExtractPropTypes, PropType } from 'vue'
import type { Columns } from './type'

export const tableProps = {
    columns: { type: Array as PropType<Columns[]>, default: [] },
    dataSource: { type: Array, default: [] },
    bordered: {
        type: Boolean,
        default: false
    },
    width: {
        type: String,
    },
    fixed: {
        type: Boolean || Array as PropType<Array<number>>,
        default: false
    }
}

export const tableEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type TableProps = ExtractPropTypes<typeof tableProps>