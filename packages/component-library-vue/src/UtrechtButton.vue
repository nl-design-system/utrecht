<script setup lang="ts">
  defineProps<{
    appearance?: string;
    busy?: boolean;
    disabled?: boolean;
    type?: string;
  }>();
</script>

<template>
  <button
    class="utrecht-button"
    :aria-busy="busy || undefined"
    :class="{
      'utrecht-button--busy': busy,
      'utrecht-button--disabled': disabled,
      'utrecht-button--primary-action': appearance === 'primary-action-button',
      'utrecht-button--secondary-action': appearance === 'secondary-action-button',
      'utrecht-button--submit': type === 'submit',
      'utrecht-button--subtle': appearance === 'subtle-button',
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style src="@utrecht/components/button/css/index.scss"></style>
