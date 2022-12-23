<!-- table -->
<template>
    <div class="w-table">
        <div class="w-table-layout">
            <div class="w-table-header">
                <div ref="headTable" class="table-header">
                    <!-- <span class="table-header-column" v-for="item in columns" :style="{ width: item.width || 'auto' }">
                        <span v-text="item.title"></span>
                    </span> -->
                    <table>
                        <colgroup>
                            <col v-for="item in columns" :width="item.width">
                        </colgroup>
                        <thead>
                            <tr>
                                <th :class="handFixed(item, true)" v-for="item in columns">
                                    <span v-text="item.title"></span>
                                </th>
                                <th class="mock-scrollbar mock-scrollbar-fixed"></th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div class="w-table-main" @scroll="handleScroll">
                <table ref="mainTable">
                    <colgroup>
                        <col v-for="item in columns" :width="item.width">
                    </colgroup>
                    <!-- <thead>
                        <tr>
                            <th v-for="item in columns">
                                <span v-text="item.title"></span>
                            </th>
                        </tr>
                    </thead> -->
                    <tbody>
                        <tr v-for="(dataSourceItem, dataSourceIndex) in dataSource">
                            <td :class="handFixed(columnItem, false)"  v-for="columnItem in columns">
                                <span>{{ formatData(dataSourceItem, columnItem) }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="tsx" >
import { tableEmits, tableProps } from './table'
import type { TableProps } from './table'
import { Columns } from './type';
import { nextTick, ref } from 'vue';

const mainTable = ref()
const headTable = ref()

const props = defineProps(tableProps)

const columns = props.columns

const dataSource = props.dataSource

const formatData = (dataSourceItem: any, columnItem: Columns): string => {
    return dataSourceItem[columnItem.field]
}

function handleProps(props: TableProps) {

}

const tableHeaderWidth = ref('100%')

function handleColumnWidth(columns: Columns[]) {
    const allHaveWidthProp = columns.find((item) => {
        return !item.width
    })
    if (allHaveWidthProp) {
        return '100%'
    } else {
        console.log(mainTable)
        // 计算出table的宽度
        return mainTable.value.clientWidth + 'px'
    }
}

function handleScroll(e: any) {
    console.log(e.target.scrollLeft)
    // 这里有点偏差在于如果定高出现竖向滚动条
    headTable.value.scrollLeft = e.target.scrollLeft
}

function handFixed(column: Columns, isHeader: boolean) {
    if (column.fixed) {
        if(isHeader){
            return `w-table-cell-fix-${column.fixed} w-table-cell-fix-header-${column.fixed}`
        }
        return `w-table-cell-fix-${column.fixed}`
    }
}

function initForm() {
    tableHeaderWidth.value = handleColumnWidth(columns)
}

nextTick(() => {
    // initForm()
})

defineExpose({

})



</script>

<style lang="scss" scoped >
.w-table {
    .w-table-layout {
        .w-table-main {
            position: relative;
            overflow: scroll auto;
            height: 200px;

            table {
                width: 100%;
                text-align: left;
                border-radius: 2px 2px 0 0;
                border-collapse: separate;
                border-spacing: 0;
                table-layout: fixed;


                th,
                td {
                    padding-left: 10px;
                    height: 50px;
                }

                thead {
                    tr {}

                    th {
                        position: relative;
                        font-size: 16px;
                        font-weight: bold;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: 1.25;
                        letter-spacing: normal;
                        color: #3a3a3a;
                        font-weight: 500;
                        text-align: left;
                        background: #fafafa;
                        border-bottom: 1px solid #f0f0f0;
                        transition: background .3s ease;
                        overflow-wrap: break-word;
                    }

                }

                tbody {
                    tr {
                        td {
                            border-bottom: 1px solid #e9ecef;
                            height: 49px;
                        }
                    }
                }
            }
        }

        .w-table-header {
            .table-header {
                overflow: hidden;

                .table-header-column {
                    display: inline-block;
                }

                table {
                    width: 100%;
                    text-align: left;
                    border-radius: 2px 2px 0 0;
                    border-collapse: separate;
                    border-spacing: 0;
                    table-layout: fixed;

                    th,
                    td {
                        padding-left: 10px;
                        height: 50px;
                    }

                    thead {
                        th {
                            position: relative;
                            font-size: 16px;
                            font-weight: bold;
                            font-style: normal;
                            font-stretch: normal;
                            line-height: 1.25;
                            letter-spacing: normal;
                            color: #3a3a3a;
                            font-weight: 500;
                            text-align: left;
                            background: #fafafa;
                            border-bottom: 1px solid #f0f0f0;
                            transition: background .3s ease;
                            overflow-wrap: break-word;
                        }

                    }
                }

                .mock-scrollbar {
                    position: relative;
                    padding-left: 0px;
                    background: #fafafa;
                    border-bottom: 1px solid #f0f0f0;
                    border-right: 1px solid #f0f0f0;
                    width: 16px;
                }

            }
        }
        .w-table-cell-fix-left {
            position: sticky !important;
            left: 0;
            z-index: 1;
        }
        .w-table-cell-fix-right {
            position: sticky !important;
            right: 0;
            z-index: 1;
        }

        .mock-scrollbar-fixed {
            position: sticky !important;
            right: 0;
            z-index: 1;
        }

        .w-table-cell-fix-header-right {
            right: 17px;
        }
    }
}
</style>