<script setup lang="ts">
import type { Personal } from '~/types/entities/Personal'

interface Props {
  personal: Personal
}

defineProps<Props>()
</script>

<template>
  <div class="shadow-xl card">
    <figure class="w-full">
      <img
        :alt="`${personal.fullName} Personal Trainer Picture`"
        class="w-full"
        :src="personal.image"
      >
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ personal.fullName }}
      </h2>
    </div>

    <div class="card-actions">
      <HBtn
        :to="`/personals/${personal.id}`"
        un-text="!dark"
      >
        More details
      </HBtn>
    </div>
  </div>
</template>
