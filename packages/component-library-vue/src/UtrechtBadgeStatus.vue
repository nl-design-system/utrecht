<script setup lang="ts">
  defineProps<{
    status?: string;
  }>();
</script>

<template>
  <span
    class="utrecht-badge-status"
    :class="{
      ['utrecht-badge--' + status]: true,
    }"
  >
    <slot />
  </span>
</template>

<style src="@utrecht/components/badge-status/css/index.scss"></style>
