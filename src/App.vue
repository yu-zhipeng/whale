<template>
  <!-- 指定主题色 -->
  <input type="color" v-model="colorTheme" />
  <input type="input" v-model="colorTheme" />
  <div>
    <h3>button</h3>
    <wButton type="text" @click="handleClick" :color="colorTheme">button1</wButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import wButton from './components/button/button.vue'

const handleClick = () => {
  // alert(2)
}

const colorTheme = ref<string | number>('#0a68cd')

</script>