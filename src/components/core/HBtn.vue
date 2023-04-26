<script setup lang="ts">
import type { HBtnProps } from '~/types/components/core/HBtn'

const props = defineProps<HBtnProps>()

defineOptions({
  name: 'HBtn',
})
</script>

<template>
  <button class="btn loading">
    <slot />
  </button>
</template>
