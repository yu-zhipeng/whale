<!-- table -->
<template>
    <div class="w-table">
        <div class="w-table-layout">
            <div class="w-table-main">
                <table>
                    <thead>
                        <tr>
                            <th v-for="item in columns">
                                <span v-text="item.title"></span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(dataSourceItem, dataSourceIndex) in dataSource">
                            <td v-for="columnItem in columns">
                                <span>{{ filterData(dataSourceItem, columnItem) }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" >
import { tableEmits, tableProps } from './table'
import type { TableProps } from './table'
import { Columns } from './type';

const props = defineProps(tableProps)

const columns = props.columns

const dataSource = props.dataSource

const filterData = (dataSourceItem: any, columnItem: Columns): string => {
    return dataSourceItem[columnItem.field]
}

</script>