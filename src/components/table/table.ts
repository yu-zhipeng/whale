import { ExtractPropTypes, PropType } from 'vue'
import type { Columns } from './type'

export const tableProps = {
    columns: { type: Array as PropType<Columns[]>, default: [] },
    dataSource: { type: Array, default: [] },
}

export const tableEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type TableProps = ExtractPropTypes<typeof tableProps>