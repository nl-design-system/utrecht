<script setup lang="ts">
  defineProps<{
    external?: boolean;
  }>();
</script>

<template>
  <a
    class="utrecht-link"
    :class="{
      'utrecht-link--external': external,
    }"
  >
    <slot />
  </a>
</template>

<style src="@utrecht/components/link/css/index.scss"></style>
