<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NInput } from 'naive-ui'
import AppWindow from './components/app-window.vue'

const link = ref()
const AppWindowRef = ref<InstanceType<typeof AppWindow>>()
const handleRefresh = () => {
  AppWindowRef.value?.refresh(link.value)
}

const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <div class="app-wrapper">
    <div class="left">
      <NInput v-model:value="link" class="input" placeholder="请输入url" />
      <NButton @click="handleRefresh">启动</NButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  padding: 10px;
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

.input {
  width: 400px;
  margin-right: 10px;
}
</style>
