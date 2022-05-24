<script setup lang="ts">
  defineProps<{
    checked?: boolean;
    disabled?: boolean;
    type?: string;
  }>();
</script>

<template>
  <label
    class="utrecht-form-label"
    :class="{
      'utrecht-form-label--checked': checked,
      'utrecht-form-label--disabled': disabled,
      'utrecht-form-label--radio': type === 'radio',
      'utrecht-form-label--checkbox': type === 'checkbox',
    }"
  >
    <slot />
  </label>
</template>

<style src="@utrecht/components/form-label/css/index.scss"></style>
