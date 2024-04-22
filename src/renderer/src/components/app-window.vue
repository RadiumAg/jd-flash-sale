<script setup>
defineProps({
  link: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="app-window-wrapper">
    <iframe :src="link"></iframe>
  </div>
</template>

<style scoped lang="scss">
.app-window-wrapper {
  width: 360px;
  height: 720px;

  iframe {
    width: 100%;
    height: 100%;
    resize: both;
    border: none;
  }
}
</style>
