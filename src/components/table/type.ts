export interface Columns {
    key?: number | string,
    title: string,
    field: string,
    slot?: boolean,
    filter?: Function,
}