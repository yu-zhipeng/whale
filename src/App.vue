<template>
  <!-- 指定主题色 -->
  <input type="color" v-model="colorTheme" />
  <input type="input" v-model="colorTheme" />
  <div>
    <h3>button</h3>
    <wButton type="text" @click="handleClick" :color="colorTheme">button1</wButton>
    <h3>table</h3>
    <div style="width: 500px;margin-left: 50px;" >
      <wTable :dataSource="dataSource" :columns="columns"></wTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import wButton from './components/button/button.vue'
import wTable from './components/table/table.vue'
import type { Columns } from "./components/table/type"
const handleClick = () => {
  // alert(2)
}

const columns: Columns[] = [{
  title: '姓名',
  field: 'name',
  key: 'name',
  width: '100px',
  fixed: 'left',
},
{
  title: '年龄',
  field: 'age',
  key: 'age',
  width: '600px',
},
{
  title: '住址',
  field: 'address',
  key: 'address',
  width: '100px',
  fixed: 'right',
}]

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const colorTheme = ref<string | number>('#0a68cd')

</script>