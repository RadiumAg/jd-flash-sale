<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps({
  link: {
    type: String,
    required: true
  }
})

const iframeRef = ref<HTMLIFrameElement>(null)

onMounted(() => {
  iframe.contentWindow.navigator.userAgent =
    'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/124.0.0.0'
})
</script>

<template>
  <div class="app-window-wrapper">
    <iframe ref="iframeRef" :src="link"></iframe>
  </div>
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
  position: absolute;
  right: 24px;
  top: 88px;
  width: 360px;

  iframe {
    width: 100%;
    height: 100%;
    resize: both;
    border: none;
  }
}
</style>
