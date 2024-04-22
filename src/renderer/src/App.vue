<script setup lang="ts">
import AppWindow from './components/app-window.vue'

const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <div class="app-wrapper">
    <div class="left">324234</div>
    <AppWindow class="right" link="https:\/\/3.cn/1Y1wH-A1" />
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.left {
  flex-grow: 1;
}

.right {
  flex-grow: 0;
  flex-shrink: 0;
}
</style>
