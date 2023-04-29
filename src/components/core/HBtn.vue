<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { HBtnProps } from '~/types/components/core/HBtn'

const props = defineProps<HBtnProps>()

defineOptions({
  name: 'HBtn',
})

const componentColor = computed(() => {
  if (props.color === 'primary')
    return 'btn-primary text-white'
  if (props.color === 'secondary')
    return 'btn-secondary'
  if (props.color === 'accent')
    return 'btn-accent'
  if (props.color === 'success')
    return 'btn-success'
  if (props.color === 'error')
    return 'btn-error'
  if (props.color === 'warning')
    return 'btn-warning'
  if (props.color === 'info')
    return 'btn-info'
})

const componentClasses = computed(() => [
  props.block && 'btn-block',
  props.circle && 'btn-circle',
  props.dense && 'btn-sm',
  (props.to && !props.noLinkStyle) && 'btn-link',
  componentColor.value,

].filter(Boolean))

const isLink = computed(() => props.to)
const isLinkExternal = computed(() => (props?.to as string)?.includes('http'))

const componentIs = computed(() => isLink.value ? isLinkExternal.value ? 'a' : RouterLink : 'button')
</script>

<template>
  <component
    :is="componentIs"
    v-bind="$attrs"
    class="h-btn btn"
    :class="componentClasses"
    :to="to"
  >
    <slot
      v-if="icon"
      name="icon"
    >
      <div
        class="h-6 w-6"
        :class="[`${icon}`, dense && 'w-4 h-4']"
      />
    </slot>

    <div
      class="h-btn__content"
      un-p="x-6"
    >
      <slot />
    </div>
    <slot
      v-if="iconRight"
      name="iconRight"
    >
      <div
        class="h-6 w-6"
        :class="[`${iconRight}`, dense && 'w-4 h-4']"
      />
    </slot>
  </component>
</template>
