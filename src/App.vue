<template>
  <div @click="handleClick" >start</div>
  <wButton @click="handleClick" >button</wButton>
</template>

<script lang="ts" setup >
import wButton from './components/button/button.vue'

const handleClick = () => {
  alert(1)
}

</script>