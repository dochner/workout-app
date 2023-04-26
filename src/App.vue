<script setup lang="ts">
useHead({
  title: 'Workout App',
  meta: [
    { name: 'description', content: 'Workout App' },
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
  <div>
    <HBtn>Button</HBtn>
  </div>
</template>
