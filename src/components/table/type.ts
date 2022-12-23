export interface Columns {
    key?: number | string,
    title: string,
    field: string,
    slot?: boolean,
    filter?: Function,
    width?: string,
    minWidth?: string,
    fixed?: string | boolean,
    sortable?: boolean,
    sortOrder?: Array<sortOrderKey>,
    formatter?: Function,
    align?: alignType,
    className?: string,
}

export type sortOrderKey = 'ascending' | 'descending' | '' | null

export type alignType = 'left' | 'center' | 'right'

