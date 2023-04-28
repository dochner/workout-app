<script setup lang="ts">
interface Props {
  showing?: boolean
}

defineProps<Props>()
</script>

<template>
  <div
    v-show="showing"
    class="absolute inset-0 flex items-center justify-center bg-black/12"
  >
    <slot />
  </div>
</template>
