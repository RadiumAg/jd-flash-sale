<script setup lang="ts">
import AppWindow from './components/app-window.vue'

const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <div class="app-wrapper">
    <div class="left"></div>
    <AppWindow link="https:\/\/3.cn/1Y1wH-A1" />
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>

<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
