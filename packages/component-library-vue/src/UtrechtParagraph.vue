<script setup lang="ts">
  defineProps<{
    lead?: boolean;
  }>();
</script>

<template>
  <p class="utrecht-paragraph" :class="{ 'utrecht-paragraph--lead': lead }">
    <slot />
  </p>
</template>

<style src="@utrecht/components/paragraph/css/index.scss"></style>
