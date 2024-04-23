<script setup lang="ts">
import { NSpin } from 'naive-ui'
import { onMounted, ref } from 'vue'

const link = ref('')
const isLoading = ref(false)
const iframeRef = ref<HTMLIFrameElement | null>(null)

defineExpose({
  refresh(value: string) {
    isLoading.value = true

    const timerOutId = setTimeout(() => {
      clearTimeout(timerOutId)
      link.value = value
      isLoading.value = false
    }, 1000)
  }
})
</script>

<template>
  <n-spin :show="isLoading">
    <div class="app-window-wrapper">
      <iframe ref="iframeRef" :src="link"></iframe>
    </div>
  </n-spin>
</template>

<style scoped lang="scss">
.app-window-wrapper {
  width: 360px;
  height: 720px;
  background: #fafafa;
  border-radius: 20px;
  box-shadow: 0 8px 12px #ebedf0;
  box-sizing: border-box;
  min-width: 360px;
  overflow: hidden;
  width: 360px;

  &::-webkit-scrollbar {
    width: 0; /* 隐藏滚动条 */
  }

  /* 如果需要自定义滚动条样式，可以继续添加如下规则 */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  iframe {
    width: 100%;
    height: 100%;
    resize: both;
    border: none;
  }
}
</style>
