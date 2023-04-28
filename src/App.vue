<script setup lang="ts">
useHead({
  title: 'WorkoutApp',
  meta: [
    { name: 'description', content: 'WorkoutApp' },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <router-view />
</template>
